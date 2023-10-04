import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/skye.jpeg"
          alt="An image showing Skye"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I'm Skye</h1>
      <p>
        I blog about web developement - especially frontend frameworks like
        Angular and React
      </p>
    </section>
  );
}

export default Hero;
