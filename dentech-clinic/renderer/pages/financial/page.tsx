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
import { Plus, DollarSign, Receipt, TrendingUp, TrendingDown, Download, Eye } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function FinancialPage() {
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui será integrada a API
    setShowServiceForm(false)
    setShowPaymentForm(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Controle Financeiro</h1>
            <p className="text-muted-foreground">Gerencie receitas, despesas e faturamento</p>
          </div>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">R$ -</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contas a Receber</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ -</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contas a Pagar</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">R$ -</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
              <Receipt className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">R$ -</div>
              <p className="text-xs text-muted-foreground">Aguardando dados da API</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="servicos" className="space-y-4">
          <TabsList>
            <TabsTrigger value="servicos">Serviços/Procedimentos</TabsTrigger>
            <TabsTrigger value="receber">Contas a Receber</TabsTrigger>
            <TabsTrigger value="pagar">Contas a Pagar</TabsTrigger>
            <TabsTrigger value="recibos">Recibos</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="servicos">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Cadastro de Serviços/Procedimentos</CardTitle>
                    <CardDescription>Gerencie os valores dos procedimentos</CardDescription>
                  </div>
                  <Button onClick={() => setShowServiceForm(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Serviço
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showServiceForm ? (
                  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service-name">Nome do Serviço *</Label>
                        <Input id="service-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service-value">Valor *</Label>
                        <Input id="service-value" type="number" step="0.01" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service-category">Categoria</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="preventivo">Preventivo</SelectItem>
                            <SelectItem value="restaurador">Restaurador</SelectItem>
                            <SelectItem value="cirurgico">Cirúrgico</SelectItem>
                            <SelectItem value="ortodontia">Ortodontia</SelectItem>
                            <SelectItem value="estetico">Estético</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button type="submit">Salvar Serviço</Button>
                      <Button type="button" variant="outline" onClick={() => setShowServiceForm(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                ) : null}

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                        Nenhum serviço cadastrado
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="receber">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Contas a Receber</CardTitle>
                    <CardDescription>Controle de pagamentos pendentes</CardDescription>
                  </div>
                  <Button onClick={() => setShowPaymentForm(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Conta
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showPaymentForm ? (
                  <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient-select">Paciente *</Label>
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
                        <Label htmlFor="service-select">Serviço *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consulta">Consulta</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="total-value">Valor Total *</Label>
                        <Input id="total-value" type="number" step="0.01" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="due-date">Data de Vencimento *</Label>
                        <Input id="due-date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payment-method">Forma de Pagamento</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dinheiro">Dinheiro</SelectItem>
                            <SelectItem value="pix">PIX</SelectItem>
                            <SelectItem value="cartao-credito">Cartão de Crédito</SelectItem>
                            <SelectItem value="cartao-debito">Cartão de Débito</SelectItem>
                            <SelectItem value="convenio">Convênio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="installments">Parcelas</Label>
                        <Input id="installments" type="number" min="1" placeholder="1" />
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button type="submit">Salvar Conta</Button>
                      <Button type="button" variant="outline" onClick={() => setShowPaymentForm(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                ) : null}

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Nenhuma conta a receber
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pagar">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Contas a Pagar</CardTitle>
                    <CardDescription>Controle de despesas e fornecedores</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Despesa
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Fornecedor</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Nenhuma conta a pagar
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recibos">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recibos e Faturas</CardTitle>
                    <CardDescription>Geração e controle de documentos fiscais</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Gerar Recibo
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Número</TableHead>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        Nenhum recibo gerado
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relatorios">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios Financeiros</CardTitle>
                <CardDescription>Análises e relatórios por período</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Data Início</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">Data Fim</Label>
                    <Input id="end-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Tipo de Relatório</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="faturamento">Faturamento</SelectItem>
                        <SelectItem value="recebimentos">Recebimentos</SelectItem>
                        <SelectItem value="despesas">Despesas</SelectItem>
                        <SelectItem value="lucro">Lucro/Prejuízo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Gerar Relatório
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="text-muted-foreground">
                    <Receipt className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Relatórios Financeiros</h3>
                    <p>Selecione o período e tipo de relatório para visualizar os dados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
