import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  details: string[];
  type: 'lor' | 'hackathon' | 'certificate' | string;
}

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex ${isEven ? 'justify-start' : 'justify-end'} mb-8`}
    >
      <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <ul className="space-y-2">
            {item.details.map((detail, idx) => (
              <li key={idx} className="text-white text-sm bg-black bg-opacity-20 rounded-lg p-2">
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ImprovedTimelineProps {
  experienceItems: ExperienceItem[];
}

const ImprovedTimeline: React.FC<ImprovedTimelineProps> = ({ experienceItems }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
        {experienceItems.map((item, index) => (
          <TimelineItem key={`${item.title}-${index}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ImprovedTimeline;