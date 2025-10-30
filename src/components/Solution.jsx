import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'

function Solution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
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
              Imagine Ter o Controle Total Sobre Tudo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma plataforma que centraliza e potencializa toda a operação comercial da sua empresa, 
              colocando a IA pra trabalhar junto com seus colaboradores.
            </p>
          </motion.div>

          {/* Main Solution Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-blue rounded-3xl opacity-10 blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 p-8 md:p-12 rounded-3xl text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      KAIJOR
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Agentes de IA Personalizados
                  </h3>
                  <p className="text-xl mb-6 text-white/90">
                    CRM completo e ecossistema operacional unindo tecnologia com eficiência para 
                    vendas, atendimento e gestão.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                      <span>Agentes de IA que trabalham 24/7</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                      <span>CRM Kanban para organizar vendas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                      <span>Análise de atendimento com IA</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                      <span>Agente social media integrado</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  {/* Illustration Placeholder */}
                  <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">
                        Ecossistema completo para sua empresa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Centralização total da operação',
              'IA trabalhando em harmonia com sua equipe',
              'Controle visual em tempo real',
              'Simplicidade e eficiência unidas',
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
            >
              Quero Acesso Completamente Grátis
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Solution

