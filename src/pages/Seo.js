// Updated SEO Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/Seo.css'

function Seo() {
  // Simple data for SEO services
  const seoServices = [
    {
      icon: "🔍",
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to identify high-value search terms for your business.",
      buttonText: "Start Research",
      buttonLink: "/contact"
    },
    {
      icon: "📈",
      title: "On-Page SEO",
      description: "Optimize your website content and structure for better search engine rankings.",
      buttonText: "Optimize Now",
      buttonLink: "/contact"
    },
    {
      icon: "🔗",
      title: "Link Building",
      description: "Build high-quality backlinks to improve your website's authority and rankings.",
      buttonText: "Build Links",
      buttonLink: "/contact"
    },
    {
      icon: "📊",
      title: "SEO Analytics",
      description: "Track and measure your SEO performance with detailed analytics and reporting.",
      buttonText: "View Analytics",
      buttonLink: "/contact"
    },
    {
      icon: "🏪",
      title: "Local SEO",
      description: "Improve your local search visibility to attract customers in your area.",
      buttonText: "Go Local",
      buttonLink: "/contact"
    },
    {
      icon: "📱",
      title: "Technical SEO",
      description: "Optimize your website's technical aspects for better crawling and indexing.",
      buttonText: "Fix Issues",
      buttonLink: "/contact"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="SEO Optimization Services"
        subtitle="Boost your search engine rankings and drive organic traffic to your website"
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Section */}
      <Section 
        title="Our SEO Services"
        subtitle="Complete search engine optimization solutions for your business"
      >
        <SimpleGrid columns={3}>
          {seoServices.map((service, index) => (
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
        title="Why Choose Our SEO Services?"
        subtitle="The advantages of working with our SEO experts"
        className="benefits-section"
      >
        <SimpleGrid columns={3}>
          <SimpleCard 
            icon="🎯"
            title="Targeted Strategy"
            description="Custom SEO strategies tailored to your specific business goals and industry."
          />
          <SimpleCard 
            icon="📊"
            title="Data-Driven Results"
            description="All our SEO decisions are backed by comprehensive data analysis and testing."
          />
          <SimpleCard 
            icon="🚀"
            title="Proven Growth"
            description="Consistent track record of improving rankings and increasing organic traffic."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default Seo
