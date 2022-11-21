import { Link } from "react-router-dom";
import "../Button/Button.scss";
function Button({
  to,
  href,
  primary,
  outline,
  text,
  size,
  rounded,
  classNames,
  disable,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) {
    delete props.onClick;
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes =
    ("wrapper",
    size,
    classNames,
    {
      primary,
      outline,
      text,
      disable,
      rounded,
    });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
