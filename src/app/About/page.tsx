import Link from "next/link";

import "../style/about.css";
import Image from "next/image";
export default function About() {
  return (
    <div className="about-container">
      
      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          As a passionate and detail-oriented Web Developer, I specialize in HTML, CSS,<br/> Javascipt, Next.js, and Tailwind CSS. I deliver tailored solutions that meet clients'<br/>unique needs my passion lies in merging creativity with technical precision, ensuring <br/>elegant, efficient, and scalable web applications.Let's collaborate to bring your vision to life!
        </p>
      </div>
      <div className="about-image-container">
        <Image
          src="/portfolio2.jfif"
          alt="portfolio image"
          layout="responsive"
          width={336}
          height={400}
          className="about-image"
        />
      </div>
      
    </div>
  );
} 