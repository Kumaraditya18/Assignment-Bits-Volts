import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: 2,
    title: 'Research and Strategy Development',
    content: '',
  },
];

const WorkingProcess = () => {
  const [openStep, setOpenStep] = useState(1);

  return (
    <section className="px-6 md:px-20 py-20 bg-white text-black font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mb-6">
        <h2 className="text-3xl font-bold">
          <span className="bg-[#B9FF66] px-3 py-1 rounded-md">Our Working Process</span>
        </h2>
        <p className="text-gray-700 text-base">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`rounded-2xl p-6 shadow-[4px_4px_0_#000] cursor-pointer ${openStep === step.id ? 'bg-[#B9FF66]' : 'bg-gray-100'
              }`}
            onClick={() => setOpenStep(step.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold">{`0${step.id}`}</span>
                <span className="font-semibold">{step.title}</span>
              </div>
              <span className="text-xl">{openStep === step.id ? '−' : '+'}</span>
            </div>
            {openStep === step.id && step.content && (
              <p className="mt-4 text-sm">{step.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
