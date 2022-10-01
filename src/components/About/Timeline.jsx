import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";
import {FaGraduationCap} from "react-icons/fa"

const Timeline = () => {
  return (
    <section id="timeline">
      <h5>Resume</h5>
      <h2>Educational Qualifications</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className=" timeline"
          contentStyle={{ background: "#2c2c6c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #2c2c6c" }}
          date="2018 - Present"
          iconStyle={{ background: "#2c2c6c", color: "#4db5ff" }}
          icon={<FaGraduationCap />}
        >
          <h3>BSc in Computer Science & Engineering</h3>
          <h5 className="">Daffodil International University</h5>
          <p className="text-light">
            I'm a former member of Daffodil International University Computer
            Programming Club. Had keen interest on robotics but it turned out
            that I'm much interested and attracted towards programming than
            robotics.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=" timeline"
          contentStyle={{ background: "#2c2c6c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #2c2c6c" }}
          date="2016 - 2018"
          iconStyle={{ background: "#2c2c6c", color: "#4db5ff" }}
          icon={<FaGraduationCap />}
        >
          <h3>Higher Secondary School Certificate</h3>
          <h5 className="">Tejgaon College</h5>
          <p className="text-light">
            Science Group, HSC batch of 2018. I started to wondering how a
            website is built. So, started to learn HTML & CSS. I can still how I
            felt after seeing the Hello World! in Mozilla.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className=" timeline"
          contentStyle={{ background: "#2c2c6c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #2c2c6c" }}
          date="2014 - 2016"
          iconStyle={{ background: "#2c2c6c", color: "#4db5ff" }}
          icon={<FaGraduationCap />}
        >
          <h3>Secondary School Certificate</h3>
          <h5 className="">Khilgaon Government High School</h5>
          <p className="text-light">
            Science Group, SSC batch of 2016. In this time my hobby was
            Photography and Cycling. I always want to learn and implement newer
            things. I was a very quick learner.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
