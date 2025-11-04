import { motion } from 'framer-motion'
import { ShoppingCart, Sparkles, Users } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

function WorkshopHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23FF6B00' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg shadow-orange-500/50"
            >
              <Sparkles className="w-5 h-5" />
              OFERTA BLACK FRIDAY
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block">Workshop Exclusivo</span>
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Black Varejo IA
              </span>
              <span className="block text-2xl md:text-3xl mt-4 text-orange-400">
                Ao Vivo • 12 de Novembro • 19h
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Aprenda a usar <strong className="text-white">2 Agentes de IA</strong> para 
              vender <strong className="text-orange-400">muito mais</strong> nessa Black Friday
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {[
                '📸 Gerador de Imagens para posts e anúncios',
                '💬 Atendente no WhatsApp 24/7',
                '🎯 Aumento real de vendas e conversões'
              ].map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center text-white font-medium"
                >
                  <span className="text-2xl mr-3">{feature.split(' ')[0]}</span>
                  <span>{feature.split(' ').slice(1).join(' ')}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <motion.a
                href="https://pay.kiwify.com.br/YuhVoH8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                <ShoppingCart className="w-6 h-6" />
                Individual - R$ 10
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://pay.kiwify.com.br/gn2LukF"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 border-2 border-yellow-400"
              >
                <Users className="w-6 h-6" />
                Duplo - R$ 15
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <p className="text-center sm:text-left text-gray-400 text-sm">
              ✓ Garantia de aprendizado • ✓ Certificado ao final
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-3xl blur-3xl transform scale-110" />
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-3xl p-2 shadow-2xl">
                <img
                  src="https://i.postimg.cc/J0Q4wy2m/Co-pia-de-Solucoes-de-IA-2-pdf.png"
                  alt="Caio Santos - Especialista em IA"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-full font-bold shadow-lg"
              >
                💎 Certificado Harvard
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-orange-400"
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WorkshopHero

