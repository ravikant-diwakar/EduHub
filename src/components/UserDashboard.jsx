import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpenIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

function UserDashboard() {
  const [enrollments, setEnrollments] = useState([]);
  const [courses] = useState([
    {
      id: 'WD201',
      title: 'Web Development Fundamentals',
      instructor: 'Prof. Samanta',
      schedule: 'Tuesday and Thursday, 2:00 PM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'JS301',
      title: 'Advanced JavaScript',
      instructor: 'Dr. Johnson',
      schedule: 'Monday and Wednesday, 6:00 PM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'RJS401',
      title: 'React.js Mastery',
      instructor: 'Sarah Wilson',
      schedule: 'Friday, 3:00 PM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]);

  useEffect(() => {
    const storedEnrollments = JSON.parse(localStorage.getItem('courseEnrollments') || '[]');
    const enrolledCourses = storedEnrollments.map(enrollment => {
      const course = courses.find(c => c.id === enrollment.courseId);
      return {
        ...enrollment,
        ...course
      };
    });
    setEnrollments(enrolledCourses);
  }, [courses]);

  if (enrollments.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          <p className="text-gray-400 mb-6">You haven't enrolled in any courses yet.</p>
          <Link to="/courses" className="btn-primary">
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">My Enrolled Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {enrollments.map((enrollment, index) => (
          <motion.div
            key={enrollment.courseId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card bg-dark-secondary overflow-hidden">
              <div className="relative h-48">
                <img
                  src={enrollment.image}
                  alt={enrollment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{enrollment.title}</h3>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center">
                    <BookOpenIcon className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{enrollment.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{enrollment.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2 text-blue-500" />
                    <span>Enrolled: {new Date(enrollment.enrollmentDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link
                  to={`/course/${enrollment.courseId}`}
                  className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Course Details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;