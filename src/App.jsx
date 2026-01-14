import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css'

function App() {
  const [showPatternMap, setShowPatternMap] = useState(false);
  const [showDesignPatterns, setShowDesignPatterns] = useState(false);
  const [showAhsaArches, setShowAhsaArches] = useState(false);
  const [showTraditional, setShowTraditional] = useState(false);
  const [showTransitional, setShowTransitional] = useState(false);
  const [showContemporary, setShowContemporary] = useState(false);
  const [showDecorations, setShowDecorations] = useState(false);
  const [showCaesarean, setShowCaesarean] = useState(false);
  const [showAlhofuf, setShowAlhofuf] = useState(false);
  const [showIbrahim, setShowIbrahim] = useState(false);
  const [showAlFakhriya, setShowAlFakhriya] = useState(false);
  const [showMosque, setShowMosque] = useState(false);
  const [showSimplified, setShowSimplified] = useState(false);
  const [showIbrahim2, setShowIbrahim2] = useState(false);
  const [showSchool, setShowSchool] = useState(false);
  const [showRegion, setShowRegion] = useState(false);




  const [showSegmented, setShowSegmented] = useState(false);
    const [showMarzia, setShowMarzia] = useState(false);


  const [traditionalBg, setTraditionalBg] = useState("/traditional/background.png");
  const [transitionalBg, setTransitionalBg] = useState("/transitional/background.png");
  const [contemporaryBg, setContemporaryBg] = useState("/contemporary/background.png");

  const [src, setSrc] = useState("/design-pattern/transitional.png");
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [traditionalContent, setTraditionalContent] = useState(0);
  const [transitionalContent, setTransitionalContent] = useState(0);
  const [contemporaryContent, setContemporaryContent] = useState(0);




  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 769);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

    useEffect(() => {
    if (!showDesignPatterns) {
      setIsClosing(false);
    }
  }, [showDesignPatterns]);

  return (
    <main 
      className="min-h-screen bg-cover bg-center flex flex-col overflow-y-scroll"
      style={{ backgroundImage: "url('/dist/home/background.png')" }}
      dir="rtl"
    >
      {/* صفحة Pattern Map - يظهر عند الضغط */}
      <AnimatePresence>
        {showPatternMap && (
          <motion.div 
            className="fixed inset-0 bg-cover bg-center z-50"
            style={{ backgroundImage: `url('/dist/pattern-map/${isMobile ? 'background-mobile' : 'background'}.png')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="min-h-screen flex flex-col">
              <motion.div 
                className="flex-1 flex flex-col items-start justify-center gap-30 mr-5 md:mr-20 text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="text-white flex flex-row-reverse items-center gap-4"
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                >
                  <p className="text-2xl font-bold">النطاق التقليدي</p>
                  <div className="bg-[#6D543A] w-8 h-8 rounded"></div>
                </motion.div>

                <motion.div 
                  className="text-white flex flex-row-reverse items-center gap-4"
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                  <p className="text-2xl font-bold">النطاق الانتقالي</p>
                  <div className="bg-[#A2886E] w-8 h-8 rounded"></div>
                </motion.div>

                <motion.div 
                  className="text-white flex flex-row-reverse items-center gap-4"
                  initial={{ y: -500, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                >
                  <p className="text-2xl font-bold">النطاق المعاصر</p>
                  <div className="bg-[#FDF2E7] w-8 h-8 rounded"></div>
                </motion.div>

              </motion.div>
              <motion.button
                onClick={() => setShowPatternMap(false)}
                className="absolute top-8 right-8 bg-transparent cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img 
                  src="/dist/home-icon.png" 
                  alt="رجوع" 
                  className="w-10 h-10"
                />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* صفحة Design Patterns - يظهر عند الضغط */}
      <AnimatePresence mode="wait">
        {showDesignPatterns && (
          <motion.div 
            className="fixed inset-0 bg-cover bg-center z-50 min-h-screen flex flex-col"
            style={{ backgroundImage: "url('/dist/home/background.png')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ 
              opacity: {
                duration: 0.3,
                delay: isClosing ? 0 : 1
              }
            }}
          >
            <motion.button
              onClick={() => {
                setIsClosing(true);
                setTimeout(() => {
                  setShowDesignPatterns(false);
                  setIsClosing(false);
                }, 300);
              }}
              className="absolute top-8 left-8 bg-transparent cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration: 0.1 }}
            >
              <img 
                src="/dist/home-icon.png" 
                alt="رجوع" 
                className="w-10 h-10"
              />
            </motion.button>
            <div className="flex-1 flex items-center justify-center mb-15">
              <div className="flex flex-col lg:flex-row gap-25  justify-center max-w-6xl px-4">
                <motion.img 
                  src="/dist/design-pattern/traditional.png" 
                  alt="pattern-map" 
                  className="w-40 h-40 md:w-65 md:h-65 object-cover cursor-pointer  transition-shadow duration-300 z-2"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? 260 : -360 }}
                    animate={{ [isMobile ? "y" : "x"]: 0 }}
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 120,
                      damping: 12
                    }}
                    onClick={() => setShowTraditional(true)}
                />
                <motion.img 
                  src="/dist/design-pattern/transitional.png" 
                  alt="design-patterns" 
                  className="w-40 h-40 md:w-65 md:h-65 object-cover cursor-pointer transition-shadow duration-300 z-1"
                  onClick={() => setShowTransitional(true)}
                />
                <motion.img 
                  src="/dist/design-pattern/contemporary.png" 
                  alt="alahsa-arches" 
                  className="w-40 h-40 md:w-65 md:h-65 object-cover cursor-pointer transition-shadow duration-300 z-3"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? -260 : 360 }}
                  animate={{ [isMobile ? "y" : "x"]: 0 }}
                  transition={{
                    delay: 2,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                  onClick={() => setShowContemporary(true)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* صفحة Traditional - يظهر عند الضغط على traditional */}
      <AnimatePresence>
        {showTraditional && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Building Image على اليسار */}
              <div className="absolute left-0 top-0 mt-20 lg:mt-20 xl:mt-25 2xl:mt-30 3xl:mt-40 z-10  w-[400px] md:w-[600px] lg:w-[700px] xl:w-[700px] 2xl:w-[880px] 3xl:w-[1100px]">
                <img
                  src="/dist/traditional/bulding-image.png"
                  alt="building"
                  className="w-full h-auto"
                />

                {/* Hotspot 1 */}
                <button
                  onClick={() => setTraditionalContent(1)}
                  className={`absolute top-[60%] left-[69%] xl:left-[70%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all z-20 ${
                    traditionalContent === 1 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 1"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 2 */}
                <button
                  onClick={() => setTraditionalContent(2)}
                  className={`absolute top-[47%] left-[53%] xl:left-[54%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 2 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 2"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 3 */}
                <button
                  onClick={() => setTraditionalContent(3)}
                  className={`absolute top-[37%] left-[62%] xl:left-[63%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 3 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 3"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 4 */}
                <button
                  onClick={() => setTraditionalContent(4)}
                  className={`absolute top-[60%] left-[29%] xl:left-[30%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 4 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 4"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 5 */}
                <button
                  onClick={() => setTraditionalContent(5)}
                  className={`absolute top-[55%] left-[7%] xl:left-[8%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 5 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 5"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 6 */}
                <button
                  onClick={() => setTraditionalContent(6)}
                  className={`absolute top-[25%] left-[20%] xl:left-[21%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 6 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 6"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 7 */}
                <button
                  onClick={() => setTraditionalContent(7)}
                  className={`absolute top-[9%] left-[23%] xl:left-[24%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 7 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 7"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 8 */}
                <button
                  onClick={() => setTraditionalContent(8)}
                  className={`absolute top-[7%] right-[49%] xl:right-[50%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 8 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 8"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>
                


              </div>


              {/* Content */}
              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-end lg:justify-start gap-10 md:mr-20 lg:mr-20 xl:mr-40 text-right mb-20 md:mb-20 lg:mb-30 xl:mb-40 2xl:mb-60 3xl:mb-70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="3xl:mt-100 2xl:mt-80 xl:mt-60 lg:mt-50 md:mt-45 mb-20 md:mb-0 px-5 md:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النمط التقليدي</h2>
                        <p className="lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify 2xl:leading-11 3xl:leading-13 md:w-70 lg:w-70 xl:w-90 2xl:w-120 3xl:w-140 text-white mt-5">يبرز الطراز التقليـدي من خلال عناصــره المعماريــة كالدروة والزخــارف والأقواس والمداخــــل المصممة بشكل مفصل ومميز، ويقع في المناطق التاريخية.</p>
                      </motion.div>
                    )}

                    {traditionalContent === 1 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/door2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد المدخل</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">مداخل بارزة مزينة بأبواب خشبية محاطة بزخارف تعكس الطابع المحلي.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد المدخل</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">مداخل بارزة مزينة بأبواب خشبية محاطة بزخارف تعكس الطابع المحلي.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 2 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/arches2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الأقواس</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تُبرز الأقواس بزخارفها المميزة التي تبرز روح المكان وتمنحه طابع محلي.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الأقواس</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تُبرز الأقواس بزخارفها المميزة التي تبرز روح المكان وتمنحه طابع محلي.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 3 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/windows2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النوافذ</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تكون النوافذ في الطراز التقليدي مزيجاً بين المستطيلات والمربعات والفتحات المقوسة شبه دائرية وممتدة رأسيًا بشكل عام. وتكون النوافذ مغطاة بالكامل بسواتر خشبية.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النوافذ</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تكون النوافذ في الطراز التقليدي مزيجاً بين المستطيلات والمربعات والفتحات المقوسة شبه دائرية وممتدة رأسيًا بشكل عام. وتكون النوافذ مغطاة بالكامل بسواتر خشبية.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 4 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/cars2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">مدخل السيارة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">مصمَّم بتفاصيل دقيقة وزخارف معقّدة، واضح المعالم، ومتناسق مع تصميم السور.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">مدخل السيارة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">مصمَّم بتفاصيل دقيقة وزخارف معقّدة، واضح المعالم، ومتناسق مع تصميم السور.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 5 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/wall2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">السور</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">يُصمَّم السور مع الطابع التقليدي للواجهة، وتُبرز التفاصيل والزخارف المحلية، وتُخفى عدادات الخدمة.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">السور</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">يُصمَّم السور مع الطابع التقليدي للواجهة، وتُبرز التفاصيل والزخارف المحلية، وتُخفى عدادات الخدمة.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 6 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/balcony2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الشرفة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تصمم الشرفات بشكل مفصل ومتناسق مع الواجهات وهي أروقة خارجية مظللة، متصلة مباشرة بالفراغات الداخلية، مع إطلالة على فناء داخلي أو حديقة خارجية.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الشرفة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تصمم الشرفات بشكل مفصل ومتناسق مع الواجهات وهي أروقة خارجية مظللة، متصلة مباشرة بالفراغات الداخلية، مع إطلالة على فناء داخلي أو حديقة خارجية.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 7 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/decorations2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الزخارف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">زخارف محلية معقدة ومفصلة تزيّــــــــن المداخـــــل والنوافـــــذ والعناصر المعمارية بشكل مميز.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الزخارف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">زخارف محلية معقدة ومفصلة تزيّــــــــن المداخـــــل والنوافـــــذ والعناصر المعمارية بشكل مميز.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 8 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/traditional/summit2.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد القمة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">شُــــــرف مسننـــة، ومتباعــــــدة ومزخرفة، ومتدرجـة تزيّن السطح وتؤكد نهاية المبنى.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد القمة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">شُــــــرف مسننـــة، ومتباعــــــدة ومزخرفة، ومتدرجـة تزيّن السطح وتؤكد نهاية المبنى.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => setShowTraditional(false)}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowDesignPatterns(false);
                        setShowTraditional(false);    
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        if (traditionalContent !== 0) {
                          setTraditionalContent(0);
                        } else {
                          setShowTraditional(false);
                        }
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>

      {/* صفحة Transitional - يظهر عند الضغط على transitional */}
      <AnimatePresence>
        {showTransitional && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Building Image على اليسار */}
              <div className="absolute left-0 top-0 mt-20 lg:mt-20 xl:mt-25 2xl:mt-30 3xl:mt-40 z-10  w-[400px] md:w-[600px] lg:w-[700px] xl:w-[700px] 2xl:w-[880px] 3xl:w-[1100px]">
                <img
                  src="/dist/transitional/bulding-image.png"
                  alt="building"
                  className="w-full h-auto"
                />

                {/* Hotspot 1 */}
                <button
                  onClick={() => setTraditionalContent(1)}
                  className={`absolute top-[60%] left-[64%] xl:left-[65%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all z-20 ${
                    traditionalContent === 1 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 1"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 2 */}
                <button
                  onClick={() => setTraditionalContent(2)}
                  className={`absolute top-[47%] left-[49%] xl:left-[50%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 2 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 2"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 3 */}
                <button
                  onClick={() => setTraditionalContent(3)}
                  className={`absolute top-[37%] left-[57%] xl:left-[58%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 3 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 3"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 4 */}
                <button
                  onClick={() => setTraditionalContent(4)}
                  className={`absolute top-[60%] left-[27%] xl:left-[28%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 4 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 4"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 5 */}
                <button
                  onClick={() => setTraditionalContent(5)}
                  className={`absolute top-[55%] left-[7%] xl:left-[8%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 5 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 5"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 6 */}
                <button
                  onClick={() => setTraditionalContent(6)}
                  className={`absolute top-[25%] left-[20%] xl:left-[21%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 6 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 6"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 7 */}
                <button
                  onClick={() => setTraditionalContent(7)}
                  className={`absolute top-[9%] left-[21%] xl:left-[22%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 7 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 7"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 8 */}
                <button
                  onClick={() => setTraditionalContent(8)}
                  className={`absolute top-[7%] right-[51%] xl:right-[52%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 8 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 8"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>
                


              </div>


              {/* Content */}
              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-end lg:justify-start gap-10 md:mr-20 lg:mr-20 xl:mr-40 text-right mb-20 md:mb-20 lg:mb-30 xl:mb-40 2xl:mb-60 3xl:mb-70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="3xl:mt-100 2xl:mt-80 xl:mt-60 lg:mt-50 md:mt-45 mb-20 md:mb-0 px-5 md:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النمط الانتقـالي</h2>
                        <p className="lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify 2xl:leading-11 3xl:leading-13 md:w-70 lg:w-70 xl:w-90 2xl:w-120 3xl:w-140 text-white mt-5">يساعد هذا الطراز على تحقيق انتقال متدرج بين البيئات العمرانية المختلفـة، من خلال تبسيــط العناصر المعمارية كالمداخل والأقواس والزخارف مما يُسهم في خلق مشهــد عمراني متناغــم يكون محيط بالمناطق التاريخية والطرق الرئيسية.</p>
                      </motion.div>
                    )}

                    {traditionalContent === 1 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/door.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد المدخل</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تكـــون بارزة بــــدرف خشبية وبتفاصيــــل مبسطــــــــة وزخارف غائرة.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد المدخل</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تكـــون بارزة بــــدرف خشبية وبتفاصيــــل مبسطــــــــة وزخارف غائرة.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 2 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/arches.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الأقواس</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تظهر الأقواس بشكل مبسط وتتركز الزخارف أعلى القوس لتعكس الطابع المحلي.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الأقواس</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تظهر الأقواس بشكل مبسط وتتركز الزخارف أعلى القوس لتعكس الطابع المحلي.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 3 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/windows.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النوافذ</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تكون النوافذ في الطراز الانتقالي مزيج بين المستطيلات والمربعات والفتحات المقوسة شبه دائرية وقد تكون النوافذ أطول بشكل عام.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النوافذ</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تكون النوافذ في الطراز الانتقالي مزيج بين المستطيلات والمربعات والفتحات المقوسة شبه دائرية وقد تكون النوافذ أطول بشكل عام.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 4 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/cars.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">مدخل السيارة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">مصمَّم بتفاصيل وزخارف مبسطة، واضح المعالم، ومتناسق مع تصميم السور.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">مدخل السيارة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">مصمَّم بتفاصيل وزخارف مبسطة، واضح المعالم، ومتناسق مع تصميم السور.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 5 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/wall.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">السور</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">يُصمَّم السور بأسلوب يجمع بين الحداثة وبعض التفاصيل من الطراز التقليدي، ليكون متناغمًا مع واجهة المبنى ويُخفي الخدمات.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">السور</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">يُصمَّم السور بأسلوب يجمع بين الحداثة وبعض التفاصيل من الطراز التقليدي، ليكون متناغمًا مع واجهة المبنى ويُخفي الخدمات.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 6 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/balcony.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الشرفة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تصمم الشرفات بشكل مبسط ومتناسق مع الواجهات وهي أروقة خارجية مظللة، متصلة مباشرة بالفراغات الداخلية، مع إطلالة على فناء داخلي أو حديقة خارجية.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الشرفة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تصمم الشرفات بشكل مبسط ومتناسق مع الواجهات وهي أروقة خارجية مظللة، متصلة مباشرة بالفراغات الداخلية، مع إطلالة على فناء داخلي أو حديقة خارجية.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 7 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/decorations.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الزخارف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تستخدم الزخارف باسلوب مبسط وتظهر فوق المداخـــل والنوافــــذ والأقواس.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الزخارف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تستخدم الزخارف باسلوب مبسط وتظهر فوق المداخـــل والنوافــــذ والأقواس.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 8 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/transitional/summit.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد القمة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">دروة السطــــــح منخفضـــــــــة وبسيطة بشُــــــــرف مسننة مستوحاة من الطراز التقليدي.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد القمة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">دروة السطــــــح منخفضـــــــــة وبسيطة بشُــــــــرف مسننة مستوحاة من الطراز التقليدي.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowTransitional(false);
                        setTraditionalContent(0);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowDesignPatterns(false);
                        setShowTransitional(false);    
                        setTraditionalContent(0);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        if (traditionalContent !== 0) {
                          setTraditionalContent(0);
                        } else {
                          setShowTransitional(false);
                        }
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>

      {/* صفحة Contemporary - يظهر عند الضغط على contemporary */}
      <AnimatePresence>
        {showContemporary && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Building Image على اليسار */}
              <div className="absolute left-0 top-0 mt-20 lg:mt-20 xl:mt-25 2xl:mt-30 3xl:mt-40 z-10  w-[400px] md:w-[600px] lg:w-[700px] xl:w-[700px] 2xl:w-[880px] 3xl:w-[1100px]">
                <img
                  src="/dist/contemporary/bulding-image.png"
                  alt="building"
                  className="w-full h-auto"
                />

                {/* Hotspot 1 */}
                <button
                  onClick={() => setTraditionalContent(1)}
                  className={`absolute top-[60%] left-[77%] xl:left-[78%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all z-20 ${
                    traditionalContent === 1 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 1"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 2 */}
                <button
                  onClick={() => setTraditionalContent(2)}
                  className={`absolute top-[47%] left-[53%] xl:left-[54%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 2 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 2"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 3 */}
                <button
                  onClick={() => setTraditionalContent(3)}
                  className={`absolute top-[33%] left-[70%] xl:left-[71%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 3 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 3"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 4 */}
                <button
                  onClick={() => setTraditionalContent(4)}
                  className={`absolute top-[60%] left-[34%] xl:left-[35%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 4 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 4"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 5 */}
                <button
                  onClick={() => setTraditionalContent(5)}
                  className={`absolute top-[55%] left-[10%] xl:left-[11%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 5 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 5"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 6 */}
                <button
                  onClick={() => setTraditionalContent(6)}
                  className={`absolute top-[22%] left-[20%] xl:left-[21%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 6 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 6"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 7 */}
                <button
                  onClick={() => setTraditionalContent(7)}
                  className={`absolute top-[9%] left-[49%] xl:left-[50%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 7 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 7"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>

                {/* Hotspot 8 */}
                <button
                  onClick={() => setTraditionalContent(8)}
                  className={`absolute top-[20%] right-[32%] xl:right-[33%] w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 rounded-full cursor-pointer hover:opacity-70 transition-all ${
                    traditionalContent === 8 ? "bg-white shadow-xl shadow-white" : ""
                  }`}
                  title="hotspot 8"
                >
                  <motion.img 
                    src="/dist/traditional/hotspots.png"
                    alt="hotspot"
                    className="w-full h-full object-cover rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </button>
                


              </div>


              {/* Content */}
              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-end lg:justify-start gap-10 md:mr-20 lg:mr-20 xl:mr-40 text-right mb-20 md:mb-20 lg:mb-30 xl:mb-40 2xl:mb-60 3xl:mb-70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="3xl:mt-100 2xl:mt-80 xl:mt-60 lg:mt-50 md:mt-45 mb-20 md:mb-0 px-5 md:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النمط المعاصر</h2>
                        <p className="lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify 2xl:leading-11 3xl:leading-13 md:w-70 lg:w-70 xl:w-90 2xl:w-120 3xl:w-140 text-white mt-5">يتميّز الطراز المعاصر بالبساطة والتجريد، ويؤكد المداخـل بشكل واضـــح، مع توظيــف الزخارف بأسلوب مجرد، ضمن تكوينات معماريـة بسيطة ومنظمة، ويكـون واقع في بقية مناطق المدينة.</p>
                      </motion.div>
                    )}

                    {traditionalContent === 1 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/door.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد المدخل</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تأكيد المدخل الرئيسي عبر عناصر معمارية أو بالزخارف المجردة.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد المدخل</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تأكيد المدخل الرئيسي عبر عناصر معمارية أو بالزخارف المجردة.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 2 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/arches.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الأقواس</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">في حال تطبيق الأقواس تصمم بخطوط بسيطة ومجردة.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الأقواس</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">في حال تطبيق الأقواس تصمم بخطوط بسيطة ومجردة.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 3 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/windows.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النوافذ</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تتميز النوافذ في النمط المعاصر بفتحات أكبر وتكون ممتدة رأسيًا غالبًا، ومتناسقة مع تصميم الواجهة.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">النوافذ</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تتميز النوافذ في النمط المعاصر بفتحات أكبر وتكون ممتدة رأسيًا غالبًا، ومتناسقة مع تصميم الواجهة.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 4 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/cars.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">مدخل السيارة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تُصمَّم بشكل بسيط وواضح، خالية من التعقيد، مع استخدام خطوط مستقيمة ومواد حديثة متناسقة مع السور.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">مدخل السيارة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تُصمَّم بشكل بسيط وواضح، خالية من التعقيد، مع استخدام خطوط مستقيمة ومواد حديثة متناسقة مع السور.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 5 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/wall.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">السور</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">في حال تطبيق الأقواس تصمم بخطوط بسيطة ومجردة.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">السور</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">في حال تطبيق الأقواس تصمم بخطوط بسيطة ومجردة.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 6 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/balcony.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الشرفة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تصمم الشرفات بشكل مبسط ومتناسق مع الواجهات وهي أروقة خارجية مظللة، متصلة مباشرة بالفراغات الداخلية، مع إطلالة على فناء داخلي أو حديقة خارجية.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الشرفة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تصمم الشرفات بشكل مبسط ومتناسق مع الواجهات وهي أروقة خارجية مظللة، متصلة مباشرة بالفراغات الداخلية، مع إطلالة على فناء داخلي أو حديقة خارجية.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 7 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/decorations.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الزخارف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تُطبــق زخــــــــــــارف مجـــــــــــــــــردة ومستوحــــــاة من الزخـــرفة الأساسية بشكل متدرج أو متلاشي أو منتظم.</p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">الزخارف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">تُطبــق زخــــــــــــارف مجـــــــــــــــــردة ومستوحــــــاة من الزخـــرفة الأساسية بشكل متدرج أو متلاشي أو منتظم.</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    {traditionalContent === 8 && (
                      <motion.div
                      key={traditionalContent}
                      className="flex flex-col items-center justify-around lg:justify-start w-full "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-around lg:justify-start w-full">
                          <img 
                            src="/dist/contemporary/summit.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />

                          <div className="flex flex-col w-full px-5 md:px-10 lg:hidden">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد القمة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">القمة تكون مستوية مع خط أفقي مستقيم  أو متدرج بشكل مبسط يوضح نهاية المبنى. </p>
                          </div>
                        </div>
                        <motion.div 
                        className="hidden lg:flex flex-col w-full mt-10 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        >
                          <div className="w-40 md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">تأكيد القمة</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2">القمة تكون مستوية مع خط أفقي مستقيم  أو متدرج بشكل مبسط يوضح نهاية المبنى. </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => setShowContemporary(false)}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowDesignPatterns(false);
                        setShowContemporary(false);    
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        if (traditionalContent !== 0) {
                          setTraditionalContent(0);
                        } else {
                          setShowContemporary(false);
                        }
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>




      {/* صفحة Ahsa Arches - يظهر عند الضغط */}
      <AnimatePresence>
        {showAhsaArches && (
          <motion.div 
            className="fixed inset-0 bg-cover bg-center z-50 min-h-screen flex flex-col"
            style={{ backgroundImage: "url('/dist/home/background.png')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ 
              opacity: {
                duration: 0.3,
                delay: isClosing ? 0 : 1
              }
            }}
          >
            <motion.button
              onClick={() => {
                setShowAhsaArches(false);;
              }}
              className="absolute top-8 left-8 bg-transparent cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration: 0.1 }}
            >
              <img 
                src="/dist/home-icon.png" 
                alt="رجوع" 
                className="w-10 h-10"
              />
            </motion.button>
            <div className="flex-1 flex items-center justify-center mb-15">
              <div className="flex flex-col lg:flex-row gap-25  justify-center max-w-6xl px-4">
                <motion.img 
                  src="/dist/arches-page/decorations.png" 
                  alt="pattern-map" 
                  className="w-40 h-40 md:w-65 md:h-65 object-cover cursor-pointer  transition-shadow duration-300 z-3"
                  initial={{ 
                    opacity: 1,
                    [isMobile ? "y" : "x"]: isMobile ? 260 : -360   // نفس الجمب الأصلية
                  }}

                  animate={{
                    [isMobile ? "y" : "x"]: 0,                        // يرجع لوضعه الطبيعي
                    x: isMobile 
                    ? showDecorations 
                        ? 0 
                        : 0 
                    : showDecorations 
                        ? -350 
                        : 0,
                    y: isMobile 
                    ? showDecorations 
                        ? 250
                        : 0 
                    : showDecorations 
                        ? 20 
                        : 0,
                    opacity: showSegmented || showSimplified ? 0 : 1,  // يختفي عند showDecorations أو showSegmented
                    scale: showDecorations ? 0.85 : 1               // حجم أصغر عند showDecorations
                  }}

                  transition={{
                    delay: showDecorations || showSegmented || showSimplified ? 0.1 : 1,               // fade delay مختلف
                    duration: showDecorations ? 0.5 : 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                    onClick={() => setShowDecorations(true)}
                />
                <motion.img 
                  src="/dist/arches-page/segmented.png" 
                  alt="design-patterns" 
                  className="w-40 h-40 md:w-65 md:h-65 object-cover cursor-pointer transition-shadow duration-300 z-1"
                  onClick={() => setShowSegmented(true)}
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: showDecorations || showSimplified ? 0 : 1,
                    scale: showSegmented ? 0.85 : 1 }}
                  transition={{
                    delay: showDecorations || showSegmented || showSimplified ? 0.1 : 1,   // fade delay غير عن الأساسي
                    duration: showDecorations ? 0.5 : 0.1, // مدة الفيد
                    
                  }}
                />
                <motion.img 
                  src="/dist/arches-page/simplified.png" 
                  alt="alahsa-arches" 
                  className="w-40 h-40 md:w-65 md:h-65 object-cover cursor-pointer transition-shadow duration-300 z-2"
                  initial={{ 
                    opacity: 1,
                    [isMobile ? "y" : "x"]: isMobile ? -260 : 360   // نفس الجمب الأصلية
                  }}

                  animate={{
                    [isMobile ? "y" : "x"]: 0,                        // يرجع لوضعه الطبيعي
                    x: isMobile 
                    ? showSimplified 
                        ? 0 
                        : 0 
                    : showSimplified 
                        ? 350 
                        : 0,
                    y: isMobile 
                    ? showSimplified 
                        ? -250 
                        : 0 
                    : showSimplified 
                        ? 20 
                        : 0,
                    opacity: showSegmented || showDecorations ? 0 : 1,  // يختفي عند showDecorations أو showSegmented
                    scale: showSimplified ? 0.85 : 1               // حجم أصغر عند showDecorations
                  }}

                  transition={{
                    delay: showSimplified || showSegmented || showDecorations ? 0.1 : 1,               // fade delay مختلف
                    duration: showSimplified ? 0.5 : 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                
                  onClick={() => setShowSimplified(true)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* صفحة showSimplified - يظهر عند الضغط */}
      <AnimatePresence>
        {showSimplified && (
          <motion.div 
            className="fixed inset-0 bg-cover bg-center z-50 min-h-screen flex flex-col"
            style={{ backgroundImage: "url('/dist/home/background.png')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ 
              opacity: {
                duration: 1,
                delay: isClosing ? 0 : 1
              }
            }}
          >
            <div className="absolute top-8 left-8 flex gap-10">

              <motion.button
                onClick={() => {
                  setShowDecorations(false);
                  setShowSimplified(false);  
                  setShowAhsaArches(false);  
                }}
                className=" bg-transparent cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img 
                  src="/dist/home-icon.png" 
                  alt="رجوع" 
                  className="w-10 h-auto"
                />
              </motion.button>

              <motion.button
                onClick={() => {
                  setShowSimplified(false);
                }}
                className=" bg-transparent cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img 
                  src="/dist/back-icon.png" 
                  alt="رجوع" 
                  className="w-8 h-auto"
                />
              </motion.button>
            </div>
            <div className="flex-1 flex items-center justify-center mb-15">
              <div className="flex flex-col lg:flex-row gap-25  justify-center max-w-6xl px-4">
                <motion.img 
                  src="/dist/arches-page/ibrahim/main-Image.png" 
                  alt="pattern-map" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer  transition-shadow duration-300 z-3"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? 220 : -300 }}
                    animate={{ [isMobile ? "y" : "x"]: 0 }}
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 120,
                      damping: 12
                    }}
                    onClick={() => setShowIbrahim(true)}
                />
                <motion.img 
                  src="/dist/arches-page/alFakhriya/main-Image.png" 
                  alt="design-patterns" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer transition-shadow duration-300 z-1"
                  onClick={() => setShowAlFakhriya(true)}
                />
                <motion.img 
                  src="/dist/arches-page/mosque/main-Image.png" 
                  alt="alahsa-arches" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer transition-shadow duration-300 z-2"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? -220 : 300 }}
                  animate={{ [isMobile ? "y" : "x"]: 0 }}
                  transition={{
                    delay: 2,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                  onClick={() => setShowMosque(true)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* صفحة showIbrahim - يظهر عند الضغط على showIbrahim */}
      <AnimatePresence>
        {showIbrahim && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس المدبب   </h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد القوس المدبب في الأرُوقة، ويتميز بارتكازه على أعمدة دائرية تمنحه ثباتًا وجمالًا هندسيًا. وقد تم تطبيق هذا النوع من الأقواس في قصر إبراهيم.</p>
                          </div>


                          <img 
                            src="/dist/arches-page/ibrahim/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/alhofuf-airport/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس المدبب</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد القوس المدبب في الأرُوقة، ويتميز بارتكازه على أعمدة دائرية تمنحه ثباتًا وجمالًا هندسيًا. وقد تم تطبيق هذا النوع من الأقواس في قصر إبراهيم.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowIbrahim(false);
                        setShowSimplified(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowSimplified(false);
                        setShowIbrahim(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowIbrahim(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>


      {/* صفحة showAlFakhriya - يظهر عند الضغط على showAlFakhriya */}
      <AnimatePresence>
        {showAlFakhriya && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس نصف الدائري</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يُعد القوس النصف دائري من أكثر الأقواس شيوعًا في الاحساء، ويتميز بجماله وبساطته الهندسية. يُستخدم هذا القوس في الأرُوقة والمداخل والنوافذ، ويظهر في العديد من المباني الأحسائية التقليدية مثل قصر الفاخرية، مما يعكس الطابع الأصيل  للمنطقة.</p>
                          </div>


                          <img 
                            src="/dist/arches-page/alFakhriya/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/alFakhriya/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس نصف الدائري</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يُعد القوس النصف دائري من أكثر الأقواس شيوعًا في الاحساء، ويتميز بجماله وبساطته الهندسية. يُستخدم هذا القوس في الأرُوقة والمداخل والنوافذ، ويظهر في العديد من المباني الأحسائية التقليدية مثل قصر الفاخرية، مما يعكس الطابع الأصيل  للمنطقة.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowAlFakhriya(false);
                        setShowSimplified(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowSimplified(false);
                        setShowAlFakhriya(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowAlFakhriya(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>


      {/* صفحة showMosque - يظهر عند الضغط على showMosque */}
      <AnimatePresence>
        {showMosque && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس المدبب</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">القوس الإبراهيمي هو قوس مدبب يتميز بقمة حادة، ويُستخدم بشكل أساسي في الأروقة والبوابات، حيث يضفي أناقة وارتفاعًا بصريًا على المبنى، وقد تم تطبيق هذا القوس في مسجد الجعلانية.</p>
                          </div>


                          <img 
                            src="/dist/arches-page/mosque/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/mosque/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس المدبب</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">القوس الإبراهيمي هو قوس مدبب يتميز بقمة حادة، ويُستخدم بشكل أساسي في الأروقة والبوابات، حيث يضفي أناقة وارتفاعًا بصريًا على المبنى، وقد تم تطبيق هذا القوس في مسجد الجعلانية.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowMosque(false);
                        setShowSimplified(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowSimplified(false);
                        setShowMosque(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowMosque(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>



      {/* صفحة showSegmented - يظهر عند الضغط */}
      <AnimatePresence>
        {showSegmented && (
          <motion.div 
            className="fixed inset-0 bg-cover bg-center z-50 min-h-screen flex flex-col bg-red-500"
            style={{ backgroundImage: "url('/dist/home/background.png')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ 
              opacity: {
                duration: 1,
                delay: isClosing ? 0 : 1
              }
            }}
          >
            <div className="absolute top-8 left-8 flex gap-10">

              <motion.button
                onClick={() => {
                  setShowDecorations(false);
                  setShowSegmented(false);  
                  setShowAhsaArches(false);  
                }}
                className=" bg-transparent cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img 
                  src="/dist/home-icon.png" 
                  alt="رجوع" 
                  className="w-10 h-auto"
                />
              </motion.button>

              <motion.button
                onClick={() => {
                  setShowSegmented(false);
                }}
                className=" bg-transparent cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img 
                  src="/dist/back-icon.png" 
                  alt="رجوع" 
                  className="w-8 h-auto"
                />
              </motion.button>
            </div>
            <div className="flex-1 flex items-center justify-center mb-15">
              <div className="flex flex-col lg:flex-row gap-25  justify-center max-w-6xl px-4">
                <motion.img 
                  src="/dist/arches-page/ibrahim2/main-Image.png" 
                  alt="pattern-map" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer  transition-shadow duration-300 z-3"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? 220 : -300 }}
                    animate={{ [isMobile ? "y" : "x"]: 0 }}
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 120,
                      damping: 12
                    }}
                    onClick={() => setShowIbrahim2(true)}
                />
                <motion.img 
                  src="/dist/arches-page/school/main-Image.png" 
                  alt="design-patterns" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer transition-shadow duration-300 z-1"
                  onClick={() => setShowSchool(true)}
                />
                <motion.img 
                  src="/dist/arches-page/region/main-Image.png" 
                  alt="alahsa-arches" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer transition-shadow duration-300 z-2"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? -220 : 300 }}
                  animate={{ [isMobile ? "y" : "x"]: 0 }}
                  transition={{
                    delay: 2,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                  onClick={() => setShowRegion(true)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* صفحة showIbrahim2 - يظهر عند الضغط على showIbrahim2 */}
      <AnimatePresence>
        {showIbrahim2 && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس  مفصص</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بقصر ابراهيم، يعتبر عنصراً معمارياً تراثياً ويستخدم في أروقة المباني.</p>
                          </div>


                          <img 
                            src="/dist/arches-page/ibrahim2/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/ibrahim2/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس  مفصص</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بقصر ابراهيم، يعتبر عنصراً معمارياً تراثياً ويستخدم في أروقة المباني.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowIbrahim2(false);
                        setShowSegmented(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowSegmented(false);
                        setShowIbrahim2(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowIbrahim2(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>


      {/* صفحة school - يظهر عند الضغط على school */}
      <AnimatePresence>
        {showSchool && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس  مفصص</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يرتكز هذا القوس على أعمدة مربعة، ويُستخدم تقليدياً في أروقة المباني والشرفات، حيث يوجد كعنصر معماري مميز في المدرسة الأميرية.</p>
                          </div>


                          <img 
                            src="/dist/arches-page/school/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/school/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس  مفصص</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يرتكز هذا القوس على أعمدة مربعة، ويُستخدم تقليدياً في أروقة المباني والشرفات، حيث يوجد كعنصر معماري مميز في المدرسة الأميرية.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowSchool(false);
                        setShowSegmented(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowSegmented(false);
                        setShowSchool(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowSchool(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>


      {/* صفحة school - يظهر عند الضغط على school */}
      <AnimatePresence>
        {showRegion && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس المُفصص والمدبب</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بحي النعاثل، يعتبر عنصراً معمارياً تراثياً ويستخدم في أروقة المباني .</p>
                          </div>


                          <img 
                            src="/dist/arches-page/region/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/region/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">القوس المُفصص والمدبب</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بحي النعاثل، يعتبر عنصراً معمارياً تراثياً ويستخدم في أروقة المباني .</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowRegion(false);
                        setShowSegmented(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowSegmented(false);
                        setShowRegion(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowRegion(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>


      {/* صفحة showAlhofuf - يظهر عند الضغط على showAlhofuf */}
      <AnimatePresence>
        {showAlhofuf && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بمطار الهفوف القديم، يتميز بزخرفة ثلاثية البتلات، والتي تظهر بتميز بأعلى القوس، حيث يستعمل القوس بالأروقه والمداخل .</p>
                          </div>


                          <img 
                            src="/dist/arches-page/alhofuf-airport/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/alhofuf-airport/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-60 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بمطار الهفوف القديم، يتميز بزخرفة ثلاثية البتلات، والتي تظهر بتميز بأعلى القوس، حيث يستعمل القوس بالأروقه والمداخل.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowAlhofuf(false);
                        setShowDecorations(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowDecorations(false);
                        setShowAlhofuf(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowAlhofuf(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>



      {/* صفحة docerations - يظهر عند الضغط */}
      <AnimatePresence>
        {showDecorations && (
          <motion.div 
            className="fixed inset-0 bg-cover bg-center z-50 min-h-screen flex flex-col"
            style={{ backgroundImage: "url('/dist/home/background.png')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ 
              opacity: {
                duration: 1,
                delay: isClosing ? 0 : 1
              }
            }}
          >
            <div className="absolute top-8 left-8 flex gap-10">

              <motion.button
                onClick={() => {
                  setShowDecorations(false);
                  setShowCaesarean(false);  
                  setShowAhsaArches(false);  
                }}
                className=" bg-transparent cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img 
                  src="/dist/home-icon.png" 
                  alt="رجوع" 
                  className="w-10 h-auto"
                />
              </motion.button>

              <motion.button
                onClick={() => {
                  setShowDecorations(false);
                }}
                className=" bg-transparent cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <img 
                  src="/dist/back-icon.png" 
                  alt="رجوع" 
                  className="w-8 h-auto"
                />
              </motion.button>
            </div>
            <div className="flex-1 flex items-center justify-center mb-15">
              <div className="flex flex-col lg:flex-row gap-25  justify-center max-w-6xl px-4">
                <motion.img 
                  src="/dist/arches-page/caesarean/main-Image.png" 
                  alt="pattern-map" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer  transition-shadow duration-300 z-3"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? 220 : -290 }}
                    animate={{ [isMobile ? "y" : "x"]: 0 }}
                    transition={{
                      delay: 2,
                      type: "spring",
                      stiffness: 120,
                      damping: 12
                    }}
                    onClick={() => setShowCaesarean(true)}
                />
                <motion.img 
                  src="/dist/arches-page/alhofuf-airport/main-Image.png" 
                  alt="design-patterns" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer transition-shadow duration-300 z-1"
                  onClick={() => setShowAlhofuf(true)}
                />
                <motion.img 
                  src="/dist/arches-page/marzia-palace/main-Image.png" 
                  alt="alahsa-arches" 
                  className="w-30 h-30 md:w-50 md:h-50 object-cover cursor-pointer transition-shadow duration-300 z-2"
                  initial={{ opacity: 1, [isMobile ? "y" : "x"]: isMobile ? -220 : 310 }}
                  animate={{ [isMobile ? "y" : "x"]: 0 }}
                  transition={{
                    delay: 2,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                  onClick={() => setShowMarzia(true)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>




      {/* صفحة showCaesarean - يظهر عند الضغط على showCaesarean */}
      <AnimatePresence>
        {showCaesarean && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس ببوابة سوق القيصرية التاريخي، يتزين بزخرفة ثلاثية البتلات على امتداد القوس، ويعلوه زخارف أحسائية تزين القوس، منها النجمة الأحسائية والهيلة .</p>
                          </div>


                          <img 
                            src="/dist/arches-page/caesarean/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/caesarean/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس ببوابة سوق القيصرية التاريخي، يتزين بزخرفة ثلاثية البتلات على امتداد القوس، ويعلوه زخارف أحسائية تزين القوس، منها النجمة الأحسائية والهيلة .</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowCaesarean(false);
                        setShowDecorations(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowDecorations(false);
                        setShowCaesarean(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowCaesarean(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>



      {/* صفحة showAlhofuf - يظهر عند الضغط على showAlhofuf */}
      <AnimatePresence>
        {showAlhofuf && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بمطار الهفوف القديم، يتميز بزخرفة ثلاثية البتلات، والتي تظهر بتميز بأعلى القوس، حيث يستعمل القوس بالأروقه والمداخل .</p>
                          </div>


                          <img 
                            src="/dist/arches-page/alhofuf-airport/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/alhofuf-airport/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بمطار الهفوف القديم، يتميز بزخرفة ثلاثية البتلات، والتي تظهر بتميز بأعلى القوس، حيث يستعمل القوس بالأروقه والمداخل.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowAlhofuf(false);
                        setShowDecorations(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowDecorations(false);
                        setShowAlhofuf(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowAlhofuf(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>


      {/* صفحة showMarzia - يظهر عند الضغط على showMarzia */}
      <AnimatePresence>
        {showMarzia && (
          <>
            <motion.div 
              className="fixed inset-0 z-50 min-h-screen flex flex-col overflow-y-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundImage: "url('/dist/home/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >

              <div className="relative z-1 min-h-screen flex flex-col w-full ">
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-around "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    {traditionalContent === 0 && (
                      <motion.div
                      key={traditionalContent}
                      className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{delay: 0.5, duration: 0.5 }}
                      >
                        <div className=" flex-col lg:flex-row items-center justify-around w-full h-full hidden lg:flex">

                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بقصر مرضية التاريخي، يتزين بزخرفة أحسائية بأعلى القوس، حيث يتواجد هذا القوس بالأروقه .</p>
                          </div>


                          <img 
                            src="/dist/arches-page/marzia-palace/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-40  md:w-90 lg:w-90 xl:w-110 2xl:w-130 3xl:w-180"
                          />


                        </div>




                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full lg:hidden">

                          


                          <img 
                            src="/dist/arches-page/marzia-palace/page/Image.png" 
                            alt="المدخل" 
                            className="h-auto w-60  md:w-100 lg:w-70 xl:w-80 2xl:w-100 3xl:w-130"
                          />



                          <div className="flex flex-col px-5">
                            <h2 className="text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl ExtraBold text-white">قوس مزخرف</h2>
                            <p className="text-md md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-justify md:leading-9 md:mt-5 2xl:leading-11 3xl:leading-13  text-white mt-2 w-80 md:w-100 lg:w-90 xl:w-110 2x:w-130 3xl:w-150">يوجد هذا القوس بقصر مرضية التاريخي، يتزين بزخرفة أحسائية بأعلى القوس، حيث يتواجد هذا القوس بالأروقه والمداخل.</p>
                          </div>


                        </div>


                      </motion.div>
                    )}

                  </AnimatePresence>

                  </motion.div>

                  <div className="absolute top-8 left-8 flex gap-10">
                    <motion.button
                      onClick={() => {
                        setShowMarzia(false);
                        setShowDecorations(false)
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/3pages-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowDecorations(false);
                        setShowMarzia(false);  
                        setShowAhsaArches(false);  
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/home-icon.png" 
                        alt="رجوع" 
                        className="w-10 h-auto"
                      />
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        setShowMarzia(false);
                      }}
                      className=" bg-transparent cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <img 
                        src="/dist/back-icon.png" 
                        alt="رجوع" 
                        className="w-8 h-auto"
                      />
                    </motion.button>
                  </div>
                

                
              </div>
            </motion.div>

            
          </>
          
        )}
      </AnimatePresence>



      {/* الصور الثلاث في المنتصف */}
      <div className="flex-1 flex items-center justify-center mt-20">
        <div className="flex flex-col lg:flex-row gap-25  justify-center max-w-6xl px-4">
          <motion.img 
            src="/dist/home/pattern-map.png" 
            alt="pattern-map" 
            className="w-40 h-40 md:w-65 md:h-65 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setShowPatternMap(true)}
            initial={{ opacity: 1 }}
            animate={{
              opacity: (!showDesignPatterns && !showAhsaArches) ? 1 : 0
            }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />
          <motion.img 
            src="/dist/home/design-patterns.png" 
            alt="design-patterns" 
            className="w-40 h-40 md:w-65 md:h-65 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setShowDesignPatterns(true)}
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: isMobile 
                  ? showDesignPatterns 
                      ? -20 
                      : 0 
                  : showDesignPatterns 
                      ? 20 
                      : 0,
              opacity: showAhsaArches ? 0 : 1
            }}
            transition={{
              delay: showDesignPatterns ? 0.4 : 0.1,
              duration: showDesignPatterns ? 0.6 : 0.5,
              ease: showAhsaArches ? "" : "easeInOut"
            }}
          />
          <motion.img 
            src="/dist/home/alahsa-arches.png" 
            alt="alahsa-arches" 
            className="w-40 h-40 md:w-65 md:h-65 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setShowAhsaArches(true)}
            initial={{ opacity: 1 }}
            animate={{
              opacity: showDesignPatterns ? 0 : 1,
              x: isMobile 
                  ? showAhsaArches 
                      ? 0 
                      : 0 
                  : showAhsaArches 
                      ? 360 
                      : 0,
              y: isMobile 
                  ? showAhsaArches 
                      ? -300 
                      : 0 
                  : showAhsaArches 
                      ? 20 
                      : 0,
            }}
            transition={{
              delay: showAhsaArches ? 0.4 : 0.1,
              duration: showAhsaArches ? 0.6 : 0.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* شريط الشعارات في الأسفل */}
      <motion.div 
        className="flex justify-between items-end p-8"
        initial={{ opacity: 1 }}
        animate={showDesignPatterns ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <img 
          src="/dist/home/alahsa-logo.png" 
          alt="alahsa-logo" 
          className="h-20 md:h-30 w-auto"
        />

        <img 
          src="/dist/home/architecture-logo.png" 
          alt="architecture-logo" 
          className="h-10 md:h-20 w-auto"
        />
      </motion.div>
    </main>
  );
}

export default App
