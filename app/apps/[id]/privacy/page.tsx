import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, Users, Calendar } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAppById, apps } from '@/data/apps'

interface PrivacyPageProps {
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

export default function PrivacyPage({ params }: PrivacyPageProps) {
  const app = getAppById(params.id)

  if (!app) {
    notFound()
  }

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/apps/${app.id}`}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {app.name}
            </Link>

            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">{app.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Privacy Policy
                </h1>
                <p className="text-gray-600">for {app.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Version 1.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Rufus OP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use {app.name} (the "App").
            </p>
            <p className="text-gray-600">
              By using our App, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our App.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Create an account or profile</li>
              <li>Use our App features and services</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletters</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you use our App, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (features used, time spent, interactions)</li>
              <li>Log data (IP address, browser type, access times)</li>
              <li>Location data (if you grant permission)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our App</li>
              <li>Personalize your experience</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our App</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage practices</li>
            </ul>
            <p className="text-gray-600">
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
            </ul>
            <p className="text-gray-600">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600">
              We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the App after any changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@rufus-op.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Innovation Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 text-center">
              This Privacy Policy is effective as of {lastUpdated} and applies to {app.name} users worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 