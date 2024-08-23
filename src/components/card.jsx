import "./card.css";
import { Link } from "react-router-dom";
export default function card(props) {
  const rowRev = props.rowRev ? "row" : "row-reverse";
  return (
    <div className="card" style={{ flexDirection: rowRev }}>
      <div className="card-imgWrapper">
        <div className="hover-details-button heading-font">
          <Link to={props.link}>DETAILS</Link>
        </div>
        <div className="card-imgContainer">
          <img src={props.img} alt="" />
        </div>
      </div>
      <div className="card-details">
        <p className="card-heading heading-font">{props.heading} </p>
        <p className="card-content content-font">{props.content}</p>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={props.link}
        >
          <div className="card-button heading-font">explore more</div>
        </Link>
      </div>
    </div>
  );
}
