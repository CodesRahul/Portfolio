import React from "react";
import "../../pages/style.css";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "WordPress Developer",
          "React Js Developer",
          "React Native Developer",
          "MERN STACK Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Text;
