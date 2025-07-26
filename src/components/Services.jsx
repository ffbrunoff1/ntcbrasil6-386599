import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Zap, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Utilizamos os melhores materiais e as mais rigorosas normas técnicas para garantir a excelência e durabilidade de cada projeto.',
    },
    {
      icon: Clock,
      title: 'Compromisso com Prazos',
      description:
        'Nosso planejamento e gestão de obras são otimizados para entregar seu projeto no tempo acordado, sem surpresas.',
    },
    {
      icon: Zap,
      title: 'Inovação e Tecnologia',
      description:
        'Adotamos soluções construtivas modernas e tecnologia de ponta para otimizar processos e garantir resultados superiores.',
    },
    {
      icon: ShieldCheck,
      title: 'Segurança em Primeiro Lugar',
      description:
        'Priorizamos a segurança em todas as etapas da obra, protegendo nossa equipe, clientes e o seu investimento.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="diferenciais" className="section-padding bg-brand-white">
      <div className="container-custom mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 h-underline inline-block">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto mt-8">
            Descubra por que a NTC Brasil é a escolha certa para o seu próximo
            grande projeto.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-brand-light-gray p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex-shrink-0 bg-brand-blue text-white h-16 w-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                <service.icon size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-gray">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
