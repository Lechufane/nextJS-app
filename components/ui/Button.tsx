import React from "react";
import Link from "next/link";

import classes from "./Button.module.css";

interface Props {
  link?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  if (props.link)
    return (
      <Link href={props.link} className={classes.link}>
        {" "}
        {props.children}
      </Link>
    );

  return (
    <button className={classes.link} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
