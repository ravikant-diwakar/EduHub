import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  CalendarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: 'WD201',
    title: 'Web Development Fundamentals',
    instructor: 'Prof. Samanta',
    description: 'Learn the core technologies that power the modern web. This course covers HTML5, CSS3, and JavaScript, providing you with the skills needed to create responsive and interactive websites.',
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
    ],
    syllabus: [
      {
        week: 1,
        title: 'HTML5 Fundamentals',
        description: 'Document structure, semantic elements, and forms'
      },
      {
        week: 2,
        title: 'CSS3 Styling',
        description: 'Selectors, box model, and layouts'
      },
      {
        week: 3,
        title: 'JavaScript Basics',
        description: 'DOM manipulation and event handling'
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-2 text-sm text-blue-400 mb-2">
              <span>Course ID: {course.id}</span>
              <span>•</span>
              <span>{course.level}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card bg-dark-secondary p-6">
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <AcademicCapIcon className="w-6 h-6 text-blue-500" />
              <span>Instructor</span>
            </div>
            <p className="text-lg font-semibold">{course.instructor}</p>
          </div>

          <div className="card bg-dark-secondary p-6">
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <ClockIcon className="w-6 h-6 text-blue-500" />
              <span>Duration</span>
            </div>
            <p className="text-lg font-semibold">{course.duration}</p>
          </div>

          <div className="card bg-dark-secondary p-6">
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <UserGroupIcon className="w-6 h-6 text-blue-500" />
              <span>Enrollment</span>
            </div>
            <p className="text-lg font-semibold">
              {course.enrollment.current}/{course.enrollment.max} students
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-dark-secondary p-6">
            <h2 className="text-xl font-bold mb-4">Schedule & Prerequisites</h2>
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <CalendarIcon className="w-5 h-5 text-blue-500" />
              <span>{course.schedule}</span>
            </div>
            <h3 className="font-semibold mb-2">Prerequisites:</h3>
            <ul className="space-y-2">
              {course.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card bg-dark-secondary p-6">
            <h2 className="text-xl font-bold mb-4">Course Description</h2>
            <p className="text-gray-300 leading-relaxed">{course.description}</p>
          </div>
        </div>

        <div className="card bg-dark-secondary p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Course Syllabus</h2>
          <div className="space-y-6">
            {course.syllabus.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg bg-dark-accent"
              >
                <h3 className="font-semibold mb-2">
                  Week {week.week}: {week.title}
                </h3>
                <p className="text-gray-400">{week.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate(`/enroll/${id}`)}
            className="btn-primary text-lg px-8 py-3"
          >
            Enroll in Course
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseDetails;