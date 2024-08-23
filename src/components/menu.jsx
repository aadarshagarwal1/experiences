import { useDispatch, useSelector } from "react-redux";
import "./menu.css";
import { Link } from "react-router-dom";
import { menuSliceActions } from "../store/menuSlice";
export default function menu() {
  const placesArray = useSelector((store) => store.places);
  const dispatch = useDispatch();
  const renderElement = placesArray.map((item, index) => {
    return (
      <Link
        to={item.link}
        style={{ textDecoration: "none", color: "white" }}
        key={index}
        onClick={() => {
          dispatch(menuSliceActions.changeValue());
        }}
      >
        <div className="menu-option">{item.name}</div>
      </Link>
    );
  });
  const menuSlice = useSelector((store) => store.menuSlice);
  return (
    <div className={`menu ${menuSlice.value}`}>
      <div className="menu-options">
        <Link
          to={"/experiences/home"}
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => {
            dispatch(menuSliceActions.changeValue());
          }}
        >
          <div className="menu-option-home">{"HOME"}</div>
        </Link>
        {renderElement}
      </div>
      <div className="menu-footer">
        <p className="menu-footer-heading">FOR MORE INFORMATION CONTACT.</p>
        <a
          href="mailto:info.bit-ex@gmail.com"
          style={{ textDecoration: "none" }}
        >
          <span className="contact-info">info.bit-ex@gmail.com</span>
        </a>
        <a href="tel:+91 9998887776" style={{ textDecoration: "none" }}>
          <span className="contact-info">TEL: +91 9998887776</span>
        </a>
      </div>
    </div>
  );
}
