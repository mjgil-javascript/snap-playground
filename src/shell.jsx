import React from 'react'
import styles from './shell.styl'
import Snap from 'snapsvg'

class Shell extends React.Component {


  componentDidMount() {

    var s = Snap("#svgLand");
    // var s = Snap(400, 200);
    var circle = s.circle(100, 100, 100);
    var rect = s.rect(200, 0, 200, 200);
  }

  shouldComponentUpdate() {
  }

  render() {
    return <div className={styles.main}>
      <div className={styles.sidebar}>
      </div>
      <div className={styles.content} >
        <svg id='svgLand'></svg>
      </div>
    </div>
  }
}

export default Shell
