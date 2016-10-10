import React from 'react'
import styles from './shell.styl'

class Shell extends React.Component {


  componentDidMount() {
  }

  shouldComponentUpdate() {
  }

  render() {
    return <div className={styles.main}>
      <div className={styles.sidebar}>

      </div>
      <div className={styles.content} id='svgLand'>
      </div>
    </div>
  }
}

export default Shell
