import { notFound } from 'next/navigation'
import { getAppById, apps } from '@/data/apps'
import { PrivacyPageClient } from './PrivacyPageClient'

interface PrivacyPageProps {
  params: {
    id: string
  }
}

// Generate static params for all app IDs
export async function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }))
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  const app = getAppById(params.id)

  if (!app) {
    notFound()
  }

  return <PrivacyPageClient app={app} />
} 