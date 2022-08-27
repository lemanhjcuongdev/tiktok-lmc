import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,

  left_icon,
  right_icon,

  primary_style = false,
  border_style = false,
  text_style = false,
  rounded_style = false,
  className,

  disabled = false,

  msize = false,
  lsize = false,
  children,
  onClick,
  ...extraProps
}) {
  let BtnComponent = "button";
  const props = {
    onClick,
    ...extraProps,
  };
  //remove event listeners when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      console.log(key);
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to && !disabled) {
    props.to = to;
    BtnComponent = Link;
  } else if (href && !disabled) {
    props.href = href;
    BtnComponent = "a";
  }
  const classes = cx("wrapper", {
    [className]: className,
    primary_style,
    border_style,
    text_style,
    rounded_style,
    disabled,
    msize,
    lsize,
  });
  return (
    <BtnComponent className={classes} {...props}>
      {left_icon && <span className={cx("icon")}>{left_icon}</span>}
      <span className={cx("label")}>{children}</span>
      {right_icon && <span className={cx("icon")}>{right_icon}</span>}
    </BtnComponent>
  );
}

export default Button;
