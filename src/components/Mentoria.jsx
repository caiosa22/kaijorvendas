import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function Mentoria() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="relative w-full max-w-xl mx-auto">
              <img
                src="https://i.postimg.cc/Y9XpBVmF/Co-pia-de-Solucoes-de-IA-2-pdf-1.png"
                alt="Caio Santos - Mentoria em IA"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-semibold mb-4">
              Mentoria com Caio Santos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estratégia de IA aplicada ao seu negócio
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-6">
              <p>
                Especialista em Inteligência Artificial e Automações para empresas, com mais de
                <span className="font-semibold"> 7 anos</span> de experiência em tecnologia e marketing.
              </p>
              <p>
                Certificado em IA por Harvard e cursando Análise e Desenvolvimento de Sistemas.
              </p>
              <p>
                Ao longo da carreira, ajudou empresas a <span className="font-semibold">otimizar processos</span>,
                <span className="font-semibold"> aumentar a produtividade</span> e
                <span className="font-semibold"> escalar resultados</span> através da implementação estratégica de soluções inteligentes.
              </p>
            </div>

            <motion.a
              href="https://pay.kiwify.com.br/IVbCqZJ"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              Quero minha mentoria agora
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mentoria


