import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
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
        <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg shadow-orange-500/50"
            >
              <Sparkles className="w-5 h-5" />
              LOJAS DE VAREJO E E-COMMERCE
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block">Workshop</span>
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Black Varejo IA
              </span>
              <span className="inline-block text-base md:text-lg mt-4 text-orange-400 whitespace-nowrap">
                Ao Vivo • 12 de Novembro • 19h
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Aprenda a usar <strong className="text-white">Inteligência Artificial</strong> para 
              vender <strong className="text-orange-400">muito mais</strong> nessa Black Friday
            </p>

            {/* Pricing Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-3xl font-black text-white mb-6 text-center"
            >
              Ingressos apenas <span className="text-orange-400">R$ 10</span>
            </motion.h2>

            {/* CTA Button */}
            <div className="flex justify-center mb-6">
              <motion.a
                href="#ofertas"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('ofertas')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-base md:text-lg rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 whitespace-nowrap"
              >
                GARANTIR MINHA VAGA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <p className="text-center text-gray-400 text-sm">
              ✓ Garantia de aprendizado • ✓ Certificado ao final
            </p>
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

