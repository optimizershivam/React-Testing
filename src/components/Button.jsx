import React from 'react'
import "./Button.css"

const Button = ({children,variant,colorScheme,onClick}) => {
  return (
    <button data-testId="cButton" className={`btn ${colorScheme || "red"} ${variant || "ghost"}`} onClick={onClick}>{children}</button>
  )
}

export default Button