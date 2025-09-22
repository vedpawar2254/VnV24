export default function BlogPostPage({ params }) {
    return (
      <div>
        <h1 className="text-4xl font-serif">Blog Post</h1>
        <p className="text-text-secondary mt-2">Reading post with slug: {params.slug}</p>
      </div>
    );
  }