// Updated Accounting Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/Accounting.css'

function Accounting() {
  // Simple data for accounting services
  const accountingServices = [
    {
      icon: "📊",
      title: "Financial Planning",
      description: "Comprehensive financial planning and analysis to help your business make informed decisions.",
      buttonText: "Learn More",
      buttonLink: "/contact"
    },
    {
      icon: "📋",
      title: "Tax Preparation",
      description: "Expert tax preparation services to ensure compliance and maximize your tax savings.",
      buttonText: "Get Started",
      buttonLink: "/contact"
    },
    {
      icon: "💰",
      title: "Bookkeeping",
      description: "Professional bookkeeping services to keep your financial records accurate and up-to-date.",
      buttonText: "View Details",
      buttonLink: "/contact"
    },
    {
      icon: "📈",
      title: "Business Advisory",
      description: "Strategic business advisory services to help you grow and scale your business.",
      buttonText: "Consult Now",
      buttonLink: "/contact"
    },
    {
      icon: "🔍",
      title: "Financial Auditing",
      description: "Thorough financial auditing services to ensure accuracy and compliance.",
      buttonText: "Schedule Audit",
      buttonLink: "/contact"
    },
    {
      icon: "💡",
      title: "Financial Consulting",
      description: "Expert financial consulting to optimize your business financial performance.",
      buttonText: "Get Advice",
      buttonLink: "/contact"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="Accounting & Financial Services"
        subtitle="Professional accounting solutions to help your business thrive financially"
        buttonText="Get Started Today"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <Section 
        title="Our Accounting Services"
        subtitle="Complete financial solutions to keep your business financially healthy"
      >
        <SimpleGrid columns={3}>
          {accountingServices.map((service, index) => (
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
        title="Why Choose Our Accounting Services?"
        subtitle="The benefits of working with our expert accounting team"
        className="benefits-section"
      >
        <SimpleGrid columns={3}>
          <SimpleCard 
            icon="✅"
            title="Certified Professionals"
            description="Our team consists of certified accountants with years of experience."
          />
          <SimpleCard 
            icon="🔒"
            title="Secure & Confidential"
            description="Your financial data is secure with our advanced security measures."
          />
          <SimpleCard 
            icon="📞"
            title="24/7 Support"
            description="Round-the-clock support for all your accounting needs."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default Accounting
