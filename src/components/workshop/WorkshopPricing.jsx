import { motion } from 'framer-motion'
import { Check, ShoppingCart, Users, Sparkles } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

function WorkshopPricing() {
  const plans = [
    {
      name: 'Ingresso Individual',
      price: 'R$ 10',
      link: 'https://pay.kiwify.com.br/YuhVoH8',
      icon: ShoppingCart,
      features: [
        'Acesso ao workshop ao vivo',
        '2 Agentes de IA práticos',
        'Templates exclusivos',
        'Suporte durante o workshop',
        'Certificado digital',
        'Gravação disponível por 30 dias'
      ],
      gradient: 'from-orange-500 to-red-600',
      isPopular: false
    },
    {
      name: 'Ingresso Duplo',
      price: 'R$ 15',
      originalPrice: 'R$ 20',
      link: 'https://pay.kiwify.com.br/gn2LukF',
      icon: Users,
      features: [
        'Tudo do plano Individual',
        'Você + 1 Sócio convidado',
        '2 Acessos separados',
        '2 Certificados digitais',
        'Prioridade no suporte',
        'Material bônus extra'
      ],
      gradient: 'from-yellow-500 to-orange-600',
      isPopular: true
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            OFERTA POR TEMPO LIMITADO
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Escolha Seu{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Plano
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Preços especiais para essa Black Friday. Não perca essa oportunidade!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {plan.isPopular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full font-black text-sm shadow-lg z-10"
                >
                  ✨ MAIS POPULAR
                </motion.div>
              )}

              <div className={`relative bg-gradient-to-br from-gray-800 to-black border-2 rounded-3xl p-8 h-full transition-all duration-300 ${
                plan.isPopular ? 'border-yellow-500 shadow-2xl shadow-yellow-500/20' : 'border-gray-700'
              }`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-2xl mb-6`}>
                  <plan.icon className="w-10 h-10 text-black" />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-black text-white mb-4">{plan.name}</h3>

                {/* Price */}
                <div className="mb-8">
                  {plan.originalPrice && (
                    <p className="text-gray-500 line-through text-lg mb-2">{plan.originalPrice}</p>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-green-400 text-sm font-bold">
                        Economia de {plan.originalPrice.replace('R$ ', '')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href={plan.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r ${plan.gradient} text-black font-black text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Garantir Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/50 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-white mb-4">
              💰 Oferta Vale Mais do que Você Pensa
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Por apenas <strong className="text-yellow-400">R$ 10 ou R$ 15</strong>, você vai aprender 
              ferramentas que podem gerar <strong className="text-white">milhares em vendas extras</strong> na 
              Black Friday. É um investimento que se paga na primeira venda!
            </p>
          </div>
        </motion.div>

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            ✓ Pagamento 100% seguro via Kiwify • ✓ Suporte garantido
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkshopPricing

