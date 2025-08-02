import { notFound } from 'next/navigation'
import { getAppById, apps } from '@/data/apps'
import { TermsPageClient } from './TermsPageClient'

interface TermsPageProps {
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

export default function TermsPage({ params }: TermsPageProps) {
  const app = getAppById(params.id)

  if (!app) {
    notFound()
  }

  return <TermsPageClient app={app} />
} 