const categories = ["Perfumes", "Oils", "Candles", "Incense"];
export default function FilterSidebar({ selectedCategories, onCategoryChange }) {
  return (
    <aside className="lg:col-span-1 bg-secondary p-6 rounded-lg border border-border-color">
      <h2 className="text-xl font-serif font-bold text-forest-green mb-4">Category</h2>
      <div className="space-y-3">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-3 text-text-dark cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-border-color text-gold focus:ring-gold"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            <span className="text-lg">{category}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}