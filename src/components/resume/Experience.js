import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      {/* Professional Experience */}
      <div style={{ flex: 1 }}>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold mb-6">Job Experience</h2>
          <ResumeCard
            title="Sales Manager | HR Agent"
            subTitle="Dam Roshd Shargh (distributor of food and medicine for animals), Iran"
            result="Iran"
            des={
              <div className="text-justify">
                Meet with clients to determine their needs and recommend the most suitable products. Recruit, train, and evaluate the sales team members.
              </div>
            }
          />
        </div>
      </div>

      {/* Manager Experience */}
      <div style={{ flex: 1, marginLeft: "20px", marginTop: "80px" }}> {/* Adjusted marginTop to bring down the right column */}
        <div className="flex flex-col gap-6">
          <ResumeCard
            title="Manager"
            subTitle="Papital Travel Agency, Iran"
            result="Iran"
            des={
              <div className="text-justify">
                Welcome customers, respond to inquiries, and recommend products that suit their needs. Advise customers on travel and package choices. Make reservations and purchases (accommodations, cruises, flights, car rentals, insurance, etc.) and provide customers with accurate and useful information for their travels. Contact tour operators, carriers, hotels, and tourist sites to negotiate agreements regarding prices and services. Train and supervise staff. Develop and coordinate advertising.
              </div>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

