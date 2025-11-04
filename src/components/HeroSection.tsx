import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/b7933f0e8cccb48ba56099c8da52cfc3509a4da6.png';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  // Animated glowing dots representing route nodes
  const nodes = [
    { x: '15%', y: '25%', delay: 0 },
    { x: '35%', y: '40%', delay: 0.3 },
    { x: '25%', y: '60%', delay: 0.6 },
    { x: '45%', y: '35%', delay: 0.9 },
    { x: '65%', y: '55%', delay: 1.2 },
    { x: '75%', y: '30%', delay: 1.5 },
    { x: '55%', y: '70%', delay: 1.8 },
    { x: '85%', y: '45%', delay: 2.1 },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Background city image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1664813174433-778f3068fb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80)',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-orange-950/20" />
      </div>

      {/* Animated route nodes */}
      <div className="absolute inset-0">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay, duration: 0.5 }}
          >
            {/* Glowing dot */}
            <motion.div
              className="relative"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: node.delay 
              }}
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
              <div className="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full blur-md" />
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 w-3 h-3 border-2 border-cyan-400 rounded-full"
                animate={{
                  scale: [1, 2.5, 2.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                }}
              />
            </motion.div>

            {/* Connecting lines to nearby nodes */}
            {i < nodes.length - 1 && (
              <motion.div
                className="absolute h-px bg-gradient-to-r from-cyan-400/50 to-transparent origin-left"
                style={{
                  width: '100px',
                  transform: `rotate(${Math.random() * 60 - 30}deg)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: node.delay + 0.3, duration: 0.8 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Logo/Icon - Much larger and more elaborate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              {/* Main logo with glow */}
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Runner Logo" 
                  className="w-40 h-40 md:w-48 md:h-48 drop-shadow-2xl"
                />
                <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 bg-cyan-400/30 blur-3xl" />
              </div>
              
              {/* Orbiting sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Sparkles className="w-10 h-10 text-orange-400 absolute -top-4 left-1/2 -translate-x-1/2 drop-shadow-lg" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Sparkles className="w-8 h-8 text-yellow-400 absolute top-1/2 -right-8 md:-right-10 drop-shadow-lg" />
                <Sparkles className="w-8 h-8 text-pink-400 absolute top-1/2 -left-8 md:-left-10 drop-shadow-lg" />
              </motion.div>
              
              {/* Pulsing ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 border-4 border-cyan-400/40 rounded-full"
              />
            </div>
          </motion.div>

          {/* Problem statement - small text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 mb-6 text-lg"
          >
           맨날 똑같은 코스만 달리시나요?
          </motion.p>

          {/* Main heading - MUCH LARGER */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white mb-8 tracking-tight text-5xl md:text-7xl lg:text-8xl leading-tight"
          >
            <span className="block mb-2 text-[64px] font-bold font-normal font-[Gmarket_Sans_TTF]">러닝하며 도시를</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-[64px] font-bold font-[Gmarket_Sans_TTF]">
              탐험하세요
            </span>
          </motion.h1>

          {/* Subheading - decorative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto text-[20px] font-[Gmarket_Sans_TTF]">
              반복되는 러닝을 새로운 모험으로 바꿉니다
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onCTAClick}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-16 py-8 rounded-full shadow-2xl shadow-orange-500/50 border-0 transition-all duration-300 hover:scale-105 text-xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative font-bold font-[Gmarket_Sans_TTF]">지금 등록하기</span>
              </Button>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="space-y-2"
            >
              <p className="text-cyan-300 flex items-center justify-center gap-2 text-lg text-[16px]">
                <Sparkles className="w-5 h-5" />
                사전 등록자 중 추첨을 통해 커피 기프티콘 증정
              </p>
              <p className="text-slate-500 text-[14px]">
                지금 등록하고 특별한 혜택을 받아보세요
              </p>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
