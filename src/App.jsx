import React from "react";
import Header from "./component/header/header";
import My from "./component/main/my";
import GimListHeand from "./component/gim/gimListHeand";
import GimListBack from "./component/gim/gimListBack";
import GimListLegs from "./component/gim/gimListLegs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<My />} />
        <Route path="/hend" element={<GimListHeand />} />
        <Route path="/back" element={<GimListBack />} />
        <Route path="/legs" element={<GimListLegs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
