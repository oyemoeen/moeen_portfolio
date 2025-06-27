import { useState } from "react";

const SkillsSection = ({ skillsData, experienceData }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="min-h-[30vh] bg-gray-50 py-2 px-6" id="Skill-page">
      <div className="max-w-3xl mx-auto text-center mb-10 mt-20">
        <h2 className="text-3xl font-bold text-red-500">Skills</h2>
        <p className="text-gray-600 mt-2 text-base">
          Technologies and tools I've mastered along the way
        </p>
        <div className="w-16 h-0.5 bg-red-400 mx-auto mt-3"></div>
      </div>
      <div className="grid md:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 border-l-2 border-red-400"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
              <span className="text-2xl mr-2">{section.icon}</span>
              <span>{section.category}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-red-100 transition-colors duration-200 cursor-pointer"
                >
                  {skill}
                </span>
                // onClick={() => handleSkillClick(skill)}
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Experience with {selectedSkill}
            </h2>
            <div className="text-gray-600">
              {experienceData[selectedSkill] ? (
                <div>
                  {experienceData[selectedSkill].map((exp, idx) => (
                    <div key={idx} className="mb-4 border-b pb-4">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                      <p className="mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>
                  No detailed experience information available for this skill.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
