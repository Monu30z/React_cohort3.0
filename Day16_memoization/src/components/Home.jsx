import React from "react";

const Home = ({ greet}) => {
  console.log("Home rendring....");
  greet()

  return <div>Home</div>;
};

// export default React.memo(Home, (prevProp, nextProp) => {
//   return prevProp.userName.id === nextProp.userName.id;
// });

export default React.memo(Home);
