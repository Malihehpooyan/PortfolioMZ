import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import { projectOne, projectTwo, projectThree, projectFourth } from '../../assets/index';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Media Clone"
          des="A social media platform clone built using React, Node.js, and PostgreSQL. Users can create accounts, post updates, and interact with other users' posts."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An e-commerce website developed with React, Node.js, and PostgreSQL. Features product listing, search, cart management, and secure payment integration."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="A real-time chatting application created using React, Node.js, and Socket.io. Users can join chat rooms, send messages, and see real-time updates."
          src={projectThree}
        />
        <ProjectsCard
          title="Bike Rental App for Montreal"
          des="A bike rental app designed for Montreal, built using React, Node.js, and PostgreSQL. Allows users to rent bikes and view available bike stations."
          src={projectFourth}
        />
      </div>
    </section>
  );
};

export default Projects;



