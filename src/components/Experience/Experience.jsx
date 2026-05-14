import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[14vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-purple-500 h-full rounded-full"></div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
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
                  src={experience.img}
                  alt={experience.company}
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

                {/* Company Logo */}
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <h4 className="text-sm text-gray-300 mt-1">
                    {experience.company}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-gray-400 leading-relaxed text-sm sm:text-base">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-6">
                <h5 className="text-white font-semibold mb-3">
                  Skills:
                </h5>

                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 border border-purple-500 text-purple-300 px-4 py-2 rounded-xl text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;