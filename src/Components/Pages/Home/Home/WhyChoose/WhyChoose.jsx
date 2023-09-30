import React from 'react';

const WhyChoose = () => {
  const reasons = [
    {
      title: 'Expertise',
      description: 'Our team of experienced React.js developers ensures top-notch solutions for your projects.',
      icon: 'fas fa-cogs',
    },
    {
      title: 'Custom Solutions',
      description: 'We tailor React.js solutions to match your unique business needs, ensuring project success.',
      icon: 'fas fa-puzzle-piece',
    },
    {
      title: 'UI/UX Excellence',
      description: 'We prioritize creating intuitive and visually appealing interfaces that engage users.',
      icon: 'fas fa-desktop',
    },
    // Add more reasons as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-8">
          At Digital agency park, we have a lot to offer. Here are some compelling reasons to choose us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <i className={`text-4xl text-indigo-500 mb-4 ${reason.icon}`}></i>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
