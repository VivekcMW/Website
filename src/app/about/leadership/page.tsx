"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../../../components/ContactForm";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Sarah Mitchell",
      role: "Chief Executive Officer",
      department: "Executive Leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bio: "Sarah brings over 15 years of experience in advertising technology. Under her leadership, MWWST has grown to serve 500+ global brands.",
      hobbies: ["Marathon Running", "Photography", "Cooking", "Travel"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      department: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bio: "David leads our technology vision with expertise in AI and machine learning. His innovations have improved campaign performance by 40%.",
      hobbies: ["Gaming", "Rock Climbing", "Chess", "Drone Photography"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Maria Rodriguez",
      role: "Chief Marketing Officer",
      department: "Marketing & Brand Strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bio: "Maria oversees global marketing strategy with 12+ years in out-of-home advertising, helping Fortune 500 companies achieve their objectives.",
      hobbies: ["Salsa Dancing", "Wine Tasting", "Painting", "Yoga"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "James Thompson",
      role: "Chief Financial Officer",
      department: "Finance & Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bio: "James manages financial strategy and operations, with expertise in scaling technology companies and three successful exits.",
      hobbies: ["Golf", "Sailing", "Classic Cars", "Reading"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Lisa Park",
      role: "Chief Data Officer",
      department: "Data & Analytics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bio: "Dr. Park leads data strategy with a PhD in Statistics and 10+ years in advertising measurement, delivering industry-leading analytics.",
      hobbies: ["Hiking", "Board Games", "Gardening", "Podcasting"],
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Brown",
      role: "Chief Revenue Officer",
      department: "Sales & Business Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      bio: "Michael drives revenue growth and client partnerships, achieving a 98% satisfaction rate and consistent growth in renewals.",
      hobbies: ["Basketball", "BBQ Cooking", "Fishing", "Woodworking"],
      linkedin: "#",
      twitter: "#"
    }
  ];

  const stats = [
    { number: "150+", label: "Combined Years of Experience" },
    { number: "6", label: "Industry Experts" },
    { number: "12", label: "Patents & Innovations" },
    { number: "25+", label: "Industry Awards" }
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
              <span className="text-mw-blue-600 text-sm font-medium">Executive Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mw-gray-900 mb-6">
              Leadership Team
              <span className="text-mw-blue-600 block">Visionary Expertise</span>
            </h1>
            <p className="text-xl text-mw-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Meet the experienced executives driving MWWST's innovation and growth. 
              Our leadership team combines deep industry expertise with a shared vision 
              for transforming the future of advertising.
            </p>
            
            {/* Leadership Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-mw-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-mw-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
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
              Executive Leadership
            </h2>
            <p className="text-lg text-mw-gray-600 max-w-3xl mx-auto">
              Industry veterans with proven track records in scaling technology companies and delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-mw-lg border border-mw-gray-100 overflow-hidden hover:shadow-mw-xl transition-shadow duration-300"
              >
                {/* Profile Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-lg font-medium opacity-90">{leader.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Department */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-mw-blue-50 text-mw-blue-600 text-sm font-medium rounded-full">
                      {leader.department}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-mw-gray-600 leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  {/* Hobbies Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-mw-gray-900 mb-3">Hobbies & Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.hobbies.map((hobby, hobbyIndex) => (
                        <span
                          key={hobbyIndex}
                          className="px-3 py-1 bg-mw-blue-50 text-mw-blue-600 text-xs font-medium rounded-full"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4 border-t border-mw-gray-100">
                    <a
                      href={leader.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-mw-gray-100 hover:bg-mw-blue-100 text-mw-gray-600 hover:text-mw-blue-600 rounded-full transition-colors"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={leader.twitter}
                      className="flex items-center justify-center w-10 h-10 bg-mw-gray-100 hover:bg-mw-blue-100 text-mw-gray-600 hover:text-mw-blue-600 rounded-full transition-colors"
                      title="Twitter Profile"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-mw-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mw-gray-900 mb-8">
              Shared Vision, Proven Results
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl md:text-2xl font-medium text-mw-gray-700 leading-relaxed mb-8">
                "Our leadership team's diverse expertise and shared commitment to innovation drives 
                everything we do. Together, we're not just building an advertising platform—we're 
                shaping the future of how brands connect with their audiences."
              </blockquote>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-mw-blue-600 mb-2">15+</div>
                  <div className="text-mw-gray-600">Average Years Industry Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-mw-blue-600 mb-2">500%</div>
                  <div className="text-mw-gray-600">Company Growth Under Leadership</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-mw-blue-600 mb-2">98%</div>
                  <div className="text-mw-gray-600">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Work with Industry Leaders?
            </h2>
            <p className="text-xl text-mw-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with a team that has the experience, vision, and track record to drive 
              your advertising success. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-mw-gray-50 text-mw-blue-600 font-semibold rounded-lg transition-colors shadow-lg"
              >
                Connect With Our Team
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about/our-story"
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-mw-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}