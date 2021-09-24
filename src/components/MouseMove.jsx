import React, { useEffect, useState } from "react";

function MouseMove() {
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setMouseMove({ x: event.pageX, y: event.pageY });
  };

  return (
    <div>
      <p>X Axis: {mouseMove.x}</p>
      <p>Y Axis: {mouseMove.y}</p>
    </div>
  );
}

export default MouseMove;
