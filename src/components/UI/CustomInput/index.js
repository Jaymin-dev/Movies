import React, { useEffect } from "react";
import "./CustomInput.scss";
import cs from "classnames";

const CustomInput = React.forwardRef(
  (
    {
      className,
      showPriceContent,
      inputClassName,
      inputRef,
      withBorderBottom = false,
      value,
      defaultValue,
      ...res
    },
    ref
  ) => {
    useEffect(() => {
      if (showPriceContent) {
        setTimeout(() => {
          inputRef?.current?.focus();
        }, 200);
      }
    }, [showPriceContent]);

    return (
      <div ref={ref} className={cs({ [className]: className })}>
        <input
          className={cs("customInput", { [inputClassName]: inputClassName })}
          ref={inputRef || null}
          autoComplete="off"
          defaultValue={defaultValue}
          value={value}
          {...res}
        />
      </div>
    );
  }
);

export default CustomInput;
