import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Award, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const ProjectsSection = () => {
  const projects = [
    {
      title: "Equity Research Analysis",
      duration: "Dec 2024 - Jan 2025",
      organization: "Udgam 2025, Techboard IITG",
      description: "Built comprehensive DCF valuation model for IndiaMART with 11.3% WACC calculation, conducted strategic risk assessment through PESTEL analysis, and performed competitor benchmarking to determine intrinsic share price of Rs. 1,412.57.",
      tags: ["Financial Modeling", "DCF Analysis", "Market Research", "PESTEL", "Valuation"],
      achievements: ["Rs. 1,412.57 intrinsic value", "11.3% WACC calculation", "Strategic risk assessment"],
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fraud Detection System",
      duration: "May 2025 - Jun 2025", 
      organization: "Finnovation Hackathon 2025",
      description: "Developed ML-powered fraud detection system using 100+ financial features with comprehensive preprocessing, SMOTE-Tomek balancing, and SHAP-based feature selection. Built real-time prediction interface for banking operations.",
      tags: ["Machine Learning", "XGBoost", "LightGBM", "SHAP", "Python", "Data Analytics"],
      achievements: ["91.3% accuracy", "0.605 F1-score", "Real-time predictions"],
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Inventory Optimization",
      duration: "May 2025 - Jun 2025",
      organization: "Consulting and Analytics Club, IIT Guwahati", 
      description: "Designed advanced SQL analytics for 5-store inventory tracking, created comprehensive Power BI dashboard identifying Rs. 2 lakh+ slow-movers, and benchmarked competitor pricing to optimize discount strategies.",
      tags: ["SQL", "Power BI", "Data Analytics", "Business Intelligence", "Optimization"],
      achievements: ["100+ understock tracking", "Rs. 2L+ slow-mover identification", "20+ pricing optimizations"],
      icon: Calendar,
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning financial analysis, machine learning, and business optimization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:bg-card/80 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                {project.duration}
              </div>
              
              <p className="text-sm font-medium text-primary mb-4">
                {project.organization}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                <div className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="text-xs bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button className="bg-gradient-primary hover:opacity-90 transition-all duration-300">
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection