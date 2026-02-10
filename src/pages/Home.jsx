import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-container">
        <h1>Home</h1>
        <h3>Count</h3>
        <p> {count} </p>
        <div>
          <button onClick={() => setCount(count + 1)} className="increment">
          
            +1

          
          </button>
          <button onClick={() => setCount(count - 1)} className="increment">

            -1
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Home;