import React, { useEffect, useState } from "react";
import { Dikr } from "../Dikr/Dikr";
import { About } from "../About/About";

export const Home = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <div className="section" id="section1">
        <Dikr />
      </div>
      <div className="section" id="section2" style={{ textAlign: "right" }}>
        <About />
      </div>
    </div>
  );
};
