import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import mockup1 from 'figma:asset/e77c4f112888c7dc6744540cd74086e69e2ac9bc.png';
import mockup2 from 'figma:asset/69897a3ac8af178b11853fafc613b55468a1177e.png';
import mockup3 from 'figma:asset/6c87448abd39b897f4fd9eae401a9df82cedf473.png';

export function PreviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: '실시간 지도 탐험',
      description: '도시의 모든 코너를 발견하고 새로운 루트를 개척하세요',
      image: mockup1,
    },
    {
      title: '루트 컬렉션',
      description: '다양한 테마의 러닝 코스를 탐험하고 완료하세요',
      image: mockup2,
    },
    {
      title: '뱃지 & 보상',
      description: '특별한 업적을 달성하고 독특한 뱃지를 수집하세요',
      image: mockup3,
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-[24px] px-[32px] py-[0px]">
          
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="mt-[0px] mr-[0px] mb-[32px] ml-[0px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-white mb-6 md:text-5xl lg:text-6xl leading-tight text-[48px] font-bold font-[Gmarket_Sans_TTF]">
                  실감나는 러닝을
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-[48px]">
                    체험하세요
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-400 text-lg"
              >
                도시를 탐험하며 새로운 경험을 만들어가는 러닝 앱
              </motion.p>
            </div>

            {/* Slide info */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[15px] px-[14px] py-[0px]">
                <span className="text-cyan-400 text-[14px]">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-white text-2xl md:text-3xl text-[24px] font-bold font-normal font-[Gmarket_Sans_TTF]">
                {slides[currentSlide].title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-[16px]">
                {slides[currentSlide].description}
              </p>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              {/* Arrow buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-xl border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700/80 transition-colors shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-xl border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700/80 transition-colors shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Slide indicators */}
              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="group"
                  >
                    <div className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-12 bg-gradient-to-r from-cyan-500 to-blue-500' 
                        : 'w-8 bg-slate-700 group-hover:bg-slate-600'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Phone mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Multiple phone mockups with stagger effect */}
            <div className="relative h-[600px] md:h-[700px]">
              {/* Main/Center phone - current slide */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="relative w-[280px] md:w-[320px]">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 blur-3xl" />
                  
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              {/* Background phone - previous slide (left) */}
              <motion.div
                key={`prev-${currentSlide}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative w-[220px] md:w-[250px]">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl opacity-60 blur-[2px]">
                    <img
                      src={slides[(currentSlide - 1 + slides.length) % slides.length].image}
                      alt="Previous"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Background phone - next slide (right) */}
              <motion.div
                key={`next-${currentSlide}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative w-[220px] md:w-[250px]">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl opacity-60 blur-[2px]">
                    <img
                      src={slides[(currentSlide + 1) % slides.length].image}
                      alt="Next"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
