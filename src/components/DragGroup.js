import React from 'react'
import styles from '../styles/DragGroup.module.css'
import { createContext } from 'react'

const DragGroup = ({children}) => {
  return (
    <div className={styles.group}>{children}</div>
  )
}

export default DragGroup