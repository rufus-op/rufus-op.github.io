import { ArrowLeft, Star, Download, ExternalLink, Check, Calendar, Smartphone, Users, Code } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAppById, apps } from '@/data/apps'
import { AppPageClient } from './AppPageClient'

interface AppPageProps {
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

export default function AppPage({ params }: AppPageProps) {
  const app = getAppById(params.id)

  if (!app) {
    notFound()
  }

  return <AppPageClient app={app} />
} 