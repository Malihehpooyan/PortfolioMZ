import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* ResumeCard components */}
          <ResumeCard
            title="Full Stack JavaScript Development Certificate"
            subTitle="McGill University, Canada"
            result={<span style={{ whiteSpace: 'nowrap' }}>2022 - 2023</span>}
            des="Completed a comprehensive program in Full Stack JavaScript Development, gaining hands-on experience in designing, developing, and maintaining software systems."
          />
          <ResumeCard
            title="Master's Degree in Linguistics"
            subTitle="Birjand University, Iran"
            result={<span style={{ whiteSpace: 'nowrap' }}>2009 - 2011</span>}
            des="Completed a Master's degree in Linguistics with a focus on language and communication theories."
          />
          <ResumeCard
            title="Bachelor's Degree in Public Administration"
            subTitle="Azad Mashhad University, Iran"
            result={<span style={{ whiteSpace: 'nowrap' }}>2000 - 2004</span>}
            des="Earned a Bachelor's degree in Public Administration, developing strong planning and organizational skills."
          />
        </div>
      </div>
      {/* Professional Development section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Development</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* ResumeCard components */}
          <ResumeCard
            title="Starting Business 2"
            subTitle="St. Pius X Career Centre, Montréal"
            result={<span style={{ whiteSpace: 'nowrap' }}>2020 - 2021</span>}
            des="Participated in a professional development program focusing on business management and entrepreneurship."
          />
          <ResumeCard
            title="Starting Business 1"
            subTitle="St. Pius X Career Centre, Montréal"
            result={<span style={{ whiteSpace: 'nowrap' }}>2019 - 2020</span>}
            des="Engaged in a foundational program in business management and entrepreneurship."
          />
          <ResumeCard
            title="DEP in Professional Sales"
            subTitle="St. Pius X Career Centre, Montréal"
            result={<span style={{ whiteSpace: 'nowrap' }}>2020 - 2021</span>}
            des="Completed a Diploma of Vocational Studies in Professional Sales, developing valuable sales and communication skills."
          />
          <ResumeCard
            title="Digital Marketing"
            subTitle="Google Digital Garage"
            result={<span style={{ whiteSpace: 'nowrap' }}>2019 - 2020</span>}
            des="Earned a certification in Digital Marketing from Google Digital Garage, gaining insights into digital marketing strategies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;


