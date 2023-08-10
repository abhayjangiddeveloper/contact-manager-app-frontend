"use client";
import React, { useState } from "react";
// import "./style.css";
import "./style.css";
import Image from "next/image";
import errorImage from "../../assets/icons/error.svg";

const Input = ({
  type,
  placeholder,
  label,
  startIcon,
  endIcon,
  onChange,
  value,
  endOnClick,
  cursor,
  error,
  onFocus,
  onBlur,
}) => {
  const [trueCheck, setTrueCheck] = useState(false);

  const focusHandler = () => {
    setTrueCheck(!trueCheck);
  };
  return (
    <>
      <label className={`inputLabel ${trueCheck ? "labelColor" : ""}`}>
        {label}
      </label>
      <div className="inputWrapper">
        {startIcon && (
          <span className="inputStart">
            <Image src={startIcon} className="inputIcon" alt="startIcon" />
          </span>
        )}
        <input
          type={type}
          className="inputClass"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          style={{
            border: error
              ? `0.2rem solid ${error ? "#ff4d4f" : "transparent"}`
              : null,
          }}
          onFocus={onFocus || focusHandler}
          onBlur={onBlur || focusHandler}
        />
        {endIcon ? (
          error ? null : (
            <span
              className="inputEnd"
              onClick={endOnClick}
              style={{ cursor: cursor ? "pointer" : "" }}
            >
              <Image src={endIcon} className="inputIcon" alt="endIcon" />
            </span>
          )
        ) : null}
        {error && (
          <span className="error">
            <Image src={errorImage} className="inputIcon" alt="endIcon" />
          </span>
        )}
      </div>
      {error && <label className="errorMessage">{error}</label>}
    </>
  );
};

export default Input;
