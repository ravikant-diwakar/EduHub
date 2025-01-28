import { motion } from 'framer-motion';
import { AcademicCapIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

function About() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Learning',
      description: 'Join a vibrant community of learners and collaborate on projects.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Access',
      description: 'Access course content from anywhere in the world, 24/7.'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Students' },
    { value: '500+', label: 'Courses' },
    { value: '50+', label: 'Countries' },
    { value: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduHub</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Empowering learners worldwide with quality education and expert-led courses.
              Our mission is to make professional education accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card bg-dark-accent p-6 text-center"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              At EduHub, we believe that education should be accessible to everyone.
              Our platform brings together expert instructors and passionate learners,
              creating an environment where knowledge flows freely and learning never stops.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're committed to providing high-quality education that helps our students
              achieve their professional goals and make a positive impact in their careers.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;