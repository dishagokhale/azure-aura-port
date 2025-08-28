import { motion } from 'framer-motion'
import { 
  Code, TrendingUp, BarChart3, Database, 
  PieChart, Settings, Users, Lightbulb,
  GitBranch, Palette, FileSpreadsheet, Monitor
} from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management Skills",
      skills: [
        { name: "PLM", icon: Settings },
        { name: "Root Cause Analysis", icon: Lightbulb },
        { name: "Metrics Design", icon: BarChart3 },
        { name: "GTM Strategy", icon: TrendingUp },
        { name: "APIs", icon: Code },
        { name: "Product Design", icon: Palette }
      ]
    },
    {
      title: "Business Skills", 
      skills: [
        { name: "Fundamental Analysis", icon: PieChart },
        { name: "Market Research", icon: TrendingUp },
        { name: "Technical Analysis", icon: BarChart3 },
        { name: "Portfolio Management", icon: FileSpreadsheet },
        { name: "Trading", icon: Database }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "C/C++", icon: Code },
        { name: "Python", icon: Code },
        { name: "SQL", icon: Database },
        { name: "HTML", icon: Monitor },
        { name: "Javascript", icon: Code },
        { name: "CSS", icon: Palette },
        { name: "Power BI", icon: BarChart3 },
        { name: "Git", icon: GitBranch },
        { name: "Excel", icon: FileSpreadsheet }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-serif">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning product management, business analysis, and technical development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:bg-card/80 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-6 text-center text-foreground font-serif">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground font-serif">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-3">Strategic & Analytical</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Market Research & Consumer Analysis</li>
                  <li>• Financial Modeling & Valuation (DCF, WACC)</li>
                  <li>• PESTEL & Competitor Analysis</li>
                  <li>• Data-Driven Decision Making</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-3">Leadership & Management</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Team Leadership (130+ participants)</li>
                  <li>• Project Management & Coordination</li>
                  <li>• Sports Administration & Event Planning</li>
                  <li>• Cross-functional Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection