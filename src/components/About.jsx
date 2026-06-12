import { useSelector } from 'react-redux';
import { Lang } from '../utils/langConstant';

function About() {
  const lang = useSelector(store => store.lang.lang);
  console.log(lang)
  const data = Lang[lang]
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Projects Completed', value: '120+' },
    { label: 'Global Team Members', value: '45+' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to build modern, future-proof digital solutions.',
      icon: '🚀',
    },
    {
      title: 'User-Centric Design',
      description: 'Our development process starts and ends with the human experience in mind.',
      icon: '🎨',
    },
    {
      title: 'Open Collaboration',
      description: 'We believe great software is built through transparency and shared code culture.',
      icon: '🤝',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
           {data.heading_2}
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {data.desc}
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {data.french}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-20 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border transition-all duration-300 border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Our Core Values</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-md border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="text-3xl mb-4 p-3 inline-block rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;