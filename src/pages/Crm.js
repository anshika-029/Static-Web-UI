// Updated CRM Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/Crm.css'

function Crm() {
  // Simple data for CRM services
  const crmServices = [
    {
      icon: "👥",
      title: "Customer Management",
      description: "Organize and manage all your customer information in one centralized platform.",
      buttonText: "Manage Customers",
      buttonLink: "/contact"
    },
    {
      icon: "📊",
      title: "Sales Pipeline",
      description: "Track your sales process from lead generation to deal closure with visual pipelines.",
      buttonText: "Track Sales",
      buttonLink: "/contact"
    },
    {
      icon: "📧",
      title: "Email Integration",
      description: "Seamlessly integrate email campaigns and communications within your CRM system.",
      buttonText: "Connect Email",
      buttonLink: "/contact"
    },
    {
      icon: "📈",
      title: "Analytics & Reports",
      description: "Get detailed insights into your sales performance with comprehensive reporting tools.",
      buttonText: "View Reports",
      buttonLink: "/contact"
    },
    {
      icon: "🤖",
      title: "Automation",
      description: "Automate repetitive tasks and workflows to improve efficiency and productivity.",
      buttonText: "Automate Now",
      buttonLink: "/contact"
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description: "Access your CRM data anytime, anywhere with our mobile-friendly platform.",
      buttonText: "Go Mobile",
      buttonLink: "/contact"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="CRM Management Solutions"
        subtitle="Streamline your customer relationships and boost sales with our powerful CRM platform"
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <Section 
        title="Our CRM Features"
        subtitle="Everything you need to manage customer relationships effectively"
      >
        <SimpleGrid columns={3}>
          {crmServices.map((service, index) => (
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

      {/* Benefits Section */}
      <Section 
        title="Why Choose Our CRM?"
        subtitle="The benefits of using our customer relationship management platform"
        className="benefits-section"
      >
        <SimpleGrid columns={3}>
          <SimpleCard 
            icon="🎯"
            title="Increased Sales"
            description="Boost your sales conversion rates with better lead management and follow-up."
          />
          <SimpleCard 
            icon="⚡"
            title="Improved Efficiency"
            description="Automate manual tasks and streamline your sales processes for better productivity."
          />
          <SimpleCard 
            icon="🔒"
            title="Secure & Reliable"
            description="Keep your customer data safe with enterprise-grade security and reliability."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default Crm
