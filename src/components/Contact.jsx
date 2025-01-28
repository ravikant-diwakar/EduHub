import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

function Contact() {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: ['KIIT University', 'A Block, Bhubaneswar', 'India']
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+91 1234567890', 'Mon - Fri, 9am - 6pm']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: ['support@eduhub.com', 'info@eduhub.com']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      details: ['Available 24/7', 'Average response time: 5 minutes']
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400">
            Have questions? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-dark-secondary text-center p-6"
            >
              <info.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card bg-dark-secondary">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    className="input-field bg-dark-accent"
                    placeholder="Amit"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    className="input-field bg-dark-accent"
                    placeholder="Jaiswal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="input-field bg-dark-accent"
                  placeholder="yourmail@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  className="input-field bg-dark-accent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="input-field bg-dark-accent min-h-[150px]"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
