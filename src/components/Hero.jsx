import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

function Hero() {
  useEffect(() => {
    const existing = document.querySelector('script[data-vturb-player="6902e6d9d7ac47da5676541e"]')
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://scripts.converteai.net/d79b1e90-9b25-4f9c-ab80-515c305c96fc/players/6902e6d9d7ac47da5676541e/v4/player.js'
      s.async = true
      s.setAttribute('data-vturb-player', '6902e6d9d7ac47da5676541e')
      document.head.appendChild(s)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-8 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-2 pb-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <h1 className="text-lg leading-tight text-white mb-3 text-balance">
            <span className="block">Descubra Como Qualquer Negócio Pode Ter um</span>
            <span className="block mt-1 text-yellow-300">
              "Funcionário de IA" no WhatsApp
            </span>
            <span className="block mt-1">
              de Graça, em Minutos e Sem Saber Nada de Tecnologia
            </span>
          </h1>

          {/* Video Section - Vertical 9:16 */}
          <div className="mb-3 relative w-full max-w-[400px] mx-auto">
            <div className="relative aspect-[9/16] w-full">
              <vturb-smartplayer id="vid-6902e6d9d7ac47da5676541e" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }} />
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-3 md:px-12 md:py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm md:text-lg"
            >
              Garantir o meu acesso
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/80 text-xs">
              ✓ Sem compromisso • ✓ 7 dias de garantia
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-3 flex flex-wrap justify-center items-center gap-3 text-white/80 text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="text-yellow-300 text-xl">★</span>
              <span>Centenas de Empresários Já Usam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 text-xl">✓</span>
              <span>IA 100% Integrada</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60"
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

