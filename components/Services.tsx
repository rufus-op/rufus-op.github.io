'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, Code, Palette, Database, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps built with the latest technologies and best practices.',
      features: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications that work seamlessly across all devices.',
      features: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      features: ['Python', 'Java', 'C#', 'Go'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      features: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust, scalable backend systems that power your applications efficiently.',
      features: ['AWS', 'Firebase', 'PostgreSQL', 'MongoDB'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'App Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your apps running smoothly.',
      features: ['Bug Fixes', 'Updates', 'Performance', 'Security'],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4"
          >
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Comprehensive
            <span className="gradient-text"> Development</span>
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From concept to deployment, we provide end-to-end development services 
            that help businesses thrive in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Process</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and project goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
              { step: '03', title: 'Development', description: 'Building your solution with best practices' },
              { step: '04', title: 'Launch', description: 'Deploying and maintaining your application' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 