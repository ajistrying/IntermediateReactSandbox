import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  // useEffect schedules this effect to run after every re render
  // useEffect hooks are mostly used for updarting something outside of the render cycle: i.e api request
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer); // return a callback to run some cleanup, this is good for unsubscribing from realtime updates
  });

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
