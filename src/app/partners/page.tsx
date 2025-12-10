"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function PartnersPage() {
  const partnerTiers = [
    {
      title: "Technology Partners",
      description: "Integration partners and technology ecosystem collaborators",
      partners: ["Salesforce", "HubSpot", "Adobe", "Google Cloud", "AWS", "Microsoft Azure", "Zapier", "Tableau"],
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Media Partners",
      description: "Premium advertising inventory and media placement partners",
      partners: ["Clear Channel", "JCDecaux", "Lamar Advertising", "Outfront Media", "DOOH.com", "Broadsign", "Vistar Media", "Place Exchange"],
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Agency Partners",
      description: "Leading advertising agencies and creative service providers",
      partners: ["Omnicom Group", "Publicis", "WPP", "Interpublic", "Havas", "Dentsu", "MDC Partners", "S4 Capital"],
      color: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Data Partners",
      description: "Audience data, analytics, and measurement solution providers",
      partners: ["Nielsen", "Comscore", "Kantar", "IRI", "Experian", "Acxiom", "Oracle Data Cloud", "LiveRamp"],
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const partnerPrograms = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "Agency Partner Program",
      description: "Exclusive benefits for advertising agencies including special pricing, co-marketing opportunities, and dedicated support.",
      benefits: ["Preferential pricing", "Co-marketing support", "Dedicated account management", "Training & certification"]
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Technology Integration",
      description: "Build integrations with our platform APIs and become part of our technology ecosystem with full technical support.",
      benefits: ["API access & documentation", "Technical support", "Co-development opportunities", "Marketplace listing"]
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: "Reseller Program",
      description: "Become an authorized reseller and expand your service offerings while earning attractive commissions and margins.",
      benefits: ["Competitive margins", "Sales enablement", "Lead sharing", "Joint go-to-market"]
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "Media Partner Network",
      description: "Join our media partner network to provide premium advertising inventory and expand reach across new markets and audiences.",
      benefits: ["Revenue sharing", "Inventory optimization", "Demand access", "Performance analytics"]
    }
  ];

  const stats = [
    { number: "200+", label: "Active Partners", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>) },
    { number: "50+", label: "Technology Integrations", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
    { number: "25+", label: "Global Markets", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { number: "95%", label: "Partner Satisfaction", icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) }
  ];

  const partnerBenefits = [
    "Access to cutting-edge advertising technology",
    "Dedicated partner success manager",
    "Co-marketing and joint sales opportunities",
    "Technical training and certification programs",
    "Early access to new features and products",
    "Revenue sharing and incentive programs"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mw-blue-100 rounded-full mb-8">
              <span className="text-mw-blue-600 text-sm font-medium">Partnership Ecosystem</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mw-gray-900 mb-6">
              Partner With Us
              <span className="text-mw-blue-600 block">Grow Together</span>
            </h1>
            <p className="text-xl text-mw-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join our thriving partner ecosystem and unlock new opportunities for growth. 
              From technology integrations to agency partnerships, we're building the future 
              of advertising together.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-mw-md hover:shadow-mw-lg transition-all"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-mw-blue-600 mb-3">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-mw-gray-600 text-center">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Our Partner Ecosystem
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              We collaborate with leading companies across technology, media, agencies, and data to deliver comprehensive advertising solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-mw-lg border-2 ${tier.borderColor} p-8 hover:shadow-mw-xl transition-all`}
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${tier.color} text-white rounded-full mb-4`}>
                    {tier.icon}
                    <span className="font-semibold">{tier.title}</span>
                  </div>
                  <p className="text-mw-gray-600 text-lg">{tier.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {tier.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center justify-center p-3 bg-mw-gray-50 hover:bg-mw-gray-100 rounded-lg transition-colors border border-mw-gray-200">
                      <span className="text-sm font-medium text-mw-gray-800">{partner}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-4">
              Partnership Programs
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              Explore our partnership programs designed to help you succeed and grow your business with MWWST.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-mw-lg border border-mw-gray-200 p-8 hover:shadow-mw-xl hover:border-mw-blue-300 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-mw-blue-100 text-mw-blue-600 rounded-xl group-hover:bg-mw-blue-600 group-hover:text-white transition-colors">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mw-gray-900 mb-2">{program.title}</h3>
                    <p className="text-mw-gray-600">{program.description}</p>
                  </div>
                </div>
                <div className="bg-mw-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-mw-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Key Benefits
                  </h4>
                  <div className="space-y-3">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 text-mw-gray-700">
                        <div className="w-1.5 h-1.5 bg-mw-blue-600 rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-mw-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-6">
                Why Partner With MWWST?
              </h2>
              <p className="text-lg text-mw-gray-600 mb-6 leading-relaxed">
                When you partner with MWWST, you gain access to cutting-edge advertising technology, 
                dedicated support, and a growing ecosystem of opportunities.
              </p>
              <div className="space-y-3">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-mw-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-mw-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-mw-blue-50 to-mw-blue-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-mw-gray-900 mb-4">Ready to Partner?</h3>
              <p className="text-mw-gray-600 mb-6">
                Join our partner ecosystem and start building meaningful partnerships that drive mutual growth and success.
              </p>
              <div className="space-y-4">
                <Link
                  href="#contact"
                  className="block w-full px-6 py-3 bg-mw-blue-600 hover:bg-mw-blue-700 text-white font-semibold rounded-lg transition-colors text-center"
                >
                  Become a Partner
                </Link>
                <button className="block w-full px-6 py-3 border border-mw-blue-600 hover:bg-mw-blue-50 text-mw-blue-600 font-semibold rounded-lg transition-colors">
                  Download Partner Kit
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mw-blue-600 to-mw-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-mw-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're a technology company, media owner, agency, or service provider, 
              we have partnership opportunities that can help accelerate your growth.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-mw-gray-50 text-mw-blue-600 font-semibold rounded-lg transition-colors shadow-lg"
            >
              Start Partnership Discussion
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}