import { Link } from "react-router-dom";
import HeaderHamburger from "./headerHamburger";
import { useDispatch } from "react-redux";
import { menuSliceActions } from "../store/menuSlice";
const header = (props) => {
  const color = props.color;
  const dispatch = useDispatch();
  return (
    <div className="header">
      <header
        className="p-3 mb-3"
        style={{
          borderBottom: `1px solid ${color}`, // Sets border width, style, and color
        }}
      >
        <div className="container">
          <div
            className="d-flex flex-wrap align-items-center "
            style={{ justifyContent: "space-between" }}
          >
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <div className="website-title" style={{ color: color }}>
                <h3 className="experiences-line">Ex-Periences</h3>
                <h4 className="bit-sindri-line">BIT SINDRI</h4>
              </div>
            </Link>
            <div
              className="header-hamburger-container"
              onClick={() => {
                dispatch(menuSliceActions.changeValue());
              }}
            >
              <HeaderHamburger color={props.color} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default header;
