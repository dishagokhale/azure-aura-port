import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech. Major",
      institute: "Indian Institute of Technology, Guwahati",
      grade: "7.55 SPI (Recent)",
      year: "2023-Present",
      icon: GraduationCap
    },
    {
      degree: "Senior Secondary",
      institute: "CBSE Board",
      grade: "94.0%",
      year: "2022",
      icon: Award
    },
    {
      degree: "Secondary",
      institute: "CBSE Board", 
      grade: "98.0%",
      year: "2020",
      icon: Award
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions through strategic thinking and technical excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a B.Tech student at IIT Guwahati with a passion for product management, 
              business analysis, and financial modeling. My journey spans across technology, 
              finance, and strategic planning, allowing me to bridge the gap between technical 
              innovation and business growth.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through various projects and internships, I've developed expertise in market 
              research, equity analysis, ML-driven solutions, and sports leadership. I believe 
              in leveraging data-driven insights to create meaningful impact and drive 
              organizational success.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Product Management & Strategy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Business Analysis & Financial Modeling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">Machine Learning & Data Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Leadership & Team Management</span>
              </div>
            </div>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:bg-card/80 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-2">{edu.institute}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">{edu.grade}</span>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection