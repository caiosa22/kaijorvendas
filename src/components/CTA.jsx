import { motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

function CTA() {
  const included = [
    'Acesso completo à plataforma',
    'Créditos IA por 1 ano (até 100 atend/dia)',
    'Mentoria exclusiva',
    'Suporte prioritário',
  ]

  const notIncluded = [
    'Conversas travadas',
    'Desorganização no atendimento',
    'Custos altos sem resultado',
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='60' height='60' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Você Tem Duas Escolhas
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Continuar como está ou transformar tudo ainda hoje
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Don't Include Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-300" />
                <h3 className="text-2xl font-bold">Continuar Como Está</h3>
              </div>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70">
                    <X className="w-5 h-5 text-red-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Include Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-yellow-400"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-yellow-300" />
                <h3 className="text-2xl font-bold">Transformar Hoje</h3>
              </div>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                O Próximo Passo É Muito Simples
              </h3>
              <div className="flex flex-col items-start gap-4 max-w-md mx-auto">
                <div className="flex items-center gap-3 text-left w-full">
                  <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">1</span>
                  <span>Clique no botão abaixo</span>
                </div>
                <div className="flex items-center gap-3 text-left w-full">
                  <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">2</span>
                  <span>Preencha seus dados</span>
                </div>
                <div className="flex items-center gap-3 text-left w-full">
                  <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">3</span>
                  <span>Receba o acesso por email</span>
                </div>
                <div className="flex items-center gap-3 text-left w-full">
                  <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">4</span>
                  <span>Configure e comece a vender</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <a
              href="#"
              className="inline-block px-12 py-6 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-2xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Clique Aqui e Garanta Seu Acesso Agora
            </a>
            <p className="mt-4 text-white/80 text-sm">
              Clique antes que as 100 vagas se esgotem
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

