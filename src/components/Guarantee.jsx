import { motion } from 'framer-motion'
import { Shield, Clock, ArrowRight } from 'lucide-react'

function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 md:p-12 rounded-3xl border-4 border-primary-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Icon */}
              <div className="text-center md:text-left">
                <div className="inline-block mb-6">
                  <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto md:mx-0 shadow-2xl">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  7 Dias de
                  <span className="block text-primary-600">Garantia Incondicional</span>
                </h2>
              </div>

              {/* Right Side - Details */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <Clock className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Teste Grátis por 7 Dias
                      </h3>
                      <p className="text-gray-700">
                        Entre na plataforma, configure, teste com seus clientes. 
                        Veja os resultados com seus próprios olhos.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Assumimos Todo o Risco
                      </h3>
                      <p className="text-gray-700">
                        Se em 7 dias você não perceber que este sistema vai poupar dezenas 
                        de horas e gerar milhares em vendas extras, nós devolvemos 100% do seu investimento.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-2xl font-bold text-gray-900 mb-4">
              A decisão está nas suas mãos. A oportunidade está aqui.
            </p>
            <p className="text-xl text-primary-600 font-semibold mb-8">
              E o risco é zero.
            </p>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
            >
              Garantir meu acesso
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Guarantee

