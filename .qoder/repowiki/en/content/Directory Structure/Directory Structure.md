# Directory Structure

<cite>
**Referenced Files in This Document**   
- [client/app/page.js](file://client/app/page.js)
- [client/app/layout.js](file://client/app/layout.js)
- [client/next.config.mjs](file://client/next.config.mjs)
- [client/tailwind.config.js](file://client/tailwind.config.js)
- [client/postcss.config.mjs](file://client/postcss.config.mjs)
- [client/eslint.config.mjs](file://client/eslint.config.mjs)
- [server/src/server.js](file://server/src/server.js)
- [server/src/config/db.js](file://server/src/config/db.js)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure Overview](#project-structure-overview)
3. [Client Application Structure](#client-application-structure)
4. [Server Application Structure](#server-application-structure)
5. [Frontend Routing and Layout System](#frontend-routing-and-layout-system)
6. [Backend MVC Architecture](#backend-mvc-architecture)
7. [Configuration Files](#configuration-files)
8. [Build Artifacts and Production Deployment](#build-artifacts-and-production-deployment)
9. [Developer Navigation Guide](#developer-navigation-guide)

## Introduction
This document provides a comprehensive overview of the VnV24 repository's directory structure, detailing the separation between client and server applications. The frontend is built with Next.js and located in the `/client` directory, while the backend is implemented with Express.js in the `/server` directory. This documentation explains the organization, routing mechanisms, architectural patterns, and configuration systems used in both applications.

## Project Structure Overview
The VnV24 repository follows a monorepo structure with clear separation between frontend and backend applications. The root directory contains configuration files and documentation, while the main applications reside in dedicated directories.

```mermaid
graph TD
VnV24[Root: VnV24] --> Client[client/]
VnV24 --> Server[server/]
VnV24 --> README[README.md]
VnV24 --> STYLE_GUIDE[STYLE_GUIDE_IMPLEMENTATION_SUMMARY.md]
Client --> App[app/]
Client --> Next[.next/]
Client --> Config[Configuration Files]
Server --> Src[src/]
Server --> Package[package.json]
Src --> Controllers[controllers/]
Src --> Models[models/]
Src --> Routes[routes/]
Src --> Middleware[middleware/]
Src --> Utils[utils/]
Src --> Config[config/]
Src --> ServerJS[server.js]
```

**Diagram sources**
- [client/app](file://client/app)
- [server/src](file://server/src)

## Client Application Structure
The client application is built with Next.js and follows the App Router pattern. The main application code resides in the `/client/app` directory, which serves as the entry point for all routes and layouts.

```mermaid
graph TD
Client[client/] --> App[app/]
Client --> Next[.next/]
Client --> Config[Configuration Files]
App --> Pages[Pages: about/, blog/, cart/, etc.]
App --> Components[components/]
App --> Layout[layout.js]
App --> Globals[global.css]
App --> Page[page.js]
Components --> Home[Home/]
Components --> Shop[Shop/]
Components --> Shared[shared/]
Components --> Header[Header.js]
Components --> Footer[Footer.js]
Home --> Hero[Hero.js]
Home --> Featured[FeaturedProducts.js]
Home --> Promo[PromotionalBanners.js]
Home --> Category[CategoryLinks.js]
Shop --> Filter[FilterSidebar.js]
Shop --> Grid[ProductGrid.js]
Shop --> Sort[SortDropdown.js]
Shared --> Card[ProductCard.js]
```

**Diagram sources**
- [client/app](file://client/app)
- [client/app/components](file://client/app/components)

**Section sources**
- [client/app/page.js](file://client/app/page.js)
- [client/app/layout.js](file://client/app/layout.js)

## Server Application Structure
The server application implements the MVC (Model-View-Controller) pattern using Express.js. The architecture separates concerns into distinct directories for controllers, models, routes, middleware, and utilities.

```mermaid
graph TD
Server[server/] --> Src[src/]
Server --> Package[package.json]
Src --> Controllers[controllers/]
Src --> Models[models/]
Src --> Routes[routes/]
Src --> Middleware[middleware/]
Src --> Utils[utils/]
Src --> Config[config/]
Src --> ServerJS[server.js]
Controllers --> Auth[Auth.controller.js]
Controllers --> Order[Order.controller.js]
Controllers --> Product[Product.controller.js]
Controllers --> Wishlist[Wishlist.controller.js]
Models --> AuthModel[User.model.js]
Models --> OrderModel[Order.model.js]
Models --> ProductModel[Product.model.js]
Models --> WishlistModel[Wishlist.model.js]
Routes --> AuthRoute[Auth.routes.js]
Routes --> UserRoute[User.routes.js]
Routes --> OrderRoute[Order.routes.js]
Routes --> WishlistRoute[Wishlist.routes.js]
Middleware --> AuthMiddleware[Auth.middleware.js]
Utils --> Token[token.js]
Config --> DB[db.js]
```

**Diagram sources**
- [server/src](file://server/src)
- [server/src/controllers](file://server/src/controllers)
- [server/src/models](file://server/src/models)
- [server/src/routes](file://server/src/routes)

## Frontend Routing and Layout System
The Next.js App Router in `/client/app` implements a file-based routing system where directory names correspond to URL paths. The structure supports static routes, dynamic routes, and nested layouts.

### Routing Patterns
```mermaid
flowchart TD
Start([App Router]) --> Static[Static Routes]
Start --> Dynamic[Dynamic Routes]
Start --> Layout[Layout System]
Static --> Home["/ (page.js)"]
Static --> About["/about (about/page.js)"]
Static --> Contact["/contact (contact/page.js)"]
Dynamic --> Blog["/blog/[slug] (blog/[slug]/page.js)"]
Dynamic --> Shop["/shop/[productId] (shop/[productId]/page.js)"]
Layout --> Root[Root Layout: layout.js]
Layout --> Apply[Applies to all pages]
Layout --> Components[Includes Header & Footer]
Style --> Tailwind[Tailwind CSS]
Style --> Fonts[Google Fonts: Inter, Playfair Display]
Style --> Theme[Custom Theme Configuration]
```

**Diagram sources**
- [client/app](file://client/app)
- [client/app/layout.js](file://client/app/layout.js)
- [client/tailwind.config.js](file://client/tailwind.config.js)

**Section sources**
- [client/app/page.js](file://client/app/page.js)
- [client/app/layout.js](file://client/app/layout.js)

## Backend MVC Architecture
The Express.js backend follows the MVC pattern with clear separation of responsibilities between components. Controllers handle business logic, models manage data, and routes define API endpoints.

```mermaid
sequenceDiagram
participant Client as "Frontend Client"
participant Routes as "API Routes"
participant Controllers as "Controllers"
participant Models as "Models"
participant DB as "MongoDB"
Client->>Routes : HTTP Request
Routes->>Controllers : Route Handling
Controllers->>Models : Data Operations
Models->>DB : Database Query
DB-->>Models : Data Response
Models-->>Controllers : Processed Data
Controllers-->>Routes : Response
Routes-->>Client : JSON Response
Note over Client,DB : Complete API Request Flow
```

**Diagram sources**
- [server/src/server.js](file://server/src/server.js)
- [server/src/routes/Auth.routes.js](file://server/src/routes/Auth.routes.js)
- [server/src/controllers/Auth.controller.js](file://server/src/controllers/Auth.controller.js)
- [server/src/models/User.model.js](file://server/src/models/User.model.js)

## Configuration Files
Both applications contain configuration files that define build settings, styling, linting, and development environment parameters.

### Client Configuration
```mermaid
graph TD
ClientConfig[Client Configuration] --> Next[Next.js]
ClientConfig --> Tailwind[Tailwind CSS]
ClientConfig --> PostCSS[PostCSS]
ClientConfig --> ESLint[ESLint]
Next --> nextConfig[File: next.config.mjs]
Next --> Purpose["Extends Next.js defaults"]
Tailwind --> tailwindConfig[tailwind.config.js]
Tailwind --> Colors["Custom color palette"]
Tailwind --> Fonts["Font family configuration"]
Tailwind --> Plugins["Typography plugin"]
PostCSS --> postcssConfig[postcss.config.mjs]
PostCSS --> Integration["Integrates Tailwind"]
ESLint --> eslintConfig[eslint.config.mjs]
ESLint --> Rules["Extends next/core-web-vitals"]
ESLint --> Ignores["Ignores build directories"]
```

### Server Configuration
```mermaid
graph TD
ServerConfig[Server Configuration] --> Express[Express.js]
ServerConfig --> MongoDB[MongoDB]
Express --> serverJS[server.js]
Express --> Middleware["CORS, JSON parsing"]
Express --> Routes["API route mounting"]
Express --> Port["Port configuration"]
MongoDB --> dbJS[config/db.js]
MongoDB --> Connection["MongoDB connection logic"]
MongoDB --> Error["Error handling"]
```

**Diagram sources**
- [client/next.config.mjs](file://client/next.config.mjs)
- [client/tailwind.config.js](file://client/tailwind.config.js)
- [client/postcss.config.mjs](file://client/postcss.config.mjs)
- [client/eslint.config.mjs](file://client/eslint.config.mjs)
- [server/src/server.js](file://server/src/server.js)
- [server/src/config/db.js](file://server/src/config/db.js)

## Build Artifacts and Production Deployment
The `.next` directory contains all build artifacts generated during the Next.js compilation process. These files are essential for production deployment and optimized runtime performance.

```mermaid
graph TD
Build[.next/] --> Server[server/]
Build --> Static[static/]
Build --> Types[types/]
Build --> Manifests[Manifest Files]
Server --> App[app/]
Server --> Chunks[chunks/]
Server --> Pages[pages/]
App --> Pages["Page-specific builds"]
App --> NotFound[_not-found/]
Chunks --> SSR[ssr/]
Chunks --> JS[JavaScript bundles]
Chunks --> CSS[CSS files]
Static --> Chunks[static/chunks/]
Static --> Dev[development/]
Manifests --> AppBuild[app-build-manifest.json]
Manifests --> Build[build-manifest.json]
Manifests --> Routes[routes-manifest.json]
Manifests --> Prerender[prerender-manifest.json]
Manifests --> Font[next-font-manifest.json]
```

**Diagram sources**
- [.next](file://client/.next)
- [client/.next/server](file://client/.next/server)
- [client/.next/static](file://client/.next/static)

## Developer Navigation Guide
This guide helps developers quickly locate key functionality within the VnV24 repository.

### Frontend Navigation
- **Homepage Components**: `client/app/components/Home/`
- **Shared UI Components**: `client/app/components/shared/`
- **Layout System**: `client/app/layout.js`
- **Global Styles**: `client/app/globals.css`
- **Page Routes**: `client/app/[page-name]/page.js`
- **Dynamic Routes**: `client/app/[resource]/[id]/page.js`

### Backend Navigation
- **API Endpoints**: `server/src/routes/`
- **Business Logic**: `server/src/controllers/`
- **Data Models**: `server/src/models/`
- **Authentication**: `server/src/controllers/Auth.controller.js`
- **Database Connection**: `server/src/config/db.js`
- **Request Validation**: `server/src/middleware/`

### Configuration Navigation
- **Next.js Settings**: `client/next.config.mjs`
- **Styling Configuration**: `client/tailwind.config.js`
- **Code Linting**: `client/eslint.config.mjs`
- **Server Environment**: `server/src/server.js`
- **Database Settings**: `server/src/config/db.js`

**Section sources**
- [client/next.config.mjs](file://client/next.config.mjs)
- [client/tailwind.config.js](file://client/tailwind.config.js)
- [server/src/server.js](file://server/src/server.js)