import { motion } from 'framer-motion'
import { Briefcase, Users, Trophy, Calendar, MapPin } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      type: "Experience",
      role: "Marketing Intern",
      organization: "Swastik Sales (Pharmaceutical Distributors)",
      duration: "May 2025 - Jul 2025",
      mode: "Hybrid",
      responsibilities: [
        "Conducted market research and analyzed consumer feedback to uncover various trends and improvement areas.",
        "Assisted in developing & executing marketing campaigns along with contributing creative ideas & content.",
        "Streamlined data organization and reporting processes, enhancing team efficiency and campaign tracking."
      ],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const positions = [
    {
      type: "Leadership",
      role: "Joint Secretary, Sports Board, IIT Guwahati",
      organization: "IIT Guwahati",
      duration: "Apr 2025 - Present",
      mode: "On Campus",
      responsibilities: [
        "Spearheading 22 Sports Board members, managing all campus sports events and operations for 8500+ students.",
        "Implementing outreach initiatives to enhance student engagement in sports, fostering wellness & teamwork culture."
      ],
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "Leadership",
      role: "Sports Secretary, Dhansiri Hostel, IIT Guwahati", 
      organization: "IIT Guwahati",
      duration: "Apr 2024 - Apr 2025",
      mode: "On Campus",
      responsibilities: [
        "Revamped gym infrastructure with 4+ new fitness machines and standardized 10+ high-quality sports equipment.",
        "Boosted hostel sports participation by 100% through strategic engagement, mentoring new players & planning.",
        "Coordinated 18+ inter-hostel sports, mobilizing 130+ participants with smooth team management and logistics."
      ],
      icon: Trophy,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const allExperiences = [...experiences, ...positions]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and leadership roles that shaped my career journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5" />

            {allExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 transform md:-translate-x-2">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-background`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="glass-card p-6 hover:bg-card/80 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color}`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Role & Organization */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {exp.organization}
                    </p>

                    {/* Duration & Mode */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.mode}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: "8500+", label: "Students Managed" },
              { number: "130+", label: "Participants Coordinated" },
              { number: "22", label: "Team Members Led" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:bg-card/80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection