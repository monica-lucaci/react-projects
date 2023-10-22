import { useState } from "react";
import { data } from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div className="container-wrapper">
        <div className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
