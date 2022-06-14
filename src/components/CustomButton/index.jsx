import {Button} from "antd";
import React from "react";
import styles from "./CustomButton.module.css";

export default function CustomButton({variant, icon, children, isDisabled}) {
  const variantClass = (variant) => {
    if (variant === "primary") {
      return styles.primary;
    } else if (variant === "secondary") {
      return styles.secondary;
    } else if (variant === "primary-disabled") {
      return styles.primaryDisabled;
    } else if (variant === "secondary-disabled") {
      return styles.secondaryDisabled;
    }
  };
  return (
    <Button
      className={`${styles.btn} ${variantClass(variant)}`}
      disabled={isDisabled}
      icon={icon}
      block
    >
      {children}
    </Button>
  );
}
