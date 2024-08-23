import React, { useState } from "react";
import "./headerHamburger.css";
import { useSelector } from "react-redux";

export default function HeaderHamburger(props) {
  const val = useSelector((store) => store.menuSlice).value;
  return (
    <div
      className={`custom-header-hamburger ${
        val === "slide-out" ? "" : "active"
      }`}
    >
      <div className={`burger ${val === "slide-out" ? "" : "active"}`}>
        <span style={{ background: props.color }}></span>
        <span style={{ background: props.color }}></span>
        <span style={{ background: props.color }}></span>
      </div>
    </div>
  );
}
