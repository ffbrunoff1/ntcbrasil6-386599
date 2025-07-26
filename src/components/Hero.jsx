import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative bg-brand-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative container-custom mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-6 leading-tight"
          >
            Construindo o Futuro
            <span className="block text-brand-blue">com Excelência</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-10"
          >
            Transforme seus sonhos em realidade com a NTC Brasil. Oferecemos
            soluções completas em construção com inovação, qualidade e
            compromisso em cada detalhe.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-brand-blue text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              Fale com um Especialista
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #5dade2 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #5dade2 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
