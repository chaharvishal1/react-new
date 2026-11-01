import React from 'react';

// const DerivedState = ({ quantity, price }) => {
//   const total = quantity * price;
//   return (
//     <div className="container">
//         <h1>Here is the example of derived state</h1>
//         <p>your total is {total}</p>
//     </div>
//   );
// };

// const DerivedState = ({ quantity, price }) => {
//   const [result, setResult] = React.useState(quantity * price);
//   return (
//     <div className="container">
//         <h1>Here is the example of derived state</h1>
//         <p>your total is {result}</p>
//     </div>
//   );
// };


// const DerivedState = ({ quantity, price }) => {
//   useEffect(() => {
//     setResult(quantity * price);
//   }, [quantity, price]);

//   const [result, setResult] = React.useState(quantity * price);
//   return (
//     <div className="container">
//         <h1>Here is the example of derived state</h1>
//         <p>your total is {result}</p>
//     </div>
//   );
// };


const DerivedState = ({ quantity, price }) => {
  const result = React.useMemo(() => quantity * price, [quantity, price]);

  return (
    <div className="container">
        <h1>Here is the example of derived state</h1>
        <p>your total is {result}</p>
    </div>
  );
};

export default DerivedState;