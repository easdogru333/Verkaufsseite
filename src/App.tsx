import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ShootingStars } from "@/components/ui/shooting-stars";

// Translations
const translations = {
  en: {
    workWithUs: "Work with us",
    heroTitle: "\"The Personal Branding Secret Every Underdog Should Know\"",
    heroSubtitle: "founders & execs:",
    heroTagline: "Turn your personal brand into a lead magnet with just 45 minutes a week",
    whatYouWillUnlock: "What You'll Unlock",
    engagement: "Engagement that converts",
    thoughtLeader: "Become a thought leader in your space",
    inboundLeads: "Inbound leads on autopilot",
    personalBrand: "A personal brand people trust",
    noAds: "No ads. No AI spam. Just authentic storytelling.",
    growthPlan: "Pick Your Growth Plan",
    starter: "Starter",
    starterDesc: "Find your voice & gain traction.",
    growth: "Growth",
    growthDesc: "Scale your influence & attract clients.",
    elite: "Elite",
    eliteDesc: "Dominate your industry with authority.",
    howItWorks: "How It Works",
    freeStrategyCall: "Free Strategy Call",
    contentGameplan: "Content Gameplan",
    growthEngagement: "Growth & Engagement",
    limitedAvailability: "⚡ Limited Availability: Only 5 spots open this month - Secure yours now!",
    bookYourFreeCall: "Book Your Free Call.",
    claimYourSpot: "Claim your spot",
    foundedBy: "founded by",
    copyright: "Copyright © 2025. All rights reserved."
  }
};

const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24">
    <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Definiere einen Stil für den Kopf-Bereich, der den Font-Import enthält
const fontImportStyle = document.createElement('link');
fontImportStyle.rel = 'stylesheet';
fontImportStyle.href = 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap';
document.head.appendChild(fontImportStyle);

export default function LandingPage() {
  const [platform, setPlatform] = useState<'twitter' | 'linkedin'>('twitter');
  const t = translations.en;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"free-30-min-strategy-call"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const openCalendar = () => {
    const cal = window.Cal;
    if (cal) {
      cal("modal", {
        calLink: "theunderdoglabs/free-30-min-strategy-call",
        config: {
          layout: "month_view",
          theme: "dark"
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="stars absolute inset-0" />
        <ShootingStars
          starColor="#f97316"
          trailColor="#f9731666"
          minSpeed={25}
          maxSpeed={50}
          minDelay={500}
          maxDelay={1500}
          starWidth={20}
          starHeight={2}
        />
        <ShootingStars
          starColor="#fb923c"
          trailColor="#fb923c66"
          minSpeed={30}
          maxSpeed={60}
          minDelay={700}
          maxDelay={2000}
          starWidth={15}
          starHeight={2}
        />
        <ShootingStars
          starColor="#fdba74"
          trailColor="#fdba7466"
          minSpeed={20}
          maxSpeed={45}
          minDelay={300}
          maxDelay={1200}
          starWidth={25}
          starHeight={2}
        />
      </div>

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `}</style>

      {/* Rest of your content with increased z-index */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="w-full px-4 sm:px-8 py-3 sm:py-4">
            <div className="flex justify-between items-center">
              
              {/* Logo - linke Seite */}
              <div className="flex-1 flex justify-start pl-0">
                <div className="w-auto h-16 flex items-center" style={{ marginTop: '-4px' }}>
                  <img 
                    src="/the-underdog-labs-logo.png" 
                    alt="The Underdog Labs Logo" 
                    className="w-auto h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Icon - mittlere Seite */}
              <div className="flex-1 flex justify-center">
                <div className="w-8 h-8">
                  <img 
                    src="/dog-icon.png" 
                    alt="Dog Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Button - rechte Seite */}
              <div className="flex-1 flex justify-end">
                <motion.button
                  className="bg-orange-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openCalendar}
                >
                  {t.workWithUs}
                </motion.button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto text-center p-4 sm:p-8 pt-16 sm:pt-20">
          {/* Hero Section */}
          <motion.h1 
            className="text-4xl sm:text-6xl font-extrabold text-orange-500 italic mb-4 sm:mb-6 relative z-[60]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {t.heroTitle}
          </motion.h1>
          
          <p className="italic mb-2 text-orange-500 text-sm sm:text-base">{t.heroSubtitle}</p>
          
          <p className="text-xl sm:text-2xl text-orange-500 mb-8 sm:mb-12 uppercase tracking-wide">
            {t.heroTagline}
          </p>

          {/* What You'll Unlock Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-orange-500">{t.whatYouWillUnlock}</h2>
            <div className="space-y-2 sm:space-y-3 text-lg sm:text-xl">
              <div className="flex items-center justify-center space-x-3">
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                    rotate: [-3, 3, -3]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-yellow-400"
                >⚡</motion.span>
                <span>{t.engagement}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span>📝</span>
                <span>{t.thoughtLeader}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <motion.span
                  animate={{ 
                    y: [-3, 3, -3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >🎯</motion.span>
                <span>{t.inboundLeads}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-yellow-400">⭐</span>
                <span>{t.personalBrand}</span>
              </div>
            </div>
            <p className="mt-6 text-lg text-orange-500">{t.noAds}</p>
          </div>
          
          {/* Growth Plans Section */}
          <div className="w-full mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-orange-500">{t.growthPlan}</h2>
            
            {/* Platform Toggle */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-orange-500/30 p-1.5 sm:p-2 rounded-full flex items-center gap-2 sm:gap-3 relative">
                <button 
                  onClick={() => setPlatform('twitter')}
                  className={`relative z-10 p-3 rounded-full transition-all ${platform === 'twitter' ? 'bg-orange-500 text-white scale-110' : 'text-orange-500 hover:text-orange-400'}`}
                >
                  <XLogo />
                </button>
                <div className="relative">
                  <button 
                    className="relative z-10 p-3 rounded-full text-orange-500/50 cursor-not-allowed"
                    disabled
                  >
                    <Linkedin size={24} />
                  </button>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                  >
                    Coming Soon!
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-2xl font-bold text-orange-500">Underdog Launch Core</h3>
                  <p className="text-base text-center mb-4">
                    Your foundation for Twitter success with proven strategies and daily execution.
                  </p>
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Profile optimization & strategy session</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">High-impact tweets, threads & replies</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Daily engagement to boost visibility</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Weekly performance check-ins</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-3xl">🔥</span>
                  <h3 className="text-2xl font-bold text-orange-500">Underdog Growth Pulse</h3>
                  <p className="text-base text-center mb-4">
                    Accelerate your growth with advanced strategies and community building.
                  </p>
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Advanced content strategy & positioning</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Community engagement & networking</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Daily interactions & lead generation</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Monthly strategy & performance reviews</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-3xl">💎</span>
                  <h3 className="text-2xl font-bold text-orange-500">Underdog Elite OS</h3>
                  <p className="text-base text-center mb-4">
                    Complete brand domination with exclusive access and premium support.
                  </p>
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">High-level strategy & ghostwriting</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Exclusive founder network & insider playbooks</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">DM interactions & cross-promotion</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 w-5 flex-shrink-0">✓</span>
                      <p className="text-sm">Personalized growth roadmap</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="w-full mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-orange-500">{t.howItWorks}</h2>
            {/* Mobile: Vertical centered, Desktop: Horizontal */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-0 sm:space-x-4 text-base sm:text-xl">
              {/* Mobile Layout */}
              <div className="flex flex-col items-center gap-6 sm:hidden">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">1️⃣</span>
                  <span className="text-base text-center">{t.freeStrategyCall}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">2️⃣</span>
                  <span className="text-base text-center">{t.contentGameplan}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">3️⃣</span>
                  <span className="text-base text-center">{t.growthEngagement}</span>
                </div>
              </div>

              {/* Desktop Layout (unchanged) */}
              <div className="hidden sm:flex items-center">
                <div className="flex items-center gap-2">
                  <span>1️⃣</span>
                  <span className="text-base">{t.freeStrategyCall}</span>
                </div>
                <span className="mx-4">→</span>
                <div className="flex items-center gap-2">
                  <span>2️⃣</span>
                  <span className="text-base">{t.contentGameplan}</span>
                </div>
                <span className="mx-4">→</span>
                <div className="flex items-center gap-2">
                  <span>3️⃣</span>
                  <span className="text-base">{t.growthEngagement}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <p className="text-xl sm:text-2xl text-orange-500">
              {t.limitedAvailability}
            </p>
            <p className="text-xl sm:text-2xl text-orange-500">
              {t.bookYourFreeCall}
            </p>
          </div>

          {/* Centered CTA Button */}
          <motion.button
            className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-bold uppercase mb-6 sm:mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCalendar}
          >
            {t.claimYourSpot}
          </motion.button>

          {/* Footer Section */}
          <div className="mt-6 sm:mt-8 mb-8 sm:mb-12 flex flex-col items-center space-y-4 sm:space-y-6">
            <p className="text-orange-500 text-lg">{t.foundedBy}</p>
            
            <div className="w-24 h-24 relative">
              <img 
                src="/dog-icon.png" 
                alt="TheUnderdogLabs Logo" 
                className="w-full h-full object-contain rounded-full border-2 border-orange-500/30"
              />
            </div>

            <a 
              href="https://twitter.com/TheUnderdogLabs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 hover:text-orange-400 transition-colors flex items-center space-x-2 text-lg"
            >
              <XLogo />
              <span>@TheUnderdogLabs</span>
            </a>

            <p className="text-orange-500/70 text-sm mt-8">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>

      {/* Cal.com Embed - Entfernt, da es nur als Modal angezeigt werden soll */}
    </div>
  );
}