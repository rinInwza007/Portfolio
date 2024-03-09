import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://th.bing.com/th/id/OIP.0pS5HteTHdeSoNmGtw0yFgHaJ4?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h4> Dr. Thananon Patiyansakdikul</h4>
          <p className={styles.bio}>Minister of Digital and Magic Affairs</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-1/287636502_1462312094198004_2615935801933715216_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jMm-KIpnWisAX8FuNk_&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBkR8RiUXFEmuEnOzgbM_94n5B3ZRDhcOSkHrPPFtUk4A&oe=65F08272"
            alt=""
          />
          <h4>Nanthapong Wongrat </h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/87261715_2536013420011459_6495054518030434304_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Cf-kqbrZHngAX_hVr3C&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBtYmajHjWtqKigvkQDWbExdbTgeJxlqhikU3sh3y8A8Q&oe=6613C7C6"
          />
          <h4>Thanawat Kanphuton </h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;