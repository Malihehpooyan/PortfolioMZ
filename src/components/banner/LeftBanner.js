import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder.', 'Full Stack Developer.', 'UI Designer.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const name = 'Maliheh Zarei Chitgar';

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{' '}
          <span>
            <span className="text-designColor">{name.charAt(0)}</span>
            {name.substring(1, 8)}
            <span className="text-designColor">{name.charAt(8)}</span>
            {name.substring(9, 14)}
            <span className="text-designColor">{name.charAt(14)}</span>
            {name.substring(15)}
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#02E8B57" />
        </h2>
        <p
          className="text-base font-bodyFont leading-6 tracking-wide"
          style={{ textAlign: 'justify' }} // Apply text justification using inline styles
        >
          With a background in administration, business management, and customer service, I have developed strong
          analytical, planning, and organizational skills. I am proficient in French, English, and Farsi, allowing me
          to effectively communicate with diverse clients. As an entry-level Full Stack JavaScript web developer, I
          bring motivation and innovation, supported by a research background. Through coursework and projects, I have
          gained experience in designing, developing, and maintaining software systems.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;


