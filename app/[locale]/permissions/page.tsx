"use client"

import { ArrowLeft, Shield, Users, BarChart3, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function PermissionsPage() {
  const router = useRouter()
  const t = useTranslations('permissions')

  const permissions = [
    {
      name: t('instagramBasic'),
      description: t('instagramBasicDesc'),
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: t('pagesShowList'),
      description: t('pagesShowListDesc'),
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: t('pagesReadEngagement'),
      description: t('pagesReadEngagementDesc'),
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: t('businessManagement'),
      description: t('businessManagementDesc'),
      icon: Building2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => router.push('/')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-gray-600">
              {t('description')}
            </p>
          </div>

          <div className="space-y-4">
            {permissions.map((permission) => (
              <Card key={permission.name} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${permission.bgColor}`}>
                      <permission.icon className={`h-5 w-5 ${permission.color}`} />
                    </div>
                    <CardTitle className="text-lg">{permission.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {permission.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
