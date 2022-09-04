import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [dValue, setDValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return dValue;
}

export default useDebounce;
