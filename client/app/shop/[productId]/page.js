export default function ProductDetailsPage({ params }) {
    return (
      <div>
        <h1 className="text-4xl font-serif">Product Details</h1>
        <p className="text-text-secondary mt-2">Showing details for product ID: {params.productId}</p>
      </div>
    );
  }