import { useRef, useState } from "react";

export default function SearchableList({ items, itemKey, children }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange);
    }
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
  }
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResult.map((item, index) => (
          <li key={itemKey(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
