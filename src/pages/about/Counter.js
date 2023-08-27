import React, { useState, useEffect } from "react";
import './About.css';
function Counter() {
    const [counters, setCounters] = useState([
        {target: 12060, label: "Students", value: 0 },
        {target: 13592, label: "Staff", value: 0 },
        {target: 42, label: "Events", value: 0 },
        {target: 15, label: "College", value: 0 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prevCounters =>
                prevCounters.map(counter => {
                    if (counter.value < counter.target) {
                        const increment = counter.target / 500;
                        return { ...counter, value: Math.ceil(counter.value + increment) };
                    } else {
                        return counter;
                    }
                })
            );
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="counters-wrapper">
                {counters.map((counter, index) => (
                    <div key={index} className="counter-container">
                        <div className="counter">{counter.value}</div>
                        <span>{counter.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Counter;
