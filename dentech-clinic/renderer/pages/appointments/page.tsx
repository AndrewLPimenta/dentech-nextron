"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { Plus } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui será integrada a API para salvar agendamento
    setShowForm(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Agendamento e Agenda Inteligente</h1>
            <p className="text-muted-foreground">Gerencie consultas e horários</p>
          </div>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nova Consulta
          </Button>
        </div>

        <Tabs defaultValue="agenda" className="space-y-4">
          <TabsList>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="consultas">Lista de Consultas</TabsTrigger>
            <TabsTrigger value="bloqueios">Bloqueios</TabsTrigger>
            {showForm && <TabsTrigger value="form">Nova Consulta</TabsTrigger>}
          </TabsList>
          <TabsContent value="agenda">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">Calendário</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center w-full h-[auto]">
                    <div className="flex justify-center"> 
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-full max-w-md" />
                    </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Agenda do Dia - {date?.toLocaleDateString("pt-BR")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {/* Horários do dia */}
                    <div className="grid gap-2">
                      {Array.from({ length: 10 }, (_, i) => {
                        const hour = 8 + i
                        return (
                          <div key={hour} className="flex items-center space-x-2 p-3 border rounded-lg">
                            <div className="w-16 text-sm font-medium">{hour.toString().padStart(2, "0")}:00</div>
                            <div className="flex-1 text-muted-foreground">Horário disponível</div>
                            <Button size="sm" variant="outline">
                              Agendar
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="consultas">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Consultas</CardTitle>
                <CardDescription>Todas as consultas agendadas</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data/Hora</TableHead>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Profissional</TableHead>
                      <TableHead>Procedimento</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Nenhuma consulta agendada
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bloqueios">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Bloqueios de Horários</CardTitle>
                    <CardDescription>Feriados, férias e indisponibilidades</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Bloqueio
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data Início</TableHead>
                      <TableHead>Data Fim</TableHead>
                      <TableHead>Profissional</TableHead>
                      <TableHead>Motivo</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        Nenhum bloqueio cadastrado
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {showForm && (
            <TabsContent value="form">
              <Card>
                <CardHeader>
                  <CardTitle>Agendar Nova Consulta</CardTitle>
                  <CardDescription>Preencha os dados da consulta</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient">Paciente *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o paciente" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paciente1">Paciente 1</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="professional">Profissional *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o profissional" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dentista1">Dr. João Silva</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Data *</Label>
                        <Input id="date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Horário *</Label>
                        <Input id="time" type="time" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="procedure">Procedimento</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o procedimento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consulta">Consulta</SelectItem>
                            <SelectItem value="limpeza">Limpeza</SelectItem>
                            <SelectItem value="restauracao">Restauração</SelectItem>
                            <SelectItem value="extracao">Extração</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duração (minutos)</Label>
                        <Input id="duration" type="number" placeholder="60" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Observações</Label>
                      <Textarea id="notes" placeholder="Observações sobre a consulta..." />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Confirmações</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="whatsapp" />
                          <Label htmlFor="whatsapp">Confirmar por WhatsApp</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="sms" />
                          <Label htmlFor="sms">Confirmar por SMS</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="email" />
                          <Label htmlFor="email">Confirmar por E-mail</Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button type="submit">Agendar Consulta</Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
