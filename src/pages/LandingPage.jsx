import { useState } from "react";

const LandingPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      yo its the landing page
      <br />
      count: {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default LandingPage;
