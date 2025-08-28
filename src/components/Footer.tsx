import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, href: 'mailto:yash.sharma@iitg.ac.in' }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Yash Sharma
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Product Manager & Business Analyst passionate about building innovative 
              solutions and driving strategic growth through data-driven insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                IIT Guwahati, Assam, India
              </p>
              <a
                href="mailto:yash.sharma@iitg.ac.in"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                yash.sharma@iitg.ac.in
              </a>
              <a
                href="#contact"
                className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
              >
                Let's Connect
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Yash Sharma. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                <Heart className="w-4 h-4 mx-1 text-red-500" />
              </motion.div>
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer