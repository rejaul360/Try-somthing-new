import { motion } from 'framer-motion';
import './SkillBar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SkillBar = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const skillss = [
        { name: 'REACT JS', percentage: 80, color: '#00D1F7' },
        { name: 'NODE JS', percentage: 70, color: '#58A646' },
        { name: 'MONGODB', percentage: 70, color: '#4EA441' },
        { name: 'EXPRESS JS', percentage: 75, color: '#B9B9B9' },
        { name: 'NEXT JS', percentage: 50, color: '#4297B0' }
      ];

      const skills = [
        { name: 'HTML', percentage: 90, color: '#DD4B24' },
        { name: 'CSS', percentage: 80, color: '#3595CF' },
        { name: 'BOOTSRAPE', percentage: 80, color: '#8512F3' },
        { name: 'TAILWIND', percentage: 80, color: '#07B0CE' },
        { name: 'JAVASCRIPT', percentage: 70, color: '#E8D44D' }
      ];

  return (
    <div id='skills' className="box max-w-7xl mx-auto mt-8">
      <h1>Skills Bar</h1>
 
    <div className='flex gap-8 p-10'>
    <div className='w-1/2' data-aos="fade-right">
    {skills.map((skill, index) => (
        <div className="skillbox" key={index}>
          <p>{skill.name}</p>
          <p>{`${skill.percentage}%`}</p>
          <div className="skill">
            <motion.div
              className="level"
              style={{ width: `${skill.percentage}%`, background: skill.color }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      ))}
    </div>
    <div  className='w-1/2' data-aos="fade-left">
    {skillss.map((skill, index) => (
        <div className="skillbox" key={index}>
          <p>{skill.name}</p>
          <p>{`${skill.percentage}%`}</p>
          <div className="skill">
            <motion.div
              className="level"
              style={{ width: `${skill.percentage}%`, background: skill.color }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default SkillBar;
