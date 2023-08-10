import React from "react";
import "./style.css";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({
  type,
  onClick,
  disabled,
  label,
  loadingColor,
  loading,
  style,
}) => {
  return (
    <div className="buttonContainer">
      <button
        className="commonButton"
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={{ ...style, color: loading ? "transparent" : "white" }}
      >
        {label}
      </button>
      {loading && (
        <CircularProgress
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            color: loadingColor ? loadingColor : "white",
          }}
          size={"3rem"}
        />
      )}
    </div>
  );
};

export default Button;
