import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-300">
          <p className="text-lg font-semibold">Kaijor</p>
          <p className="mt-1 text-sm">CNPJ: 57.846.368/0001-92</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

