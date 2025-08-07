// Updated Marketing Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/Marketing.css'

function Marketing() {
  // Simple data for marketing services
  const marketingServices = [
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and reach your target audience.",
      buttonText: "Get Started",
      buttonLink: "/contact"
    },
    {
      icon: "🎯",
      title: "Social Media Marketing", 
      description: "Engage your audience and build brand awareness across all major social media platforms.",
      buttonText: "Learn More",
      buttonLink: "/socialmediamanager"
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description: "Create powerful email campaigns that convert prospects into loyal customers.",
      buttonText: "Start Now", 
      buttonLink: "/emailmarketingmanager"
    },
    {
      icon: "📊",
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      buttonText: "Boost Rankings",
      buttonLink: "/seo"
    },
    {
      icon: "💡",
      title: "Content Creation",
      description: "High-quality content that engages your audience and builds your brand authority.",
      buttonText: "Create Content",
      buttonLink: "/contentmaker"
    },
    {
      icon: "📈",
      title: "Performance Analytics",
      description: "Track, measure, and optimize your marketing performance with detailed analytics.",
      buttonText: "View Analytics",
      buttonLink: "/digitalanalytics"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="Digital Marketing Excellence"
        subtitle="Grow your business with data-driven marketing strategies that deliver real results"
        buttonText="Start Your Journey"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <Section 
        title="Our Marketing Services"
        subtitle="Complete marketing solutions to accelerate your business growth"
      >
        <SimpleGrid columns={3}>
          {marketingServices.map((service, index) => (
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

      {/* Success Story Section */}
      <Section 
        title="Marketing Success Stories"
        subtitle="See how we've helped businesses achieve remarkable growth"
        className="success-section"
      >
        <SimpleGrid columns={3}>
          <SimpleCard 
            icon="📈"
            title="300% ROI Increase"
            description="Helped a local business triple their return on investment through targeted digital campaigns."
          />
          <SimpleCard 
            icon="👥"
            title="50K+ New Customers"
            description="Generated over 50,000 new customers for our clients through strategic marketing initiatives."
          />
          <SimpleCard 
            icon="🚀"
            title="500% Traffic Growth"
            description="Increased website traffic by 500% using our proven SEO and content marketing strategies."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default Marketing
