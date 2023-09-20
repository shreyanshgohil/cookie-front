import React, { useEffect } from "react";

const App = () => {
  const demo = async () => {
    const response = await fetch("https://cookie-back.onrender.com/hello-wrold", {
      method: "post",
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    demo();
  }, []);

  return <div>App</div>;
};

export default App;
