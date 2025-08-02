export interface App {
  id: string
  name: string
  description: string
  shortDescription: string
  category: string
  platform: 'iOS' | 'Android' | 'Web' | 'Cross-platform'
  icon: string
  screenshots: string[]
  features: string[]
  technologies: string[]
  downloadUrl?: string
  websiteUrl?: string
  rating: number
  downloads: string
  releaseDate: string
  size: string
  version: string
  developer: string
  price: 'Free' | 'Paid' | 'Freemium'
  tags: string[]
}

export const apps: App[] = [
  {
    id: 'taskflow-pro',
    name: 'TaskFlow Pro',
    description: 'A comprehensive task management app designed to boost productivity and streamline workflow. TaskFlow Pro combines intuitive design with powerful features to help teams and individuals organize, prioritize, and complete tasks efficiently.',
    shortDescription: 'Boost productivity with our comprehensive task management solution.',
    category: 'Productivity',
    platform: 'Cross-platform',
    icon: '📋',
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop'
    ],
    features: [
      'Intuitive task creation and management',
      'Team collaboration and sharing',
      'Priority levels and due dates',
      'Progress tracking and analytics',
      'Cloud synchronization',
      'Offline mode support',
      'Custom categories and tags',
      'Reminder notifications'
    ],
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    downloadUrl: 'https://apps.apple.com/app/taskflow-pro',
    websiteUrl: 'https://taskflow-pro.com',
    rating: 4.8,
    downloads: '500K+',
    releaseDate: '2023-06-15',
    size: '45MB',
    version: '2.1.0',
    developer: 'Rufus OP',
    price: 'Freemium',
    tags: ['productivity', 'task-management', 'team-collaboration', 'workflow']
  },
  {
    id: 'fitlife-hub',
    name: 'FitLife Hub',
    description: 'Your all-in-one fitness companion that combines workout tracking, nutrition planning, and health monitoring. FitLife Hub helps you achieve your fitness goals with personalized plans, progress tracking, and expert guidance.',
    shortDescription: 'Your complete fitness companion for a healthier lifestyle.',
    category: 'Health & Fitness',
    platform: 'Cross-platform',
    icon: '💪',
    screenshots: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
    ],
    features: [
      'Workout tracking and planning',
      'Nutrition and meal planning',
      'Health metrics monitoring',
      'Personalized fitness plans',
      'Progress visualization',
      'Social features and challenges',
      'Integration with wearables',
      'Expert workout videos'
    ],
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'AWS'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.fitlife.hub',
    websiteUrl: 'https://fitlife-hub.com',
    rating: 4.9,
    downloads: '1M+',
    releaseDate: '2023-03-20',
    size: '78MB',
    version: '3.2.1',
    developer: 'Rufus OP',
    price: 'Freemium',
    tags: ['fitness', 'health', 'workout', 'nutrition', 'wellness']
  },
  {
    id: 'smartbudget',
    name: 'SmartBudget',
    description: 'Take control of your finances with SmartBudget, the intelligent personal finance manager. Track expenses, set budgets, analyze spending patterns, and achieve your financial goals with ease.',
    shortDescription: 'Intelligent personal finance management made simple.',
    category: 'Finance',
    platform: 'Cross-platform',
    icon: '💰',
    screenshots: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
    ],
    features: [
      'Expense tracking and categorization',
      'Budget planning and monitoring',
      'Financial goal setting',
      'Spending analytics and reports',
      'Bill reminders and payments',
      'Investment portfolio tracking',
      'Secure data encryption',
      'Multi-currency support'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'Stripe'],
    downloadUrl: 'https://apps.apple.com/app/smartbudget',
    websiteUrl: 'https://smartbudget.app',
    rating: 4.7,
    downloads: '750K+',
    releaseDate: '2023-08-10',
    size: '52MB',
    version: '1.8.3',
    developer: 'Rufus OP',
    price: 'Freemium',
    tags: ['finance', 'budgeting', 'expense-tracking', 'personal-finance']
  },
  {
    id: 'learnhub',
    name: 'LearnHub',
    description: 'Transform your learning experience with LearnHub, an interactive educational platform that adapts to your learning style. Access courses, track progress, and connect with learners worldwide.',
    shortDescription: 'Interactive learning platform that adapts to your style.',
    category: 'Education',
    platform: 'Web',
    icon: '📚',
    screenshots: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
    ],
    features: [
      'Interactive course content',
      'Adaptive learning algorithms',
      'Progress tracking and analytics',
      'Peer-to-peer learning',
      'Expert instructor support',
      'Certification programs',
      'Mobile-responsive design',
      'Offline content access'
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
    websiteUrl: 'https://learnhub.education',
    rating: 4.6,
    downloads: 'N/A',
    releaseDate: '2023-11-05',
    size: 'N/A',
    version: '1.0.0',
    developer: 'Rufus OP',
    price: 'Freemium',
    tags: ['education', 'learning', 'courses', 'online-learning', 'certification']
  },
  {
    id: 'socialconnect',
    name: 'SocialConnect',
    description: 'Connect with friends, family, and communities in a meaningful way. SocialConnect focuses on authentic connections, privacy, and positive social interactions.',
    shortDescription: 'Meaningful social connections in a safe environment.',
    category: 'Social',
    platform: 'Cross-platform',
    icon: '👥',
    screenshots: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop'
    ],
    features: [
      'Private messaging and calls',
      'Community groups and forums',
      'Privacy-focused design',
      'Content sharing and discovery',
      'Event planning and coordination',
      'Real-time notifications',
      'End-to-end encryption',
      'Customizable privacy settings'
    ],
    technologies: ['React Native', 'Socket.io', 'Redis', 'AWS'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.socialconnect',
    websiteUrl: 'https://socialconnect.app',
    rating: 4.5,
    downloads: '2M+',
    releaseDate: '2023-01-15',
    size: '65MB',
    version: '2.5.2',
    developer: 'Rufus OP',
    price: 'Free',
    tags: ['social', 'messaging', 'community', 'privacy', 'communication']
  },
  {
    id: 'weatherwise',
    name: 'WeatherWise',
    description: 'Get accurate weather forecasts, real-time updates, and detailed meteorological data. WeatherWise provides comprehensive weather information to help you plan your day effectively.',
    shortDescription: 'Accurate weather forecasts and real-time updates.',
    category: 'Weather',
    platform: 'Cross-platform',
    icon: '🌤️',
    screenshots: [
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop'
    ],
    features: [
      'Accurate weather forecasts',
      'Real-time weather updates',
      'Hourly and daily predictions',
      'Weather maps and radar',
      'Severe weather alerts',
      'Location-based forecasts',
      'Weather widgets',
      'Historical weather data'
    ],
    technologies: ['Flutter', 'Dart', 'OpenWeather API', 'Firebase'],
    downloadUrl: 'https://apps.apple.com/app/weatherwise',
    websiteUrl: 'https://weatherwise.app',
    rating: 4.4,
    downloads: '300K+',
    releaseDate: '2023-09-20',
    size: '38MB',
    version: '1.6.0',
    developer: 'Rufus OP',
    price: 'Free',
    tags: ['weather', 'forecast', 'meteorology', 'alerts', 'maps']
  }
]

export const getAppById = (id: string): App | undefined => {
  return apps.find(app => app.id === id)
}

export const getAppsByCategory = (category: string): App[] => {
  return apps.filter(app => app.category === category)
}

export const getAppsByPlatform = (platform: string): App[] => {
  return apps.filter(app => app.platform === platform)
} 