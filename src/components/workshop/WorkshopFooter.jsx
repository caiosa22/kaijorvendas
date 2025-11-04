import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

function WorkshopFooter() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-black text-white mb-3">
              Ainda Tem{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Dúvidas?
              </span>
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está pronta para te ajudar. Entre em contato!
            </p>
            
            <div className="flex justify-center">
              <a
                href="https://wa.me/77988328361?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20workshop%20Black%20Varejo%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                KAIJOR
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Kaijor Soluções Digitais LT
            </p>
            <p className="text-gray-500 text-xs">
              CNPJ: 57.846.368/0001-92
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kaijor. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Workshop Black Varejo IA - Todos os materiais são exclusivos e protegidos por direitos autorais.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default WorkshopFooter

