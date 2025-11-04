import { motion } from 'motion/react';
import { Map, MapPin, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ConceptSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Map,
      title: '루트 탐험',
      description: '도시 곳곳의 숨겨진 루트를 발견하고 새로운 경로를 개척하세요',
      gradient: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      icon: MapPin,
      title: '실시간 체크포인트',
      description: '실시간으로 체크포인트를 찾고 도전 과제를 완료하세요',
      gradient: 'from-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/20',
    },
    {
      icon: Award,
      title: '희귀 뱃지 수집',
      description: '특별한 업적을 달성하고 한정판 뱃지를 모아보세요',
      gradient: 'from-orange-500 to-yellow-500',
      shadowColor: 'shadow-orange-500/20',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 overflow-hidden px-[24px] py-[128px]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-[24px] py-[0px]">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-white mb-6 text-[24px] font-bold font-[Gmarket_Sans_TTF]">
            도시가 당신의 필드가 됩니다
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            체크포인트를 발견하고, 숨겨진 루트를 탐험하고,
            <br />
            나만의 러닝 기록과 뱃지를 모아보세요.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className={`relative p-8 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 ${feature.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-300`}>
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mb-6"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg ${feature.shadowColor}`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow border */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${feature.gradient} blur-xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-cyan-500/20 rounded-full" />
        <div className="absolute bottom-20 left-10 w-40 h-40 border border-purple-500/20 rounded-full" />
      </div>
    </section>
  );
}
