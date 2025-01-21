import "./Counter.css";


const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <div className="counter-container">
        <h1 className="counter-title">Counter App</h1>
        <h2 className={`counter-value ${count > 0 ? 'positive' : count < 0 ? 'negative' : ''}`}>
          {count}
        </h2>
        <div className="button-group">
          <button className="button increment" onClick={increment}>
            +
          </button>
          <button
            className="button decrement"
            onClick={decrement}
            disabled={count === 0}
          >
            -
          </button>
          <button className="button reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      
    );
  };
  
  export default Counter;