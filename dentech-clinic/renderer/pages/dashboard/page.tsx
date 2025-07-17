"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, Calendar, DollarSign, Activity, UserCheck, BarChart3, Shield, Eye } from "lucide-react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

const menuItems = [
  {
    title: "Cadastro de Pacientes",
    description: "Gerenciar informações dos pacientes",
    icon: Users,
    href: "/patients/page",
    color: "bg-blue-500",
  },
  {
    title: "Prontuário Eletrônico",
    description: "Histórico clínico e anamnese",
    icon: FileText,
    href: "/medical-records/page",
    color: "bg-green-500",
  },
  {
    title: "Agendamento",
    description: "Agenda inteligente e consultas",
    icon: Calendar,
    href: "/appointments/page",
    color: "bg-purple-500",
  },
  {
    title: "Financeiro",
    description: "Controle financeiro e faturamento",
    icon: DollarSign,
    href: "/financial/page",
    color: "bg-yellow-500",
  },
  {
    title: "Tratamentos",
    description: "Controle de procedimentos",
    icon: Activity,
    href: "/treatments/page",
    color: "bg-red-500",
  },
  {
    title: "Profissionais",
    description: "Cadastro de dentistas e equipe",
    icon: UserCheck,
    href: "/professionals/page",
    color: "bg-indigo-500",
  },
  {
    title: "Relatórios",
    description: "Indicadores e análises",
    icon: BarChart3,
    href: "/reports/page",
    color: "bg-orange-500",
  },
  {
    title: "Segurança",
    description: "LGPD e controle de acesso",
    icon: Shield,
    href: "/security/page",
    color: "bg-gray-500",
  },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-muted-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo ao sistema de gestão odontológica</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Card key={item.href} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href={item.href}>
                      <Eye className="h-4 w-4 mr-2" />
                      Acessar
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Pacientes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultas Hoje</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faturamento Mensal</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ -</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tratamentos Ativos</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
