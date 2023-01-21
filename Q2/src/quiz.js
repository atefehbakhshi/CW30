//1 - 1-SEO difficulties 2- Time to download 3- Support for js( when user disactive js on browser)

// 2 virtual DOM which is a representation of real dom kept in the memory and synchronized with the real DOM .unlike real DOM, virtual DOM identifies the minimal changes that are to be made to the DOM only updates that

// 3 Impretive: provide step by step DOM mutations untile reach desired UI.
// Declarative: describe the final state of desired UI

// 4 2-JSX is required when using React

// 5 props.children

// 6
{
  /* <h1 className="heading" style={{ color: "blue", border: "1px solid red" }}>
      Red Border Blue Heading
    </h1> */
}

// 7
// function Person(props) {
//   return (
//     <>
//       <p> {props.family}</p>
//       <p> {props.name}</p>
//     </>
//   );
// }
// export default Person;

// 8
// import React, { useState } from "react";
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const handleClick1 = () => {
//     setCounter(counter + 1);
//   };
//   const handleClick2 = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <div>
//       <div>{counter}</div>
//       <div className="buttons">
//         <button onClick={handleClick1}>Increment</button>
//         <button onClick={handleClick2}>Decrement</button>
//       </div>
//     </div>
//   );
// };

// export default App;
