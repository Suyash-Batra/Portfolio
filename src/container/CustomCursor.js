import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="cursor"></div>;
}
