import PropTypes from "prop-types";

import classes from "./Input.module.css";

const Input = (props) => {
  const { invalid, field = "input", ...others } = props;

  return (
    <div
      className={`${props.className} ${classes.input__group}`}
      data-testid="login__input"
    >
      <label className={classes.label}>{props.label}</label>
      {field === "input" ? (
        <input
          {...others}
          className={`${invalid ? `${classes.invalid}` : ""} ${classes.input}`}
        ></input>
      ) : (
        <textarea {...others} className={classes.textarea}></textarea>
      )}
    </div>
  );
};

// Typechecking
Input.propTypes = {
  id: PropTypes?.string,
  label: PropTypes?.string,
  type: PropTypes?.string,
  invalid: PropTypes?.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export default Input;
