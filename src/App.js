import React, { useState, useCallback, useRef } from "react";
import {produce} from "immer";

const numRows = 20;
const numCols = 40;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

function App() {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = ()=> {
    if (!runningRef.current) {
      return;
    }
    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            //8neighbors
            /*
            |i-1,j-1|i+0,j-1|i+1,j-1|
            |i-1,j+0|i+0,j+0|i+1,j+0|
            |i-1,j+1|i+0,j+1|i+1,j+1|
            */
           if(i-1>=0&&i-1<numRows && j-1>=0&&j-1<numCols){
            neighbors+=g[i-1][j-1]
           }
           if(i>=0&&i<numRows && j-1>=0&&j-1<numCols){
            neighbors+=g[i][j-1]
           }
           if(i+1>=0&&i+1<numRows && j-1>=0&&j-1<numCols){
            neighbors+=g[i+1][j-1]
           }
           if(i-1>=0&&i-1<numRows && j>=0&&j<numCols){
            neighbors+=g[i-1][j]
           }
           if(i+1>=0&&i+1<numRows && j>=0&&j<numCols){
            neighbors+=g[i+1][j]
           }
           if(i-1>=0&&i-1<numRows && j+1>=0&&j+1<numCols){
            neighbors+=g[i-1][j+1]
           }
           if(i>=0&&i<numRows && j+1>=0&&j+1<numCols){
            neighbors+=g[i][j+1]
           }
           if(i+1>=0&&i+1<numRows && j+1>=0&&j+1<numCols){
            neighbors+=g[i+1][j+1]
           }



            // operations.forEach(([x, y]) => {
            //   const newI = i + x;
            //   const newJ = j + y;
            //   if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
            //     neighbors += g[newI][newJ];
            //   }
            // });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  };

  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>
      {/* <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }

          setGrid(rows);
        }}
      >
        random
      </button> */}
      <button
        onClick={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        clear
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 30px)`
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 30,
                height: 30,
                backgroundColor: grid[i][k] ? "lightgreen" : undefined,
                border: "solid .1px black"
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default App;