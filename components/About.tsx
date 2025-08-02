'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create innovative digital solutions that empower businesses and enhance user experiences.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'A talented team of developers, designers, and strategists with years of experience.'
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'We prioritize quality, performance, and user satisfaction in every project we deliver.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4"
            >
              About Rufus OP
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              We're a team of passionate
              <span className="gradient-text"> innovators</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8"
            >
              Founded in 2020, Rufus OP has been at the forefront of digital innovation, 
              creating cutting-edge applications that solve real-world problems. Our team 
              combines technical expertise with creative vision to deliver exceptional user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8"
            >
              We believe in the power of technology to transform businesses and improve lives. 
              Every app we create is built with this vision in mind, ensuring that our solutions 
              are not just functional, but truly impactful.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-primary-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries and explore new technologies to create cutting-edge solutions.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Excellence',
                description: 'We strive for perfection in every detail, ensuring the highest quality in all our deliverables.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Collaboration',
                description: 'We work closely with our clients and team members to achieve shared goals and success.',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl text-white font-bold">{value.title[0]}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 