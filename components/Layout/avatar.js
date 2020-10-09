import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const style = {
  borderRadius: "50%",
  border: "1px solid #7d7d7d",
  height: "30px",
  width: "30px",
  textAlign: "center",
  color: "#bdbdbd",
};

const Avatar = React.forwardRef(({ children, onClick }, ref) => (
  <div
    style={style}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <FontAwesomeIcon icon={faUserNinja} />
    {children}
  </div>
));

export default Avatar;
