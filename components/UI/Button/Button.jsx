const Button = ({ className, children, type = "submit", ...others }) => {
  return (
    <button type={type} className={`button ${className}`} {...others}>
      {children}
    </button>
  );
};
export default Button;
