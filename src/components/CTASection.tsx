import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { Mail, Check, MessageCircle, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success('사전 등록이 완료되었습니다!', {
        description: '출시 소식을 가장 먼저 알려드리겠습니다.',
      });
      // Reset after animation
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: MessageCircle, label: '카카오톡', color: 'hover:bg-yellow-500' },
    { icon: Share2, label: '공유하기', color: 'hover:bg-blue-500' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(71, 85, 105) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(71, 85, 105) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main CTA content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-6 text-[24px] font-bold font-[Gmarket_Sans_TTF]">
            모험을 시작할 준비가 되셨나요?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12">
            이메일을 남겨주시면 출시 소식과 추첨을 통해 커피 기프티콘을 드립니다
          </p>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <div className="relative flex gap-3 p-2 rounded-full bg-slate-800/80 backdrop-blur-xl border border-slate-700">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 pl-12 pr-4 bg-transparent border-0 text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitted}
                  className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 px-8 transition-all duration-300 font-[Gmarket_Sans_TTF]"
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      완료
                    </motion.div>
                  ) : (
                    '알림 받기'
                  )}
                </Button>
              </div>
            </div>
          </motion.form>

          {/* Big CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-16 py-8 rounded-full shadow-2xl shadow-cyan-500/30 border-0 transition-all duration-300 hover:scale-105 font-[Gmarket_Sans_TTF] text-[16px] font-bold"
            >
              사전 등록하기
            </Button>
          </motion.div>
        </motion.div>

        {/* Social share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-slate-400 mb-6">
            친구와 함께 모험을 시작하세요
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toast.info(`${link.label} 공유 기능은 곧 출시됩니다!`)}
                className={`w-14 h-14 rounded-full bg-slate-800/80 backdrop-blur-xl border border-slate-700 flex items-center justify-center text-slate-300 ${link.color} transition-all duration-300 shadow-lg`}
              >
                <link.icon className="w-6 h-6" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-slate-800"
        >
          <p className="text-slate-500">
            © 2025 Running Pet          </p>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/20 rounded-tl-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-orange-500/20 rounded-br-3xl" />
    </section>
  );
}
