import React from 'react';

const ApproachSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#efefe5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Consult */}
          <div className="group text-center">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ">
              <span className="text-3xl group-hover:scale-110 transition-all duration-300">
                <img src="./talking.svg" alt="icon" className="w-10 h-10 inline" />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900  mb-3">
              Consult
            </h3>
            <p className="text-gray-600 text-sm">
              Understanding your vision and requirements
            </p>
          </div>

          {/* Design */}
          <div className="group text-center">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ">
              <span className="text-3xl group-hover:scale-110 transition-all duration-300">
                <img src="./design.svg" alt="icon" className="w-10 h-10 inline" />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900  mb-3">
              Design
            </h3>
            <p className="text-gray-600 text-sm">
              Creating detailed plans and visualizations
            </p>
          </div>

          {/* Execute */}
          <div className="group text-center">
            <div className="w-20 h-20 bg-[#efefe5] flex items-center justify-center mx-auto mb-6 ">
              <span className="text-3xl group-hover:scale-110 transition-all duration-300">
                <img src="./execute.svg" alt="icon" className="w-10 h-10 inline" />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Execute
            </h3>
            <p className="text-gray-600 text-sm">
              Professional delivery with quality assurance
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApproachSection;