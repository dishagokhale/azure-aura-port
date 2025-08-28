import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { useToast } from '@/hooks/use-toast'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()
  const { toast } = useToast()

  const onSubmit = (data: ContactForm) => {
    // Simulate form submission
    console.log('Contact form data:', data)
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "disha.gokhale@iitg.ac.in",
      href: "mailto:disha.gokhale@iitg.ac.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91757 15109",
      href: "tel:+919175715109"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIT Guwahati, Assam, India",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      href: "#",
      color: "hover:text-primary"
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-serif">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? Let's connect and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, 
                or potential collaborations. Whether you're looking for a product manager, 
                business analyst, or just want to connect about technology and finance, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 glass-card hover:bg-card/80 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                    <a 
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className={`glass-card ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format"
                      }
                    })}
                    className={`glass-card ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <Input
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is required" })}
                  className={`glass-card ${errors.subject ? 'border-destructive' : ''}`}
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`glass-card resize-none ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a product strategy discussion, business analysis project, 
              or exploring new opportunities in fintech, I'm always ready for exciting challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:opacity-90">
                Schedule a Call
              </Button>
              <Button variant="outline" className="glass-card">
                View My Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection