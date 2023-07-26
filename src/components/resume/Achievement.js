import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Professional Experience</p>
          <h2 className="text-4xl font-bold">Sales Manager | HR Agent</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Dam Roshd Shargh (distributor of food and medicine for animals), Iran"
            subTitle="2008-2018"
            result="Collect and research data to better understand market conditions"
            des="Meet with clients to determine their needs and recommend the most suitable products. Recruit, train, and evaluate the sales team members."
          />
          <ResumeCard
            title="Papital Travel Agency, Iran"
            subTitle="2007-2008"
            result="Develop travel products, services, and packages"
            des="Welcome customers, respond to inquiries, and recommend products that suit their needs. Advise customers on travel and package choices. Make reservations and purchases (accommodations, cruises, flights, car rentals, insurance, etc.) and provide customers with accurate and useful information for their travels. Contact tour operators, carriers, hotels, and tourist sites to negotiate agreements regarding prices and services. Train and supervise staff. Develop and coordinate advertising."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Education</p>
          <h2 className="text-4xl font-bold">JS Development Certificate</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="McGill University, Canada"
            subTitle="2022-2023"
            result="Knowledgeable in web development technologies, frameworks, and best practices."
            des="Able to understand client requirements, provide valuable insights, and deliver solutions that meet their needs."
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
