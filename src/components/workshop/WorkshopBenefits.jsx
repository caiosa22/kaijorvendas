import { motion } from 'framer-motion'
import { Image, MessageCircle, TrendingUp, Clock, Zap, DollarSign } from 'lucide-react'

function WorkshopBenefits() {
  const problems = [
    {
      icon: '😰',
      title: 'Concorrência Acirrada',
      description: 'Milhares de lojistas competindo pelos mesmos clientes na Black Friday'
    },
    {
      icon: '⏰',
      title: 'Pouco Tempo',
      description: 'Não dá tempo de criar todo o conteúdo necessário para as campanhas'
    },
    {
      icon: '💰',
      title: 'Vendas Perdidas',
      description: 'Cliente desiste por falta de atendimento rápido no WhatsApp'
    },
    {
      icon: '😵',
      title: 'Sobrecarga de Trabalho',
      description: 'Você fica sobrecarregado tentando fazer tudo sozinho'
    }
  ]

  const solutions = [
    {
      icon: Image,
      number: '01',
      title: 'Agente Gerador de Imagens IA',
      features: [
        'Cria imagens profissionais em segundos',
        'Gera posts prontos para redes sociais',
        'Cria anúncios otimizados para venda',
        'Estilos personalizados para sua marca',
        'Sem necessidade de designer'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      number: '02',
      title: 'Agente Atendente WhatsApp',
      features: [
        'Atende clientes 24 horas por dia',
        'Responde dúvidas automaticamente',
        'Envia catálogos de produtos',
        'Pega dados para follow-up',
        'Converte visitantes em clientes'
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Horas por dia que você ganha para focar em estratégia'
    },
    {
      icon: TrendingUp,
      title: 'Mais Vendas',
      description: 'Aumente suas conversões em até 300% na Black Friday'
    },
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'Tudo configurado em menos de 1 hora'
    },
    {
      icon: DollarSign,
      title: 'ROI Garantido',
      description: 'Retorno sobre investimento já na primeira venda'
    }
  ]

  return (
    <>
      {/* Problems Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              A Cruda Realidade da{' '}
              <span className="text-orange-500">Black Friday</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quem nunca passou por essa dor, não sabe o que é Black Friday de verdade
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-500 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              A{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Solução Definitiva
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Você vai aprender a usar 2 agentes de IA poderosos que vão transformar sua Black Friday
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Agente de Imagens - Com Galeria */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl blur-xl from-purple-500 to-pink-500" />
              
              <div className="relative bg-gradient-to-br from-gray-800 to-black border border-gray-700 rounded-3xl p-8 h-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                  <span className="text-2xl font-black text-white">01</span>
                </div>

                {/* Image Gallery */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="grid grid-cols-3 gap-2">
                    <img
                      src="https://i.postimg.cc/KYJGRvqc/image1.png"
                      alt="Exemplo de criação IA 1"
                      className="w-full aspect-square object-cover rounded-lg border-2 border-purple-500/30 hover:border-purple-500 transition-colors"
                    />
                    <img
                      src="https://i.postimg.cc/mD7XJQSt/image2.png"
                      alt="Exemplo de criação IA 2"
                      className="w-full aspect-square object-cover rounded-lg border-2 border-purple-500/30 hover:border-purple-500 transition-colors"
                    />
                    <img
                      src="https://i.postimg.cc/TPQ8yWmk/image3.png"
                      alt="Exemplo de criação IA 3"
                      className="w-full aspect-square object-cover rounded-lg border-2 border-purple-500/30 hover:border-purple-500 transition-colors"
                    />
                  </div>
                </motion.div>

                {/* Icon */}
                <Image className="w-12 h-12 mb-6 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text" />

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-6">Agente Gerador de Imagens IA</h3>

                {/* Features */}
                <ul className="space-y-3">
                  {solutions[0].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Agente WhatsApp - Sem Galeria */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl blur-xl from-green-500 to-teal-500" />
              
              <div className="relative bg-gradient-to-br from-gray-800 to-black border border-gray-700 rounded-3xl p-8 h-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6">
                  <span className="text-2xl font-black text-white">02</span>
                </div>

                {/* Icon */}
                <MessageCircle className="w-12 h-12 mb-6 text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text" />

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-6">Agente Atendente WhatsApp</h3>

                {/* Features */}
                <ul className="space-y-3">
                  {solutions[1].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bonus Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/50 rounded-2xl px-8 py-4">
              <span className="text-3xl">🎁</span>
              <div className="text-left">
                <p className="font-bold text-white">Bônus Especial</p>
                <p className="text-gray-300 text-sm">Templates prontos para começar a usar na hora</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              O Que Você{' '}
              <span className="text-yellow-500">Vai Ganhar</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-4 mx-auto">
                  <benefit.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkshopBenefits

