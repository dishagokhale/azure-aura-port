import { motion } from 'framer-motion'
import { 
  Award, Trophy, Medal, Target, Users, 
  Calendar, ExternalLink, Star 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Nomura Quant Challenge 4.0",
      description: "Received special mention for outstanding performance in quantitative finance challenge",
      year: "2025",
      category: "Competition",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Equity Research Challenge",
      description: "Achieved a spot in the top 5 teams globally in comprehensive equity analysis",
      year: "2024", 
      category: "Competition",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Finnovation Hackathon 2025",
      description: "Finalist for fintech innovation among 100+ teams organised by SBI",
      year: "2025",
      category: "Hackathon",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Inter-IIT Sports Meet 2024",
      description: "Represented IIT Guwahati in Squash at the prestigious Inter-IIT Sports Meet",
      year: "2024",
      category: "Sports",
      icon: Medal,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Spardha Competition",
      description: "Secured silver medal in Yoga Competition at Inter-Hostel Sports event",
      year: "2025", 
      category: "Sports",
      icon: Medal,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Guwahati Half Marathon",
      description: "Successfully organized marathon with 5000+ participants as part of Techniche team",
      year: "2024",
      category: "Organization",
      icon: Users,
      color: "from-red-500 to-pink-500"
    }
  ]

  const categories = [
    { name: "Competition", count: 3, icon: Trophy },
    { name: "Sports", count: 2, icon: Medal },
    { name: "Organization", count: 1, icon: Users }
  ]

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-serif">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognitions and accomplishments across competitions, sports, and leadership initiatives
          </p>
        </motion.div>

        {/* Category Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:bg-card/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <category.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-foreground mb-1">
                {category.count}
              </div>
              <div className="text-sm text-muted-foreground">
                {category.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:bg-card/80 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {achievement.year}
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded mb-3 inline-block">
                  {achievement.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3 font-serif">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Achievement
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Accomplishments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8 font-serif">
            Additional Accomplishments
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Leadership & Organization
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                  Core Team, FEC - Facilitated associate recruitment process (Apr 2025-Present)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                  Student Alumni Interaction Linkage - Organized pioneering batch reunion (2024-2025)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                  Associate Manager, UDGAM - Managed media outreach and visibility strategies (2024)
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Events & Community
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3" />
                  Organiser, Spirit Sports Fest - Facilitated 50+ participants from 4+ institutes (2023)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3" />
                  Member, Finesse - Active contributor in club orientation and events (2024-Present)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3" />
                  Techniche Team - Organized Funniche Week with thousands of participants (2024)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection