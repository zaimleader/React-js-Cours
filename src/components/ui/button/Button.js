import React from 'react'
import styles from "./Button.module.css"

const Button = ({children, type="primary", size="normal", icon=false, block=false, ...props}) => {
  return (
    <button className={`${styles.btn} ${type ? styles["btn-" + type] : ""} ${size ? styles["btn-" + size] : ""} ${icon ? styles["btn-icon"] : ''} ${block ? styles["btn-block"] : ''}`} {...props} >
      {children}
    </button>
  )
}

export default Button