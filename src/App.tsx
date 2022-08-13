import React from "react";
import Card, { cardBorder } from "./components/Card";

const App = () => {
  const num = 1;

  return (
    <div>
      <Card
        onClick={(num) => console.log(num)}
        width="60px"
        height="60px"
        border={cardBorder.light}
      >
        <button>1231</button>
        <button>1231</button>
      </Card>
    </div>
  );
};

export default App;
