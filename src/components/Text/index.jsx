import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-5xl md:text-5xl text-[80px]",
  h2: "font-medium text-[8.65px]",
  h3: "font-normal text-[7.21px]",
  h4: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  h5: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  h6: "sm:text-2xl md:text-[26px] text-[28px]",
  body1: "font-bold text-2xl md:text-[22px] sm:text-xl",
  body2: "font-extrabold sm:text-[19.25px] md:text-[21.25px] text-[23.25px]",
  body3: "font-bold text-xl",
  body4: "text-lg",
  body5: "text-base",
  body6: "text-xs",
  body7: "font-medium text-[11.53px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
