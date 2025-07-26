import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  return (
    <section id="sobre" className="section-padding bg-brand-light-gray">
      <motion.div
        className="container-custom mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={imageVariants}>
          <img
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-site.jpg"
            alt="Equipe de construção da NTC Brasil em uma obra"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 h-underline"
          >
            Nossa Missão é Construir Valor
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-brand-gray mb-6"
          >
            Na NTC Brasil, não apenas erguemos estruturas, mas construímos
            relações de confiança e realizamos sonhos. Com anos de experiência
            no setor da construção, nossa paixão é entregar projetos que superem
            as expectativas em qualidade, prazo e segurança.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-brand-dark">
                  Visão de Futuro
                </h4>
                <p className="text-brand-gray">
                  Ser referência em inovação e sustentabilidade no mercado da
                  construção civil.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-brand-dark">
                  Equipe Qualificada
                </h4>
                <p className="text-brand-gray">
                  Profissionais dedicados e experientes, prontos para qualquer
                  desafio.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
