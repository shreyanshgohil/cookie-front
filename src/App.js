import React, { useEffect } from "react";

const App = () => {
  const demo = async () => {
    const response = await fetch("http://localhost:5000/hello-wrold", {
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
