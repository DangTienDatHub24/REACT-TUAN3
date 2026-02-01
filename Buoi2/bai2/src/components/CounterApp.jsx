import { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => {
        if (count > 0) setCount(count - 1);
    };
    const reset = () => setCount(0);

    return (
        <div className="counter-container">
            <h2
                className={`counter-value ${count > 10 ? "red" : ""}`}
            >
                {count}
            </h2>
            <div className="btn-group">
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default CounterApp;