'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 31, 2026"

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Moving Walls Pte. Ltd. and its affiliates ("Moving Walls," "we," "us," or "our") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.movingwalls.com and use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this privacy policy carefully. By using our services, you consent to the data practices described in this policy. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Register for an account or request a demo</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out a contact form</li>
                <li>Apply for employment</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Name and contact details (email, phone, address)</li>
                <li>Company name and job title</li>
                <li>Account credentials</li>
                <li>Payment information (for customers)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Geographic location (country/city level)</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, updates, and security alerts</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send marketing and promotional communications (with your consent)</li>
                <li>Analyze usage patterns and improve our services</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Legal Basis */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process your personal data based on:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Consent:</strong> Where you have given explicit consent for specific purposes</li>
                <li><strong>Contract:</strong> Where processing is necessary to fulfill our contractual obligations</li>
                <li><strong>Legal Obligation:</strong> Where we must comply with applicable laws</li>
                <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, provided they do not override your rights</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect and track information about your browsing activities. For detailed information about the cookies we use and how to manage them, please see our{' '}
                <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You can control cookies through your browser settings and our cookie consent tool. Note that disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (hosting, analytics, payment processing)</li>
                <li><strong>Business Partners:</strong> Trusted partners for joint marketing initiatives (with your consent)</li>
                <li><strong>Affiliates:</strong> Our corporate group companies for internal operations</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period depends on the context of our relationship with you and applicable legal obligations.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 GDPR Rights (EEA, UK, Switzerland)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are located in these regions, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 CCPA Rights (California Residents)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                California residents have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Know what personal information is collected</li>
                <li>Know whether personal information is sold or disclosed</li>
                <li>Say no to the sale of personal information</li>
                <li>Access your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Equal service and price, regardless of exercising privacy rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 LGPD Rights (Brazil)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brazilian residents have similar rights under the Lei Geral de Proteção de Dados, including access, correction, anonymization, deletion, and data portability.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We implement appropriate safeguards for international transfers, including Standard Contractual Clauses approved by the European Commission, to ensure your data receives adequate protection.
              </p>
            </div>

            {/* Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Children */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete that information.
              </p>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-2"><strong>Moving Walls Pte. Ltd.</strong></p>
                <p className="text-gray-600 mb-2">Data Protection Officer</p>
                <p className="text-gray-600 mb-2">Email: privacy@movingwalls.com</p>
                <p className="text-gray-600 mb-2">Address: 71 Robinson Road, #14-01, Singapore 068895</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                For EU residents, you also have the right to lodge a complaint with your local supervisory authority.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  )
}
