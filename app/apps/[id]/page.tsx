import { motion } from 'framer-motion'
import { ArrowLeft, Star, Download, ExternalLink, Check, Calendar, Smartphone, Users, Code } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAppById, apps } from '@/data/apps'

interface AppPageProps {
  params: {
    id: string
  }
}

// Generate static params for all app IDs
export async function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }))
}

export default function AppPage({ params }: AppPageProps) {
  const app = getAppById(params.id)

  if (!app) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-purple-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#apps"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Apps
            </Link>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                <div className="text-6xl">{app.icon}</div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {app.name}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold text-gray-900">{app.rating}</span>
                    </div>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-600">{app.downloads} downloads</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-600">{app.category}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                {app.downloadUrl && (
                  <a
                    href={app.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                )}
                {app.websiteUrl && (
                  <a
                    href={app.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About {app.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {app.description}
              </p>
            </motion.section>

            {/* Screenshots */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {app.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={screenshot}
                      alt={`${app.name} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {app.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {app.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* App Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">App Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Developer</span>
                  <span className="font-medium text-gray-900">{app.developer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Platform</span>
                  <span className="font-medium text-gray-900">{app.platform}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium text-gray-900">{app.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className={`font-medium ${
                    app.price === 'Free' ? 'text-green-600' : 
                    app.price === 'Paid' ? 'text-red-600' : 'text-orange-600'
                  }`}>
                    {app.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Size</span>
                  <span className="font-medium text-gray-900">{app.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Version</span>
                  <span className="font-medium text-gray-900">{app.version}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Release Date</span>
                  <span className="font-medium text-gray-900">
                    {new Date(app.releaseDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {app.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href={`/apps/${app.id}/privacy`}
                  className="block w-full text-center py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={`/apps/${app.id}/terms`}
                  className="block w-full text-center py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href={`/apps/${app.id}/support`}
                  className="block w-full text-center py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Support
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 