const categories = ["Perfumes", "Oils", "Candles", "Incense"];
export default function FilterSidebar({ selectedCategories, onCategoryChange }) {
  return (
    <aside className="lg:col-span-1 bg-primary p-6 rounded-lg">
      <h2 className="text-xl font-bold  mb-4">Category</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2 text-text-secondary cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-accent focus:ring-accent"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}