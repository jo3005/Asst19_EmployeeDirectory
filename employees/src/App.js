import React from "react";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Employees />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
