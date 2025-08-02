import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Calendar, Shield, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAppById, apps } from '@/data/apps'

interface TermsPageProps {
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

export default function TermsPage({ params }: TermsPageProps) {
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
                  Terms of Service
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
                <FileText className="w-4 h-4" />
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service ("Terms") govern your use of {app.name} (the "App") operated by Rufus OP ("we," "our," or "us").
            </p>
            <p className="text-gray-600 mb-4">
              By accessing or using our App, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the App.
            </p>
            <p className="text-gray-600">
              These Terms apply to all visitors, users, and others who access or use the App.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-600 mb-4">
              {app.name} is a {app.category.toLowerCase()} application that provides the following services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              {app.features.slice(0, 5).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="text-gray-600">
              We reserve the right to modify, suspend, or discontinue any part of the App at any time without notice.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
            <p className="text-gray-600 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <p className="text-gray-600 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Use another user's account without permission</li>
              <li>Create a false identity or impersonate another person</li>
              <li>Share your account credentials with others</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Upload or transmit malicious code or content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Use the App to send spam or unsolicited messages</li>
              <li>Engage in any activity that could harm our reputation</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The App and its original content, features, and functionality are and will remain the exclusive property of Rufus OP and its licensors. The App is protected by copyright, trademark, and other laws.
            </p>
            <p className="text-gray-600 mb-4">
              You retain ownership of any content you submit to the App, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with the App.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the App, to understand our practices regarding the collection and use of your information.
            </p>
            <Link
              href={`/apps/${app.id}/privacy`}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View Privacy Policy →
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
            <p className="text-gray-600 mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that the App will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or reliability of any information</li>
              <li>Warranties that defects will be corrected</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              IN NO EVENT SHALL RUFUS OP, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers</li>
              <li>Any interruption or cessation of transmission to or from the App</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to defend, indemnify, and hold harmless Rufus OP and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit to the App</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-600">
              Upon termination, your right to use the App will cease immediately. If you wish to terminate your account, you may simply discontinue using the App.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which Rufus OP operates, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600">
              Any disputes arising from these Terms or your use of the App shall be resolved in the courts of competent jurisdiction in our operating jurisdiction.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-600">
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our App after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@rufus-op.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Innovation Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 text-center">
              These Terms of Service are effective as of {lastUpdated} and apply to all users of {app.name}.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 