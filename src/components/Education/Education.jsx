import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          My education has been a journey of learning and development.
          Here are the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-purple-500 h-full rounded-full"></div>

        {/* Education Cards */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0
                ? "sm:justify-start"
                : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 z-10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-purple-500 bg-gray-900 flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[45%] ml-12 sm:ml-0 bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-300 ${
                index % 2 === 0
                  ? "sm:mr-auto sm:pr-8"
                  : "sm:ml-auto sm:pl-8"
              }`}
            >
              {/* Top Section */}
              <div className="flex items-center gap-4">
                
                {/* Logo */}
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <h4 className="text-sm text-gray-300 mt-1">
                    {edu.school}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-5 text-purple-400 font-semibold">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;