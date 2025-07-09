// src/app/search/page.js
export default function SearchPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-4 py-2 w-full"
      />
    </div>
  );
}