
import React from 'react'
import styles from '../styles/Content.module.css'
import Main from './Main'
import Box from './Box'

const Content = () => {
  return (
    <div className={styles.content}>
        <Box title='bismillah bisa'>
            <Main/>
        </Box>
    </div>
  )
}

export default Content