// Updated Content Creator Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/ContentMaker.css'

function ContentMaker() {
  // Simple data for content creation services
  const contentServices = [
    {
      icon: "✍️",
      title: "Blog Writing",
      description: "Engaging and SEO-optimized blog posts that attract and retain your audience.",
      buttonText: "Start Writing",
      buttonLink: "/contact"
    },
    {
      icon: "📱",
      title: "Social Media Content",
      description: "Creative and engaging content for all your social media platforms.",
      buttonText: "Create Content",
      buttonLink: "/contact"
    },
    {
      icon: "🎥",
      title: "Video Scripts",
      description: "Compelling video scripts that tell your story and engage your viewers.",
      buttonText: "Write Scripts",
      buttonLink: "/contact"
    },
    {
      icon: "📧",
      title: "Email Campaigns",
      description: "Persuasive email content that drives conversions and builds relationships.",
      buttonText: "Build Campaigns",
      buttonLink: "/contact"
    },
    {
      icon: "🎨",
      title: "Creative Copywriting",
      description: "Compelling copy for websites, ads, and marketing materials.",
      buttonText: "Get Copy",
      buttonLink: "/contact"
    },
    {
      icon: "📚",
      title: "Content Strategy",
      description: "Comprehensive content strategies aligned with your business goals.",
      buttonText: "Plan Strategy",
      buttonLink: "/contact"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="Content Creation Services"
        subtitle="Professional content that engages your audience and drives results"
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <Section 
        title="Our Content Services"
        subtitle="Complete content creation solutions for your business needs"
      >
        <SimpleGrid columns={3}>
          {contentServices.map((service, index) => (
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
        title="Why Choose Our Content Creation?"
        subtitle="The advantages of working with our content experts"
        className="benefits-section"
      >
        <SimpleGrid columns={3}>
          <SimpleCard 
            icon="🎯"
            title="Audience-Focused"
            description="We create content that resonates with your target audience and drives engagement."
          />
          <SimpleCard 
            icon="📈"
            title="Results-Driven"
            description="Our content strategies are designed to achieve your specific business objectives."
          />
          <SimpleCard 
            icon="⚡"
            title="Fast Delivery"
            description="High-quality content delivered on time, every time, without compromising quality."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default ContentMaker
