import React from "react";
import img3 from "./img/legs1.jpg";
import img4 from "./img/legs2.jpg";

import s from "./gim.module.css";

let GimListLegs = () => {
  return (
    <div className={s.container}>
      <ul>
        <li>
          <img src={img3} alt="" />
        </li>
        <li>
          <img src={img4} alt="" />
        </li>
      </ul>
    </div>
  );
};
export default GimListLegs;
