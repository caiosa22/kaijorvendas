import { motion } from 'framer-motion'
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react'

function Pricing() {
  const benefits = [
    'Acesso completo à plataforma',
    '100 conversas IA/dia GRÁTIS',
    'Créditos de IA por 1 ano (R$1.200)',
    'Mentoria exclusiva',
    'Suporte prioritário',
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-red-500 text-white rounded-full font-bold mb-4 animate-pulse">
            ⚠️ OFERTA LIMITADA - PRIMEIRAS 100 VAGAS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Isso Deveria Custar uma Fortuna
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mas você não vai pagar nem metade disso hoje.
          </p>
        </motion.div>

        {/* Price Anchoring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Valor Real</p>
              <p className="text-2xl line-through text-red-500">R$ 1.200</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Metade</p>
              <p className="text-2xl line-through text-orange-500">R$ 600</p>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Justo</p>
              <p className="text-2xl line-through text-yellow-500">R$ 397</p>
            </div>
          </div>
        </motion.div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Ribbon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="px-8 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl">
                SEU PREÇO HOJE
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-primary-500">
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4">
                    <span className="text-6xl font-bold text-primary-600">
                      R$ 197
                    </span>
                    <span className="text-2xl text-gray-600">/mês</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Por menos que um jantar fora
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Highlight Box */}
                <div className="mb-8 p-6 gradient-blue rounded-2xl text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-8 h-8 text-yellow-300" />
                    <h3 className="text-2xl font-bold">BÔNUS ESPECIAL</h3>
                  </div>
                  <p className="text-lg mb-2">
                    Nós pagamos os créditos de IA pra você!
                  </p>
                  <p className="text-3xl font-bold text-yellow-300">
                    R$ 1.200 em créditos GRÁTIS
                  </p>
                  <p className="text-sm mt-2 opacity-90">
                    Até 100 atendimentos IA por dia, por 1 ano completo
                  </p>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://pay.kiwify.com.br/IVbCqZJ"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-6 bg-primary-600 hover:bg-primary-700 text-white text-center text-2xl font-bold rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Garantir Minha Vaga Agora
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 gradient-blue-light opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <p className="text-center mt-6 text-sm text-gray-500">
                  ✓ Sem compromisso • ✓ 7 dias garantia incondicional • ✓ Cancele quando quiser
                </p>
              </div>
            </div>
          </motion.div>

          {/* Urgency Alert */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-block p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-red-500 shadow-xl">
              <p className="text-lg font-bold text-gray-900 mb-2">
                ⏰ Sem Aviso Prévio
              </p>
              <p className="text-gray-700">
                Quando essas 100 vagas se esgotarem, o preço volta ao normal.
                <br />
                <span className="font-bold text-red-600">Sem exceções.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

