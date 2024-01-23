import React from "react";
import img1 from "./img/heand1.jpg";
import img2 from "./img/heand2.jpg";
import img3 from "./img/heand3.jpg";
import img4 from "./img/heand4.jpg";

import s from "./gim.module.css";

let GimListHeand = () => {
  return (
    <div className={s.container}>
      <ul>
        <li>
          <img src={img1} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
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
export default GimListHeand;
