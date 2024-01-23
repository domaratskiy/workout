import React from "react";
import img1 from "./img/back1.jpg";
import img2 from "./img/back2.jpg";

import s from "./gim.module.css";

let GimListBack = () => {
  return (
    <div className={s.container}>
      <ul>
        <li>
          <img src={img1} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
      </ul>
    </div>
  );
};
export default GimListBack;
