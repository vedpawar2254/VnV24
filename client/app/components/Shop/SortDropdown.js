export default function SortDropdown({ sortOrder, setSortOrder }) {
    return (
      <div className="relative">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="appearance-none bg-primary border border-border-color rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-gold text-text-dark"
        >
          <option value="default">Default Sorting</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    );
  }