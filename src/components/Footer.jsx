import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">Ainda tem dúvidas?</h3>
          <p className="text-gray-300 mt-2">Fale com a nossa equipe no WhatsApp.</p>
          <a
            href="https://wa.me/77988281339?text=Ol%C3%A1%2C%20eu%20vim%20do%20site%20e%20quero%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transition-colors"
          >
            Abrir WhatsApp
          </a>
        </div>
        <div className="text-center text-gray-300">
          <p className="text-lg font-semibold">Kaijor</p>
          <p className="mt-1 text-sm">CNPJ: 57.846.368/0001-92</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

