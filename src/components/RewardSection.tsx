import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Trophy, Zap, Star, Gift, Award, Crown } from 'lucide-react';

export function RewardSection() {
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

  const rewards = [
    { icon: Crown, label: '레전더리 런너 뱃지', color: 'from-yellow-400 to-orange-500' },
    { icon: Trophy, label: '얼리버드 트로피', color: 'from-cyan-400 to-blue-500' },
    { icon: Zap, label: '스피드 부스터', color: 'from-purple-400 to-pink-500' },
    { icon: Star, label: '특별 칭호', color: 'from-green-400 to-emerald-500' },
    { icon: Gift, label: '프리미엄 테마', color: 'from-orange-400 to-red-500' },
    { icon: Award, label: '파운더 엠블럼', color: 'from-blue-400 to-indigo-500' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-4 h-4 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <Gift className="w-20 h-20 text-yellow-400" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          <h2 className="text-white mb-6 text-[24px] font-bold font-[Gmarket_Sans_TTF]">
            지금 등록하고 한정 뱃지를 받으세요
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            사전 등록 유저만을 위한 특별한 보상과 한정판 뱃지를 획득하세요
          </p>
        </motion.div>

        {/* Reward chest visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto mb-16"
        >
          {/* Main reward container */}
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
            {/* Glassmorphism layer */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 blur-2xl -z-10" />

            {/* Reward grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6">
              {rewards.map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative p-6 rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="mb-4"
                    >
                      <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${reward.color} flex items-center justify-center shadow-lg`}>
                        <reward.icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Glow */}
                      <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br ${reward.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                    </motion.div>

                    {/* Label */}
                    <p className="text-slate-200 text-center">
                      {reward.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
