import React from 'react';

const Projects = () => {
  return (
    <main className="pt-20 px-6 md:px-20 max-w-5xl mx-auto space-y-8">
    <h1 className="text-3xl md:text-4xl font-bold text-blue-600">🚀 Projects</h1>
    <p className="text-gray-700 dark:text-gray-300">
    My journey into tech through code, creativity, and a whole lot of caffeine.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
    {/* Project Card 1 */}
    <div className="border p-4 rounded-xl shadow hover:shadow-md transition dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-xl font-semibold">🌐 Personal Website</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">What you’re looking at — built in public to document the journey.</p>
    </div>

    {/* Project Card 2 */}
    <div className="border p-4 rounded-xl shadow hover:shadow-md transition dark:border-gray-700 dark:bg-gray-800">
        <h3 className="text-xl font-semibold">🤖 Buddy</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Your robotic best friend — under construction.</p>
    </div>
    </div>
    </main>
    );
};
export default Projects;
