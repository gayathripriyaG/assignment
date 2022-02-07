import React from  "react";
 

//any function that returns html is called as component.
export const Counter = () => {
    
    // let arr = React.useState(0)
    // let count1 = arr[0];
    // let setCount1 = arr[1];
    // let [count2,setCount2] = React.useState(100)
    // const Increment = (count1) => {
    //    setCount1(count1+1)
    // }
    // return (
    // <div>
    //     <h1>Counter</h1>
    //     <h2>Increment counter:{count1}</h2>
    //     <h2>Decrement counter:{count2}</h2>
    //     <button onClick={() => Increment(count1)}>Increment</button>
    //     <button onClick={() => setCount2(count2-1)}>Decrement</button>
    // </div>
    // )


    const [count ,setCount] = React.useState(0)
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(count*2)}>Double</button>
        </div>
        )

}