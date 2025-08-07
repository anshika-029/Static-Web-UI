// Updated Logo Design Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/LogoDesigner.css'

function LogoDesigner() {
  // Simple data for logo design services
  const designServices = [
    {
      icon: "🎨",
      title: "Logo Creation",
      description: "Custom logo designs that perfectly represent your brand identity and values.",
      buttonText: "Create Logo",
      buttonLink: "/contact"
    },
    {
      icon: "🔄",
      title: "Logo Redesign",
      description: "Refresh your existing logo with modern design elements while maintaining brand recognition.",
      buttonText: "Redesign Now",
      buttonLink: "/contact"
    },
    {
      icon: "📱",
      title: "Brand Identity",
      description: "Complete brand identity packages including logos, colors, and typography guidelines.",
      buttonText: "Build Identity",
      buttonLink: "/contact"
    },
    {
      icon: "📁",
      title: "Logo Variations",
      description: "Multiple logo variations for different use cases and marketing materials.",
      buttonText: "Get Variations",
      buttonLink: "/contact"
    },
    {
      icon: "🎯",
      title: "Industry-Specific",
      description: "Specialized logo designs tailored to your specific industry and target audience.",
      buttonText: "Industry Logos",
      buttonLink: "/contact"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality and creativity.",
      buttonText: "Rush Order",
      buttonLink: "/contact"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="Professional Logo Design"
        subtitle="Create a memorable brand identity with our custom logo design services"
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <Section 
        title="Our Design Services"
        subtitle="Professional logo design solutions for every business"
      >
        <SimpleGrid columns={3}>
          {designServices.map((service, index) => (
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
        title="Why Choose Our Logo Design?"
        subtitle="The advantages of working with our design experts"
        className="benefits-section"
      >
        <SimpleGrid columns={3}>
          <SimpleCard 
            icon="🏆"
            title="Award-Winning Designs"
            description="Our designs have won multiple industry awards and recognition."
          />
          <SimpleCard 
            icon="💡"
            title="Creative Excellence"
            description="Unique and creative designs that make your brand stand out from the competition."
          />
          <SimpleCard 
            icon="🤝"
            title="Collaborative Process"
            description="We work closely with you throughout the design process to ensure satisfaction."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default LogoDesigner
