// Updated Consulting Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/Consulting.css'

function Consulting() {
  // Simple data for services
  const consultingServices = [
    {
      icon: "💼",
      title: "Business Strategy",
      description: "Develop comprehensive business strategies to grow your company and reach your goals.",
      buttonText: "Learn More",
      buttonLink: "/contact"
    },
    {
      icon: "📊",
      title: "Financial Planning", 
      description: "Expert financial planning and analysis to optimize your business performance.",
      buttonText: "Learn More",
      buttonLink: "/contact"
    },
    {
      icon: "🎯",
      title: "Market Analysis",
      description: "Deep market research and analysis to identify opportunities and threats.",
      buttonText: "Learn More", 
      buttonLink: "/contact"
    },
    {
      icon: "🚀",
      title: "Growth Consulting",
      description: "Accelerate your business growth with proven strategies and expert guidance.",
      buttonText: "Learn More",
      buttonLink: "/contact"
    },
    {
      icon: "⚡",
      title: "Process Optimization",
      description: "Streamline your business processes for maximum efficiency and productivity.",
      buttonText: "Learn More",
      buttonLink: "/contact"
    },
    {
      icon: "🎓",
      title: "Training & Development",
      description: "Comprehensive training programs to develop your team's skills and capabilities.",
      buttonText: "Learn More",
      buttonLink: "/contact"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="Business Consulting Services"
        subtitle="Expert guidance to transform your business and achieve sustainable growth"
        buttonText="Get Started Today"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <Section 
        title="Our Consulting Services"
        subtitle="We provide comprehensive consulting services to help your business thrive"
      >
        <SimpleGrid columns={3}>
          {consultingServices.map((service, index) => (
            <SimpleCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              buttonLink={service.buttonLink}
            />
          ))}
        </SimpleGrid>
      </Section>

      {/* Why Choose Us Section */}
      <Section 
        title="Why Choose Biznivate?"
        subtitle="We bring years of experience and proven results to every project"
        className="why-choose-section"
      >
        <SimpleGrid columns={2}>
          <SimpleCard 
            icon="🏆"
            title="Proven Track Record"
            description="Over 10 years of helping businesses achieve their goals with measurable results."
          />
          <SimpleCard 
            icon="👥"
            title="Expert Team"
            description="Our team of experienced consultants brings diverse expertise to solve complex challenges."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default Consulting
