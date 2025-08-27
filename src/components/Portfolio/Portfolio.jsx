import React from 'react'
import styles from './Portfolio.module.css'
import po1 from './m1.png'
import po2 from './m2.png'
import po3 from './image.png'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={po1} alt="" />
            <p>Free code camp</p>
        </div>
        <div className={styles.port_items}>
            <img src={po3} alt="" />
            <p>AWS</p>
        </div>
        <div className={styles.port_items}>
            <img src={po2} alt="" />
            <p>Code.org</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio