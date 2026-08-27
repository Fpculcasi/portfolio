export interface CaseStudySection {
  heading: string
  content: string
}

export interface Project {
  slug: string
  title: string
  industry: string
  year: string
  tagline: string
  tags: string[]
  challenge: string
  architecture: string
  approach: CaseStudySection[]
  outcomes: string[]
}

export const projects: Project[] = [
  {
    slug: 'smart-heating',
    title: 'Smart Heating IoT Platform',
    industry: 'Smart building manufacturer',
    year: '2022–2023',
    tagline: 'MQTT telemetry pipeline for 10,000+ devices',
    tags: ['Java', 'MQTT', 'AWS IoT Core', 'Protobuf', 'FOTA'],
    challenge: '',
    architecture: '',
    approach: [],
    outcomes: [],
  },
  {
    slug: 'ecu-signing',
    title: 'ECU Software Signing',
    industry: 'Automotive tier-1 supplier',
    year: '2023–2024',
    tagline: 'Crypto trust chain for embedded signing, 24/7 SLA',
    tags: ['C#', '.NET', 'Microservices', 'Cryptography', 'Azure'],
    challenge: '',
    architecture: '',
    approach: [],
    outcomes: [],
  },
  {
    slug: 'shooting-range',
    title: 'Shooting Range Real-Time Events',
    industry: 'Defense sport equipment',
    year: '2023',
    tagline: 'Sub-100ms event streaming from IoT sensors to scoreboards',
    tags: ['Java', 'Azure Service Bus', 'Azure IoT Hub', 'Spring Boot'],
    challenge: '',
    architecture: '',
    approach: [],
    outcomes: [],
  },
  {
    slug: 'voice-oauth',
    title: 'Multi-Region Voice App OAuth',
    industry: 'Enterprise SaaS',
    year: '2022',
    tagline: 'Spring Boot OAuth proxy bridging Alexa and Google Home',
    tags: ['Java', 'Spring Boot', 'OAuth2', 'Alexa', 'Google Home'],
    challenge: '',
    architecture: '',
    approach: [],
    outcomes: [],
  },
  {
    slug: 'ai-agent',
    title: 'AI Manufacturing Agent',
    industry: 'Industrial automation',
    year: '2024–2025',
    tagline: 'LangGraph anomaly detection agent on Azure AI Foundry',
    tags: ['Python', 'LangGraph', 'Azure AI Foundry', 'Kotlin'],
    challenge: '',
    architecture: '',
    approach: [],
    outcomes: [],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const idx = projects.findIndex(p => p.slug === slug)
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  }
}
