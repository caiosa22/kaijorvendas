import { motion } from 'framer-motion'
import { MessageCircleX, DollarSign, Users, ArrowRight } from 'lucide-react'

function Problems() {
  const problems = [
    {
      icon: MessageCircleX,
      title: 'Chatbots Frios e Travados',
      description: 'Respostas robóticas, sem entender áudios, arquivos ou qualificar clientes adequadamente.',
    },
    {
      icon: Users,
      title: 'Desorganização Total',
      description: 'Alto volume de mensagens, equipe perdida, conversas misturadas e follow-up que nunca acontece.',
    },
    {
      icon: DollarSign,
      title: 'Custos Altos, Baixos Resultados',
      description: 'Você investiu tempo, dinheiro e energia, mas o resultado não corresponde ao esforço.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Você já passou por <span className="text-red-600">alguma dessas situações?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Frustração, cansaço e dinheiro jogado fora. Não é assim que deveria ser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Tudo isso é <span className="text-red-600">cansativo</span> e{' '}
            <span className="text-red-600">caro demais</span> de manter.
          </p>
          <p className="text-xl text-gray-600 mb-8">
            <span className="font-semibold">Mas existe uma solução...</span>
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
          >
            Ver a Solução Agora
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Problems

