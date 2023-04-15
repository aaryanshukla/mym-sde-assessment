import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-[10px]",
  icbRoundedBorder22: "rounded-[22px]",
  icbCircleBorder18: "rounded-[18px]",
};
const variants = {
  FillGreen50: "bg-green_50 text-gray_600",
  OutlineDeeppurple100:
    "bg-deep_purple_100_1e outline outline-[1px] outline-deep_purple_100 text-gray_50",
  icbFillGray20063: "bg-gray_200_63",
  icbFillGray2007f: "bg-gray_200_7f",
};
const sizes = { sm: "p-[5px]", md: "p-[11px]", smIcn: "p-[9px]", mdIcn: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "icbRoundedBorder22",
    "icbCircleBorder18",
  ]),
  variant: PropTypes.oneOf([
    "FillGreen50",
    "OutlineDeeppurple100",
    "icbFillGray20063",
    "icbFillGray2007f",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
