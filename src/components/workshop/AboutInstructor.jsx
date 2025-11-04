import { motion } from 'framer-motion'
import { Award, GraduationCap, Briefcase, CheckCircle } from 'lucide-react'

function AboutInstructor() {
  const achievements = [
    {
      icon: Award,
      title: 'Certificado Harvard',
      description: 'Especialista certificado em IA pela Universidade de Harvard'
    },
    {
      icon: GraduationCap,
      title: 'Formação Completa',
      description: 'Cursando Análise e Desenvolvimento de Sistemas'
    },
    {
      icon: Briefcase,
      title: '7 Anos de Experiência',
      description: 'Transformando negócios com IA e Automações'
    },
    {
      icon: CheckCircle,
      title: 'Resultados Comprovados',
      description: 'Centenas de empresas já otimizadas'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Quem Vai{' '}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Te Ensinar
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Conheça o especialista que vai transformar sua Black Friday
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-3xl blur-3xl transform scale-110" />
                
                {/* Image Container */}
                <div className="relative rounded-3xl">
                  <img
                    src="https://i.postimg.cc/Z5wMTsHy/Eu-1.png"
                    alt="Caio Santos - Especialista em IA"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Floating Badge Harvard */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
                >
                  <Award className="w-5 h-5" />
                  Harvard
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Caio Santos
              </h3>
              <p className="text-orange-400 font-semibold text-lg mb-6">
                Especialista em Inteligência Artificial e Automações
              </p>

              {/* Bio */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Caio Santos é especialista em Inteligência Artificial e Automações para empresas, 
                  com mais de <strong className="text-white">7 anos de experiência</strong> na área de 
                  tecnologia e marketing.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  É <strong className="text-yellow-400">Certificado em IA por Harvard</strong> e atualmente 
                  está cursando Análise e Desenvolvimento de Sistemas. Ao longo de sua trajetória, tem 
                  ajudado empresas a otimizarem processos, aumentarem a produtividade e escalarem seus 
                  resultados por meio da implementação estratégica de soluções inteligentes.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 hover:border-orange-500 transition-all duration-300"
                  >
                    <achievement.icon className="w-8 h-8 text-orange-500 mb-3" />
                    <h4 className="font-bold text-white mb-2 text-sm">{achievement.title}</h4>
                    <p className="text-gray-400 text-xs">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trust Signals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex flex-wrap gap-4 items-center"
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-yellow-400 text-2xl">★</span>
                  <span className="font-semibold">Autoridade em IA</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Resultados Comprovados</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInstructor

