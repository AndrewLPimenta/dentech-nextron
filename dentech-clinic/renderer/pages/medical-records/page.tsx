"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Plus, FileText, Upload, AlertTriangle, Camera } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function MedicalRecordsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPatient, setSelectedPatient] = useState("")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Prontuário Odontológico Eletrônico</h1>
            <p className="text-muted-foreground">Histórico clínico e anamnese dos pacientes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Lista de Pacientes */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Pacientes</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar paciente..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-center py-8 text-muted-foreground">Nenhum paciente encontrado</div>
              </div>
            </CardContent>
          </Card>

          {/* Prontuário */}
          <div className="lg:col-span-3">
            {!selectedPatient ? (
              <Card>
                <CardContent className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Selecione um Paciente</h3>
                    <p className="text-muted-foreground">
                      Escolha um paciente na lista ao lado para visualizar o prontuário
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Tabs defaultValue="anamnese" className="space-y-4">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="anamnese">Anamnese</TabsTrigger>
                  <TabsTrigger value="odontograma">Odontograma</TabsTrigger>
                  <TabsTrigger value="tratamento">Tratamento</TabsTrigger>
                  <TabsTrigger value="prescricoes">Prescrições</TabsTrigger>
                  <TabsTrigger value="imagens">Imagens</TabsTrigger>
                  <TabsTrigger value="laudos">Laudos</TabsTrigger>
                </TabsList>

                <TabsContent value="anamnese">
                  <Card>
                    <CardHeader>
                      <CardTitle>Anamnese e Histórico Clínico</CardTitle>
                      <CardDescription>Informações sobre a saúde geral e histórico odontológico</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Alertas */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          <h4 className="font-semibold text-yellow-800">Alertas Importantes</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="diabetes" />
                            <Label htmlFor="diabetes">Diabetes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="hipertensao" />
                            <Label htmlFor="hipertensao">Hipertensão</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="gestacao" />
                            <Label htmlFor="gestacao">Gestação</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="alergias" />
                            <Label htmlFor="alergias">Alergias</Label>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="queixa-principal">Queixa Principal</Label>
                          <Textarea id="queixa-principal" placeholder="Descreva a queixa principal do paciente..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="historia-doenca">História da Doença Atual</Label>
                          <Textarea id="historia-doenca" placeholder="Histórico da condição atual..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="historia-medica">História Médica</Label>
                          <Textarea id="historia-medica" placeholder="Histórico médico geral..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="medicamentos">Medicamentos em Uso</Label>
                          <Textarea id="medicamentos" placeholder="Liste os medicamentos atuais..." />
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button>Salvar Anamnese</Button>
                        <Button variant="outline">Imprimir</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="odontograma">
                  <Card>
                    <CardHeader>
                      <CardTitle>Odontograma</CardTitle>
                      <CardDescription>Mapeamento visual da condição dentária</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <div className="text-muted-foreground">
                          <FileText className="h-16 w-16 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Odontograma Interativo</h3>
                          <p>Interface para marcação de condições dentárias será implementada aqui</p>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button>Salvar Odontograma</Button>
                        <Button variant="outline">Imprimir</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="tratamento">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Plano de Tratamento</CardTitle>
                          <CardDescription>Procedimentos planejados e realizados</CardDescription>
                        </div>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Novo Procedimento
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>Procedimento</TableHead>
                            <TableHead>Dente</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Profissional</TableHead>
                            <TableHead>Ações</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                              Nenhum procedimento registrado
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="prescricoes">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Prescrições</CardTitle>
                          <CardDescription>Medicamentos e exames prescritos</CardDescription>
                        </div>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Nova Prescrição
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Descrição</TableHead>
                            <TableHead>Profissional</TableHead>
                            <TableHead>Ações</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                              Nenhuma prescrição registrada
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="imagens">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Imagens e Radiografias</CardTitle>
                          <CardDescription>Arquivo de imagens do paciente</CardDescription>
                        </div>
                        <Button>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload de Imagem
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">Nenhuma imagem carregada</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="laudos">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Laudos e Diagnósticos</CardTitle>
                          <CardDescription>Relatórios e diagnósticos clínicos</CardDescription>
                        </div>
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Novo Laudo
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Diagnóstico</TableHead>
                            <TableHead>Profissional</TableHead>
                            <TableHead>Ações</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                              Nenhum laudo registrado
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
