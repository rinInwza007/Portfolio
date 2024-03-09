import React from 'react'
import styles from './Portfolio.module.css'
import po1 from './m1.png'
import po2 from './m2.png'

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
            <img src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/414799055_1022431952385865_8212545564174735036_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9FpgB_OvQo4AX_WwxLO&_nc_ht=scontent.fbkk5-8.fna&oh=00_AfCJkYpIWCy1sawXpEnYZtE3kgtArtMsEjG1Z_Ddh9id_w&oe=65F16D50" alt="" />
            <p>Thai Mooc</p>
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