import { motion, AnimatePresence } from 'framer-motion'
import { Image, MessageCircle, TrendingUp, Clock, Zap, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

function WorkshopBenefits() {
  // Galeria de imagens do Agente de IA
  const galleryImages = [
    'https://i.postimg.cc/44tGsqnK/Sem-Ti-tulo-2.png',
    'https://i.postimg.cc/15QQtBNN/tenis-1.png',
    'https://i.postimg.cc/3JTTR1Dp/Tenis-2.png'
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000) // Muda a cada 4 segundos

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

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
              A verdadeira realidade da{' '}
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
      <section className="py-20 bg-gray-900 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 max-w-7xl w-full">
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

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto w-full">
            {/* Agente de Imagens - Com Galeria */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl blur-xl from-purple-500 to-pink-500" />
              
              <div className="relative bg-gradient-to-br from-gray-800 to-black border border-gray-700 rounded-3xl p-4 md:p-6 lg:p-8 h-full overflow-hidden w-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-3">
                  <span className="text-2xl font-black text-white">01</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-6">Agente Gerador de Imagens IA</h3>

                {/* Image Gallery Carousel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 relative w-full"
                >
                  <div className="relative overflow-hidden rounded-xl border-2 border-purple-500/30 bg-gray-900/50 w-full">
                    {/* Images Container */}
                    <div className="relative w-full bg-gray-800 aspect-[4/3] md:aspect-video">
                      <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={galleryImages[currentImageIndex]}
                            alt={`Exemplo de criação IA ${currentImageIndex + 1}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="max-w-[calc(100%-1rem)] max-h-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] md:max-h-[calc(100%-2rem)] w-auto h-auto object-contain"
                            loading="lazy"
                          />
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-500 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg backdrop-blur-sm"
                      aria-label="Imagem anterior"
                      type="button"
                    >
                      <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600/90 hover:bg-purple-500 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg backdrop-blur-sm"
                      aria-label="Próxima imagem"
                      type="button"
                    >
                      <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                    </button>

                    {/* Dots Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? 'bg-purple-500 w-8 h-2'
                              : 'bg-white/50 hover:bg-white/70 w-2 h-2'
                          }`}
                          aria-label={`Ir para imagem ${index + 1}`}
                          type="button"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-3">
                  <span className="text-2xl font-black text-white">02</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-6">Agente Atendente WhatsApp</h3>

                {/* GIF do Agente de Atendimento */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 relative w-full"
                >
                  <div className="relative overflow-hidden rounded-xl border-2 border-green-500/30 bg-gray-900/50 w-full">
                    <div className="relative w-full bg-gray-800 aspect-[4/3] md:aspect-video">
                      <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
                        <img
                          src="https://kaijor.com.br/wp-content/uploads/2025/11/copy_B68E3136-B7A6-4385-ACA7-ABE7B6818F63.gif"
                          alt="Demonstração do Agente Atendente WhatsApp"
                          className="max-w-[calc(100%-1rem)] max-h-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] md:max-h-[calc(100%-2rem)] w-auto h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

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

          {/* Bônus Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
              🎁 <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Bônus Exclusivos</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Bônus 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-800 to-black border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-4">
                  <span className="text-xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-black text-white mb-3">10 Melhores Ferramentas de IA para Empresas</h4>
                <p className="text-gray-400">Lista completa com as ferramentas mais poderosas e como usá-las no seu negócio</p>
              </motion.div>

              {/* Bônus 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-800 to-black border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mb-4">
                  <span className="text-xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-black text-white mb-3">Script de Alta Conversão no WhatsApp</h4>
                <p className="text-gray-400">Scripts prontos para usar no seu atendimento e aumentar suas vendas imediatamente</p>
              </motion.div>
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

