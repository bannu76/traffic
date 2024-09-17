import { useEffect, useState } from "react";

import "./index.css";

const pedestrianStates = {
  red: {
    kolor: "red",
    duration: 400,
    next: "green",
    counter: 0,
  },
  green: {
    kolor: "green",
    duration: 3000,
    next: "yellow",
    counter: 0,
  },
};

const colorStates = {
  red: {
    kolor: "red",
    duration: 1000,
    next: "green",
    counter: 0,
  },
  yellow: {
    kolor: "yellow",
    duration: 500,
    next: "red",
    counter: 0,
  },
  green: {
    kolor: "green",
    duration: 3000,
    next: "yellow",
    counter: 0,
  },
};

let timerId = null;

const TrafficLights = () => {
  const [currentColor, setCurrentColor] = useState(colorStates.green.kolor);
  var { duration } = colorStates[currentColor];
  const [pedes, setPedes] = useState(false);
  const [durTme, setDurTme] = useState(duration);

  const getSignal = () => {
    const { next } = colorStates[currentColor];
    // console.log(currentColor);
    timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  };

  useEffect(getSignal, [currentColor, duration]);

  const stop = () => {
    clearTimeout(timerId);
  };

  const start = () => {
    getSignal();
  };

  const crossPedestrian = () => {
    if (currentColor === "red") {
      setPedes(!pedes);
      setDurTme(durTme + 5000);
      getSignal();
    }
  };

  //console.log(currentColor);
  return (
    <div className="traffic-container">
      <ul className="light-container">
        {Object.keys(colorStates).map((color) => (
          <li
            key={color}
            style={{
              backgroundColor:
                currentColor === color ? `${currentColor}` : `grey`,
              opacity: pedes ? "60%" : "100%",
            }}
          ></li>
        ))}
      </ul>

      <button onClick={crossPedestrian} className="pedestrian-button">
        Pedestrain {duration}
      </button>

      <button className="pedestrian-button" onClick={stop}>
        Stop
      </button>

      <button className="pedestrian-button" onClick={start}>
        Start
      </button>
    </div>
  );
};
export default TrafficLights;
