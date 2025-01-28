import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserGroupIcon, ClockIcon, AcademicCapIcon, CalendarIcon } from '@heroicons/react/24/outline';

const courses = [
  {
    id: 'WD201',
    title: 'Web Development Fundamentals',
    instructor: 'Prof. Gaurav',
    description: 'Learn the core technologies that power the modern web. This course covers HTML5, CSS3, and JavaScript.',
    duration: '10 weeks',
    level: 'Intermediate',
    enrollment: {
      current: 18,
      max: 25
    },
    schedule: 'Tuesday and Thursday, 2:00 PM - 4:00 PM',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    prerequisites: [
      'Basic HTML knowledge',
      'Understanding of CSS basics'
    ]
  },
  {
    id: 'JS301',
    title: 'Advanced JavaScript',
    instructor: 'Prof. Amit',
    description: 'Master advanced JavaScript concepts including ES6+, async programming, and modern frameworks.',
    duration: '12 weeks',
    level: 'Advanced',
    enrollment: {
      current: 15,
      max: 20
    },
    schedule: 'Monday and Wednesday, 6:00 PM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'RJS401',
    title: 'React.js Mastery',
    instructor: 'Prof. Ravikant',
    description: 'Build modern web applications with React.js, Redux, and related technologies.',
    duration: '8 weeks',
    level: 'Intermediate',
    enrollment: {
      current: 22,
      max: 30
    },
    schedule: 'Friday, 3:00 PM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

function CourseList() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Available Courses
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/course/${course.id}`}>
              <div className="card bg-dark-secondary hover:bg-dark-accent transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-400">Course ID: {course.id}</span>
                    <span className="text-sm text-green-400">
                      {course.enrollment.current}/{course.enrollment.max} enrolled
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h2>
                  
                  <div className="flex items-center text-gray-400 mb-3">
                    <AcademicCapIcon className="w-5 h-5 mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-1" />
                      {course.schedule?.split(',')[0]}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;