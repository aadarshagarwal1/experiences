import Menu from "./components/menu";
import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function app() {
  const color = useSelector((store) => store.headerSlice).color;
  return (
    <div className="app">
      <Header color={color} />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}
