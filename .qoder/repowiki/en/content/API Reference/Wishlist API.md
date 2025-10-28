# Wishlist API

<cite>
**Referenced Files in This Document**   
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js)
- [Wishlist.model.js](file://server/src/models/Wishlist.model.js)
- [Wishlist.routes.js](file://server/src/routes/Wishlist.routes.js)
- [Auth.middleware.js](file://server/src/middleware/Auth.middleware.js)
- [Product.model.js](file://server/src/models/Product.model.js)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [API Endpoints](#api-endpoints)
3. [Authentication Requirements](#authentication-requirements)
4. [Data Structures](#data-structures)
5. [Error Responses](#error-responses)
6. [Usage Examples](#usage-examples)
7. [Sequence Diagrams](#sequence-diagrams)
8. [Data Validation and Duplicate Handling](#data-validation-and-duplicate-handling)

## Introduction
The Wishlist API in the VnV24 application enables authenticated users to manage their personal product wishlists. This API supports retrieving the current wishlist, adding new products, and removing existing ones. All operations are user-specific and require JWT-based authentication. The wishlist is stored as a user-specific document in the database, containing references to products via their ObjectIds.

**Section sources**
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L7-L56)
- [Wishlist.model.js](file://server/src/models/Wishlist.model.js#L2-L8)

## API Endpoints

### GET /api/v1/wishlist
Retrieves the authenticated user's wishlist with full product details.

- **Method**: GET
- **Authentication**: Required (JWT Bearer Token)
- **Response**: 200 OK with wishlist data including populated product information

### POST /api/v1/wishlist
Adds a product to the authenticated user's wishlist.

- **Method**: POST
- **Authentication**: Required (JWT Bearer Token)
- **Request Body**: `{"productId": "60d5ecf0f1b2c34567890123"}`
- **Response**: 201 Created with updated wishlist data

### DELETE /api/v1/wishlist/:productId
Removes a specific product from the authenticated user's wishlist.

- **Method**: DELETE
- **Authentication**: Required (JWT Bearer Token)
- **URL Parameter**: `productId` - the ObjectId of the product to remove
- **Response**: 200 OK with updated wishlist data

**Section sources**
- [Wishlist.routes.js](file://server/src/routes/Wishlist.routes.js#L7-L9)
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L7-L56)

## Authentication Requirements
All Wishlist API endpoints require user authentication via JWT tokens. The authentication process follows these steps:

1. The client must include a Bearer token in the Authorization header: `Authorization: Bearer <token>`
2. The middleware validates the JWT signature using the secret key from environment variables
3. Upon successful validation, the user's information (excluding password) is attached to the request object
4. The wishlist operations are scoped to the authenticated user's ID

Unauthenticated requests receive a 401 Unauthorized response.

```mermaid
sequenceDiagram
participant Client
participant API
participant AuthMiddleware
participant Database
Client->>API : GET /api/v1/wishlist<br/>Authorization : Bearer <token>
API->>AuthMiddleware : Verify token
AuthMiddleware->>AuthMiddleware : jwt.verify(token, JWT_SECRET)
AuthMiddleware->>Database : User.findById(decoded.id)
Database-->>AuthMiddleware : User data (no password)
AuthMiddleware->>API : req.user = user, next()
API->>Database : Wishlist.findOne({ user : req.user._id })
Database-->>API : Wishlist with populated products
API-->>Client : 200 OK { success : true, data : wishlist }
```

**Diagram sources**
- [Auth.middleware.js](file://server/src/middleware/Auth.middleware.js#L3-L17)
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L7-L9)

## Data Structures

### Wishlist Response Structure
The API returns wishlist data in the following format:

```json
{
  "success": true,
  "data": {
    "_id": "60d5ecf0f1b2c34567890123",
    "user": "60d5ecf0f1b2c34567890124",
    "products": [
      {
        "_id": "60d5ecf0f1b2c34567890125",
        "name": "Premium Perfume",
        "price": 89.99,
        "images": ["https://example.com/image.jpg"],
        "category": "fragrance",
        "fragranceNotes": ["citrus", "woody", "musky"],
        "stock": 15,
        "isFeatured": true
      }
    ],
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Wishlist Model Schema
The wishlist is stored in MongoDB with the following schema:

- **user**: Reference to the User document (required)
- **products**: Array of references to Product documents
- **timestamps**: Automatically managed createdAt and updatedAt fields

**Section sources**
- [Wishlist.model.js](file://server/src/models/Wishlist.model.js#L2-L8)
- [Product.model.js](file://server/src/models/Product.model.js#L2-L17)

## Error Responses
The Wishlist API returns standardized error responses with appropriate HTTP status codes:

### 400 Bad Request
Returned when the request is malformed or missing required data.

```json
{
  "success": false,
  "message": "Product ID required"
}
```

**Triggered by**: POST requests without a productId in the request body.

### 401 Unauthorized
Returned when authentication is missing or invalid.

```json
{
  "message": "Not authorized"
}
```

```json
{
  "message": "Invalid or expired token"
}
```

**Triggered by**: Missing or invalid JWT token in the Authorization header.

### 404 Not Found
Returned when the requested resource cannot be found.

```json
{
  "success": false,
  "message": "Wishlist not found"
}
```

**Triggered by**: DELETE operations when the user has no existing wishlist.

**Section sources**
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L19-L36)
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L41-L56)
- [Auth.middleware.js](file://server/src/middleware/Auth.middleware.js#L3-L17)

## Usage Examples

### Adding a Product to Wishlist
Using curl:
```bash
curl -X POST https://api.vnv24.com/api/v1/wishlist \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \
  -H "Content-Type: application/json" \
  -d '{"productId": "60d5ecf0f1b2c34567890125"}'
```

Using JavaScript fetch:
```javascript
fetch('https://api.vnv24.com/api/v1/wishlist', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ productId: '60d5ecf0f1b2c34567890125' })
})
.then(response => response.json())
.then(data => console.log(data));
```

### Retrieving User's Wishlist
Using curl:
```bash
curl -X GET https://api.vnv24.com/api/v1/wishlist \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
```

Using JavaScript fetch:
```javascript
fetch('https://api.vnv24.com/api/v1/wishlist', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

**Section sources**
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L19-L36)
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L7-L14)

## Sequence Diagrams

### Adding Product to Wishlist
```mermaid
sequenceDiagram
participant Client
participant API
participant Database
Client->>API : POST /api/v1/wishlist<br/>{productId : "60d5..."}
API->>API : Validate productId exists
API->>Database : Find wishlist for req.user._id
Database-->>API : Return existing wishlist or null
alt Wishlist doesn't exist
API->>API : Create new wishlist with productId
else Wishlist exists
API->>API : Check if productId already in wishlist
alt Product not already in wishlist
API->>API : Add productId to products array
end
end
API->>Database : Save wishlist
Database-->>API : Saved wishlist document
API-->>Client : 201 Created { success : true, data : wishlist }
```

**Diagram sources**
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L19-L36)

### Removing Product from Wishlist
```mermaid
sequenceDiagram
participant Client
participant API
participant Database
Client->>API : DELETE /api/v1/wishlist/60d5...
API->>Database : Find wishlist for req.user._id
Database-->>API : Wishlist document
alt Wishlist not found
API-->>Client : 404 Not Found { success : false, message : "Wishlist not found" }
else Wishlist found
API->>API : Filter products array<br/>removing specified productId
API->>Database : Save updated wishlist
Database-->>API : Saved wishlist document
API-->>Client : 200 OK { success : true, data : wishlist }
end
```

**Diagram sources**
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L41-L56)

## Data Validation and Duplicate Handling
The Wishlist API implements the following validation and duplicate handling mechanisms:

### Product ID Validation
- The POST endpoint validates that a productId is included in the request body
- If missing, returns 400 Bad Request with message "Product ID required"
- The API assumes the productId is a valid MongoDB ObjectId format, relying on Mongoose for type validation

### Duplicate Entry Handling
- Before adding a product, the API checks if the productId already exists in the user's wishlist
- If the product is already present, it is not added again (no duplicate entries)
- This prevents redundant data and maintains data integrity
- The check is performed using JavaScript's includes() method on the products array

### Empty Wishlist Handling
- When retrieving a wishlist, if no wishlist document exists for the user, the API returns a default structure with an empty products array
- This ensures consistent response format regardless of whether the user has items in their wishlist

**Section sources**
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L19-L36)
- [Wishlist.controller.js](file://server/src/controllers/Wishlist.controller.js#L7-L14)