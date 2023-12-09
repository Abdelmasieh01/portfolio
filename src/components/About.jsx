import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Fullstack Web and Mobile app Engineer. Proficient in django, React
        and Flutter. <br />I can help you create your Next Big Web/Mobile
        project.
      </motion.p>

      <motion.div variants={textVariant()} className="mt-10">
        <h2 className={styles.sectionSubText} style={{ color: "#fff" }}>
          Contact Info
        </h2>
        <ul className="space-y-1 mt-1">
          <li className="text-[20px]">
            Email:&nbsp;
            <a
              href="mailto: abdelmasieh84@gmail.com"
              className={"text-secondary text-[20px]"}
              target="_blank"
            >
              abdelmasieh84@gmail.com
            </a>
          </li>
          <li className="text-[20px]">
            Phone:&nbsp;
            <a
              href="https://wa.me/+201558345185"
              className={"text-secondary text-[20px]"}
              target="_blank"
            >
              015583451585
            </a>
          </li>
        </ul>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, i) => (
          <ServiceCard key={i} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
