import { motion } from 'framer-motion'
import { ShoppingCart, Users, Clock, Check, ArrowRight } from 'lucide-react'

function WorkshopCTA() {
  const guarantees = [
    'Acesso garantido ao workshop ao vivo',
    'Suporte durante todo o processo',
    'Gravação disponível por 30 dias',
    'Certificado digital ao final'
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-black text-sm mb-8 shadow-lg"
          >
            <Clock className="w-5 h-5" />
            VAGAS LIMITADAS • GARANTA JÁ
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Sua{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Black Friday
              </span>
              <br />
              Começa Aqui
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Não deixe seus concorrentes venderem mais que você. Comece hoje a dominar a IA
            </p>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 mb-12"
          >
            {guarantees.map((guarantee, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-4"
              >
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{guarantee}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="https://pay.kiwify.com.br/YuhVoH8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-xl rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <ShoppingCart className="w-7 h-7" />
              Individual - R$ 10
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://pay.kiwify.com.br/gn2LukF"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 border-2 border-yellow-400 w-full sm:w-auto justify-center"
            >
              <Users className="w-7 h-7" />
              Duplo - R$ 15
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-gray-400 text-lg">
              ⚡ <strong className="text-white">Comece agora</strong> e esteja pronto para a Black Friday
            </p>
            <p className="text-gray-500 text-sm">
              Pagamento 100% seguro via Kiwify • Suporte garantido
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkshopCTA

