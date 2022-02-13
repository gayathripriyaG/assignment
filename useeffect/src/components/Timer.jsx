import React from "react";

export const Timer = ({ start, setStart, end }) => {
  //React.useEffect(() => {
  //     const time = setInterval(() => {
  //       if (start < end) {
  //         setStart(start + 1);
  //       } else {
  //         clearInterval(time);
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(time);
  //     };
  //   }, [start]);

  //The code commented on top and the uncommented one on
  //the bottom works same it's just different way of writing to know that we can also write this way.

  React.useEffect(() => {
    const time = setInterval(() => {
      setStart(function (prev) {
        if (prev < end) {
          return prev + 1;
        } else {
          clearInterval(time);
          return prev;
        }
      });
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [start]);

  return (
    <div>
      <h1>IncrementTimer:{start}</h1>
    </div>
  );
};
