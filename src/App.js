// App.js
import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Scaner from "./Scaner";
import FitnessDetails from "./FitnessDetails";
import Form from "./Form";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh", margin: "0" }}>
      <Header />
      <SubHeader />
      <Scaner />
      <FitnessDetails />
      <Form />
      {/* Your other components and content */}
    </div>
  );
};

export default App;
