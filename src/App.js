import Users from "./User";
import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => item.first_name.toLowerCase().includes(query));
  };

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
