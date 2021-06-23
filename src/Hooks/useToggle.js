import { useState, useEffect, useRef } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;
    if (toggle) {
      current.classList.remove("-translate-x-full");
    }

    return () => {
      current.classList.add("-translate-x-full");
    };
  }, [toggle]);

  return [toggle, setToggle, ref];
};

export default useToggle;
