import { motion } from 'framer-motion'
import { Users, TrendingUp, Bot, Sparkles, ArrowRight } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: Users,
      title: 'Gestão de Pessoas e Comunicação',
      subtitle: 'Multi-atendimento Inteligente',
      points: [
        'Diversos atendentes, números e setores',
        'Painel visual de performance em tempo real',
        'Acompanhamento de volume de conversas',
        'Visualização de todas as mensagens',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Vendas com IA',
      subtitle: 'Rastreio e Distribuição Automática',
      points: [
        'Rastreio automático de origem de leads',
        'Roleta inteligente de distribuição',
        'CRM Kanban para etapas de venda',
        'Organização visual completa',
      ],
    },
    {
      icon: Bot,
      title: 'Inteligência Artificial 100% Integrada',
      subtitle: 'Potência Sem Limites',
      points: [
        'Análise de atendimento com métricas',
        'Agentes de texto 24/7 com IA',
        'Agente social media para postagens',
        'Entendimento de áudios, arquivos e imagens',
      ],
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Sparkles className="w-12 h-12 text-primary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dividido em 3 Áreas Poderosas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que sua empresa precisa para transformar vendas em vendas automatizadas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {index + 1} - {feature.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-6">{feature.subtitle}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="text-primary-500 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Jarvis Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative gradient-blue p-8 rounded-3xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                animation: 'pulse 4s ease-in-out infinite',
              }} />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block mb-4">
                <Sparkles className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Em Breve: <span className="text-yellow-300">Jarvis</span>
              </h3>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Uma inteligência artificial que sabe tudo sobre sua empresa. 
                Capaz de analisar tendências e sugerir estratégias com base em dados reais.
              </p>
              <div className="inline-block px-6 py-3 bg-yellow-300 text-gray-900 font-bold rounded-full mb-6">
                🚀 Lançamento em breve
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://pay.kiwify.com.br/IVbCqZJ"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-300"
          >
            Quero Ter Isso Para Minha Empresa
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

