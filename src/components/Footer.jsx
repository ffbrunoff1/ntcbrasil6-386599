import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-custom mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="flex items-center">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753469096076_0.png"
                alt="NTC Brasil Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {year} NTC Brasil. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Construindo o futuro com solidez e confiança.
            </p>
          </div>

          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="bg-brand-blue p-3 rounded-full text-white hover:bg-opacity-80 transition-colors duration-300 shadow-lg"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
