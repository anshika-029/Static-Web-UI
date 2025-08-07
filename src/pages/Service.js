// Updated Services Page - Simple and Clean
import React from 'react'
import SimpleHero from '../components/SimpleHero'
import SimpleGrid from '../components/SimpleGrid'
import SimpleCard from '../components/SimpleCard'
import Section from '../components/Section'
import PageContainer from '../components/PageContainer'
import '../Styles/Service.css'

function Service() {
  // All services data
  const allServices = [
    {
      icon: "💼",
      title: "Business Consulting",
      description: "Strategic business guidance to help your company grow and achieve its objectives.",
      buttonText: "Learn More",
      buttonLink: "/consulting"
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Complete digital marketing solutions to boost your online presence and sales.",
      buttonText: "Get Started",
      buttonLink: "/marketing"
    },
    {
      icon: "💰",
      title: "Financial Services",
      description: "Expert accounting and financial planning services for business growth.",
      buttonText: "View Details",
      buttonLink: "/accounting"
    },
    {
      icon: "🎨",
      title: "Logo Design",
      description: "Professional logo design services to create a memorable brand identity.",
      buttonText: "See Portfolio",
      buttonLink: "/logodesigner"
    },
    {
      icon: "📊",
      title: "CRM Solutions",
      description: "Customer relationship management systems to streamline your business.",
      buttonText: "Explore CRM",
      buttonLink: "/crm"
    },
    {
      icon: "🔍",
      title: "SEO Services",
      description: "Search engine optimization to improve your website's visibility and rankings.",
      buttonText: "Boost Rankings",
      buttonLink: "/seo"
    },
    {
      icon: "📝",
      title: "Content Creation",
      description: "High-quality content creation services to engage your target audience.",
      buttonText: "Create Content",
      buttonLink: "/contentmaker"
    },
    {
      icon: "📈",
      title: "Digital Analytics",
      description: "Advanced analytics and reporting to track and optimize your performance.",
      buttonText: "View Analytics",
      buttonLink: "/digitalanalytics"
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description: "Effective email marketing campaigns to nurture leads and drive conversions.",
      buttonText: "Start Campaigns",
      buttonLink: "/emailmarketingmanager"
    }
  ]

  return (
    <PageContainer>
      {/* Hero Section */}
      <SimpleHero 
        title="Our Services"
        subtitle="Comprehensive business solutions to help your company thrive in today's competitive market"
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Services Overview */}
      <Section 
        title="What We Offer"
        subtitle="End-to-end business solutions designed to accelerate your growth"
      >
        <SimpleGrid columns={3}>
          {allServices.map((service, index) => (
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

      {/* Why Choose Our Services */}
      <Section 
        title="Why Choose Biznivate?"
        subtitle="The benefits of working with our expert team"
        className="benefits-section"
      >
        <SimpleGrid columns={3}>
          <SimpleCard 
            icon="✅"
            title="Proven Results"
            description="Over 5,000 successful projects delivered with measurable results and client satisfaction."
          />
          <SimpleCard 
            icon="⚡"
            title="Fast Delivery"
            description="Quick turnaround times without compromising on quality or attention to detail."
          />
          <SimpleCard 
            icon="💎"
            title="Premium Quality"
            description="High-quality services that meet industry standards and exceed client expectations."
          />
        </SimpleGrid>
      </Section>
    </PageContainer>
  )
}

export default Service
