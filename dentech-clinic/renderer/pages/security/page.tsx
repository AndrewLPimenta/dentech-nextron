"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Shield, Database, FileText, Download, Eye, Trash2, Plus } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function SecurityPage() {
  const [showUserForm, setShowUserForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui será integrada a API
    setShowUserForm(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Segurança e Conformidade (LGPD)</h1>
            <p className="text-muted-foreground">Controle de acesso e proteção de dados</p>
          </div>
        </div>

        <Tabs defaultValue="usuarios" className="space-y-4">
          <TabsList>
            <TabsTrigger value="usuarios">Usuários</TabsTrigger>
            <TabsTrigger value="permissoes">Permissões</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
            <TabsTrigger value="lgpd">LGPD</TabsTrigger>
            <TabsTrigger value="auditoria">Auditoria</TabsTrigger>
          </TabsList>

          <TabsContent value="usuarios">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Controle de Usuários</CardTitle>
                    <CardDescription>Gerencie os usuários do sistema</CardDescription>
                  </div>
                  <Button onClick={() => setShowUserForm(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Usuário
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showUserForm ? (
                  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="user-name">Nome Completo *</Label>
                        <Input id="user-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-email">E-mail *</Label>
                        <Input id="user-email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-role">Tipo de Usuário *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="administrador">Administrador</SelectItem>
                            <SelectItem value="dentista">Dentista</SelectItem>
                            <SelectItem value="secretaria">Secretária</SelectItem>
                            <SelectItem value="auxiliar">Auxiliar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-password">Senha Temporária *</Label>
                        <Input id="user-password" type="password" required />
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button type="submit">Criar Usuário</Button>
                      <Button type="button" variant="outline" onClick={() => setShowUserForm(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                ) : null}

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Último Acesso</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Nenhum usuário cadastrado
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permissoes">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Matriz de Permissões</CardTitle>
                  <CardDescription>Configure as permissões por tipo de usuário</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { role: "Administrador", description: "Acesso total ao sistema" },
                      { role: "Dentista", description: "Acesso a pacientes e prontuários" },
                      { role: "Secretária", description: "Agendamento e cadastros básicos" },
                      { role: "Auxiliar", description: "Visualização limitada" },
                    ].map((userType) => (
                      <Card key={userType.role}>
                        <CardHeader>
                          <CardTitle className="text-lg">{userType.role}</CardTitle>
                          <CardDescription>{userType.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              "Cadastro de Pacientes",
                              "Prontuário Eletrônico",
                              "Agendamento",
                              "Financeiro",
                              "Tratamentos",
                              "Profissionais",
                              "Relatórios",
                              "Configurações",
                            ].map((module) => (
                              <div key={module} className="flex items-center justify-between">
                                <Label htmlFor={`${userType.role}-${module}`}>{module}</Label>
                                <Switch id={`${userType.role}-${module}`} />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="backup">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Backup Automático</CardTitle>
                  <CardDescription>Configurações de backup dos dados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-backup">Backup Automático</Label>
                        <Switch id="auto-backup" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="backup-frequency">Frequência</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diario">Diário</SelectItem>
                            <SelectItem value="semanal">Semanal</SelectItem>
                            <SelectItem value="mensal">Mensal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="backup-time">Horário</Label>
                        <Input id="backup-time" type="time" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Database className="h-5 w-5 text-green-600" />
                          <h4 className="font-semibold text-green-800">Status do Backup</h4>
                        </div>
                        <p className="text-sm text-green-700">Último backup: Aguardando configuração</p>
                        <p className="text-sm text-green-700">Próximo backup: Aguardando configuração</p>
                      </div>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Fazer Backup Manual
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Backups</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data/Hora</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Tamanho</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                          Nenhum backup realizado
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lgpd">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conformidade LGPD</CardTitle>
                  <CardDescription>Gestão de consentimentos e proteção de dados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-800">Status de Conformidade</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">-</div>
                        <p className="text-sm text-blue-700">Termos Assinados</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">-</div>
                        <p className="text-sm text-blue-700">Dados Protegidos</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">-</div>
                        <p className="text-sm text-blue-700">Solicitações</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Termo de Consentimento</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button className="w-full">
                          <FileText className="h-4 w-4 mr-2" />
                          Configurar Termo
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Visualizar Termo Atual
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Solicitações LGPD</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Exportar Dados
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Excluir Dados
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Consentimentos por Paciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Paciente</TableHead>
                        <TableHead>Data do Consentimento</TableHead>
                        <TableHead>Versão do Termo</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                          Nenhum consentimento registrado
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="auditoria">
            <Card>
              <CardHeader>
                <CardTitle>Log de Auditoria</CardTitle>
                <CardDescription>Registro de todas as alterações no sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="audit-start">Data Início</Label>
                    <Input id="audit-start" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audit-end">Data Fim</Label>
                    <Input id="audit-end" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audit-user">Usuário</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audit-action">Ação</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todas">Todas</SelectItem>
                        <SelectItem value="create">Criação</SelectItem>
                        <SelectItem value="update">Atualização</SelectItem>
                        <SelectItem value="delete">Exclusão</SelectItem>
                        <SelectItem value="login">Login</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button>Filtrar</Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar Log
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data/Hora</TableHead>
                      <TableHead>Usuário</TableHead>
                      <TableHead>Ação</TableHead>
                      <TableHead>Módulo</TableHead>
                      <TableHead>Detalhes</TableHead>
                      <TableHead>IP</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Nenhum registro de auditoria encontrado
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
