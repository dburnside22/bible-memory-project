const Button = ({ size = "md", children, ...rest }) => {
  let buttonClasses = "self-end text-white bg-blue-700 rounded text-bold";
  if ((size = "md")) {
    buttonClasses += " p-2";
  } else {
    buttonClasses += " p-1";
  }
  return (
    <button type="button" {...rest} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
