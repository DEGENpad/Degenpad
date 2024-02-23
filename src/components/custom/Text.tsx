import React from "react";
import { Link } from "react-router-dom";
import { clx } from "./clx";

type TextProps ={
    as?:string,
    href?:string,
    weight?:string,
    className?:string,
    onclick?:()=>void,
    children?:React.ReactNode
}

export default function Text({
  as,
  href,
  weight = "medium",
  className,
  onclick,
  children,
}:TextProps) {
  const h1Classes = clx(
    `font-${weight} font-gantari`,
    onclick && "cursor-pointer",
    className
  );
  const h2Classes = clx(
    `font-${weight} font-gantari`,
    onclick && "cursor-pointer",
    className
  );
  const h3Classes = clx(
    `font-${weight} font-gantari`,
    onclick && "cursor-pointer",
    className
  );
  const h4Classes = clx(
    `font-${weight} font-gantari`,
    onclick && "cursor-pointer",
    className
  );
  const h5Classes = clx(
    `font-${weight} font-gantari`,
    onclick && "cursor-pointer",
    className
  );
  const h6Classes = clx(
    `font-${weight} font-gantari`,
    onclick && "cursor-pointer",
    className
  );
  const classes = clx(
    `font-${weight} font-gantari`,
    onclick && "cursor-pointer",
    className
  );

  if (href) {
    switch (as) {
      case "h1":
        return (
          <Link to={href}>
            <h1 className={h1Classes} onClick={onclick}>
            {children}
          </h1>
          </Link>
          
        );
      case "h2":
        return (
          <Link to={href}>
            <h2 className={h2Classes} onClick={onclick}>
            {children}
          </h2>
          </Link>
          
        );
      case "h3":
        return (
          <Link to={href}>
            <h3 className={h3Classes} onClick={onclick}>
            {children}
          </h3>
          </Link>
          
        );
      case "h4":
        return (
          <Link to={href}>
            <h4 className={h4Classes} onClick={onclick}>
            {children}
          </h4>
          </Link>
          
        );
      case "h5":
        return (
          <Link to={href}>
            <h5 className={h5Classes} onClick={onclick}>
            {children}
          </h5>
          </Link>
          
        );
      case "h6":
        return (
          <Link to={href}>
            <h6 className={h6Classes} onClick={onclick}>
            {children}
          </h6>
          </Link>
          
        );
      case "p":
        return (
          <Link to={href}>
           <p className={classes} onClick={onclick}>
            {children}
          </p>
          </Link >
         
        );
      case "span":
        return (
          <Link to={href}>
          <span className={classes} onClick={onclick}>
            {children}
          </span>
          </Link>
        );
      case "article":
        return (
          <Link to={href}>
          <article className={classes} onClick={onclick}>
            {children}
          </article>
          </Link>
        );
      default:
        return null;
    }
  }
  switch (as) {
    case "h1":
      return (
        <h1 className={h1Classes} onClick={onclick}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={h2Classes} onClick={onclick}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={h3Classes} onClick={onclick}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={h4Classes} onClick={onclick}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={h5Classes} onClick={onclick}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={h6Classes} onClick={onclick}>
          {children}
        </h6>
      );
    case "p":
      return (
        <p className={classes} onClick={onclick}>
          {children}
        </p>
      );
    case "span":
      return (
        <span className={classes} onClick={onclick}>
          {children}
        </span>
      );
    case "article":
      return (
        <article className={classes} onClick={onclick}>
          {children}
        </article>
      );
    default:
      return null;
  }
}
