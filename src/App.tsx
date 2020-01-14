import React, { useEffect, useRef, useCallback } from "react";
import "./styles.css";
import { MATRIX_SIZE, SCALING } from "./constants";
import { MatrixState } from "./components/MatrixState";

let matrixState: MatrixState;

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>();
  const clearAndRender = useCallback(() => {
    canvasRef.current
      .getContext("2d")
      .clearRect(0, 0, MATRIX_SIZE, MATRIX_SIZE);

    requestAnimationFrame(frame => {
      matrixState.render(frame);
    });
  }, [canvasRef]);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");

    context.fillStyle = "lightgrey";
    context.fillRect(0, 0, MATRIX_SIZE, MATRIX_SIZE);
    context.fill();

    context.fillStyle = "black";
    context.fillText("Sandbox", 10, 10);
    context.fill();

    matrixState = new MatrixState(context);

    setInterval(clearAndRender, 0);
  }, [canvasRef, clearAndRender]);

  return (
    <div className="App">
      <canvas
        style={{
          imageRendering: "pixelated",
          width: MATRIX_SIZE * SCALING
        }}
        ref={canvasRef}
        width={MATRIX_SIZE}
        height={MATRIX_SIZE}
      />
    </div>
  );
}
