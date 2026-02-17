import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Music, ChevronDown, Play, X, Cross, Image as ImageIcon, VideoOff, Upload } from 'lucide-react';
import FadeIn from './components/FadeIn';
import AudioPlayer from './components/AudioPlayer';
import RomanticImage from './components/RomanticImage';

const App: React.FC = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoSrc, setVideoSrc] = useState("/our-video.mp4");
  
  const storyRef = useRef<HTMLDivElement>(null);

  const startStory = () => {
    setMusicPlaying(true);
    storyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setVideoError(false);
    }
  };

  return (
    <div className="min-h-screen font-serif bg-cream text-stone-800 overflow-x-hidden selection:bg-rose-100">
      <AudioPlayer isPlaying={musicPlaying} togglePlay={() => setMusicPlaying(!musicPlaying)} />

      {/* --- LANDING SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image Layer with overlay */}
        <div className="absolute inset-0 z-0">
          <RomanticImage 
            src="/hero.jpg"
            alt="Jesutoni" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-800/20 to-cream/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <FadeIn delay={0.2} direction="down">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-wide leading-tight drop-shadow-md mb-8">
              For the girl whose beauty <br/>
              <span className="italic font-script text-5xl md:text-7xl lg:text-8xl text-rose-100">caught my eyes...</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={1.5}>
            <p className="text-xl md:text-3xl text-stone-100 font-light tracking-wider mb-12 drop-shadow-sm">
              and whose love for Jesus captured my heart.
            </p>
          </FadeIn>

          <FadeIn delay={2.5}>
            <button 
              onClick={startStory}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg tracking-[0.2em] uppercase hover:bg-white/20 transition-all duration-700 rounded-sm"
            >
              Begin Our Story
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-sm text-white/70">
                <ChevronDown />
              </span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* --- SECTION 1: TIMELINE --- */}
      <div ref={storyRef}>
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 bg-cream">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <div className="flex justify-center mb-8 text-stone-400">
                <Stars size={32} strokeWidth={1} />
              </div>
              <h2 className="text-5xl md:text-6xl mb-12 font-script text-stone-800">365 Days + 120 More</h2>
            </FadeIn>

            <div className="space-y-8 text-xl md:text-2xl leading-relaxed font-light text-stone-600">
              <FadeIn delay={0.3}>
                <p>One year and four months ago, I didn’t know that the most beautiful girl I had ever seen would become my peace.</p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p>I didn’t know that your voice would become one of my favorite sounds.</p>
              </FadeIn>
              <FadeIn delay={0.9}>
                <p className="text-stone-800 font-normal">I didn’t know that your love for Jesus would inspire me the way it does.</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THREE THINGS --- */}
        <section className="min-h-screen px-6 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl tracking-widest uppercase text-stone-800 mb-4">What Made Me Stay</h2>
              <div className="w-24 h-[1px] bg-stone-300 mx-auto"></div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {/* Card 1 */}
              <FadeIn delay={0.2} className="group">
                <div className="bg-cream p-10 h-full border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="h-64 w-full bg-stone-200 mb-8 overflow-hidden">
                     <RomanticImage src="/beauty.jpg" alt="Beauty" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="text-3xl font-script mb-6 text-stone-800">Your Beauty</h3>
                  <div className="space-y-4 font-sans text-stone-600 font-light leading-7">
                    <p>You are very, very pretty. Not just in pictures. Not just dressed up.</p>
                    <p>But in the quiet moments. In your natural face. In your smile.</p>
                    <p className="italic text-stone-800">Sometimes I look at you and genuinely wonder how I got this lucky.</p>
                  </div>
                </div>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={0.4} className="group">
                <div className="bg-cream p-10 h-full border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="h-64 w-full bg-stone-200 mb-8 overflow-hidden">
                    <RomanticImage src="/voice.jpg" alt="Voice" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="text-3xl font-script mb-6 text-stone-800">Your Voice</h3>
                  <div className="space-y-4 font-sans text-stone-600 font-light leading-7">
                    <p>Your voice is soft, calming, and unforgettable.</p>
                    <p>Whether you’re praying, laughing, singing, or just talking about your day — I could listen for hours.</p>
                    <p className="italic text-stone-800">It feels like home.</p>
                  </div>
                </div>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={0.6} className="group">
                <div className="bg-cream p-10 h-full border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="h-64 w-full bg-stone-200 mb-8 overflow-hidden relative">
                    <RomanticImage src="/faith.jpg" alt="Faith" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                      <Cross className="text-white/80 w-12 h-12" strokeWidth={1} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-script mb-6 text-stone-800">Your Love for Jesus</h3>
                  <div className="space-y-4 font-sans text-stone-600 font-light leading-7">
                    <p>This is the strongest part. I love that you seek Him. I love that your heart is anchored in something bigger than both of us.</p>
                    <p>Your beauty caught my attention. Your voice made me smile.</p>
                    <p className="font-serif text-lg text-stone-900 border-l-2 border-rose-300 pl-4 py-1 mt-4">
                      But your relationship with Jesus made me respect you deeply.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: MIDNIGHT MEMORY (Dark Mode) --- */}
        <section className="min-h-screen bg-stone-850 text-stone-300 px-6 py-32 flex items-center justify-center relative overflow-hidden">
           {/* Subtle texture or stars */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
           <div className="max-w-3xl w-full relative z-10">
             <FadeIn>
               <div className="text-center mb-16">
                 <h2 className="text-5xl md:text-6xl font-script text-stone-100 mb-4">The Night I Slept in My Car</h2>
                 <p className="text-rose-200/60 uppercase tracking-widest text-sm">The Midnight Memory</p>
               </div>
             </FadeIn>

             <div className="space-y-12 font-sans font-light text-lg md:text-xl leading-relaxed pl-4 md:pl-0 border-l-2 md:border-l-0 border-stone-700">
               <FadeIn delay={0.2}>
                 <p>I’ll never forget that night. It was past midnight. The security sent me away.</p>
               </FadeIn>
               
               <FadeIn delay={0.4}>
                 <p>I should have gone home. <span className="text-white">But I didn’t want the night to end.</span></p>
               </FadeIn>

               <FadeIn delay={0.6}>
                 <p>So I slept in my car. Not because it was comfortable. But because being near you felt worth it.</p>
               </FadeIn>

               <FadeIn delay={0.8}>
                 <div className="bg-white/5 p-8 rounded-sm backdrop-blur-sm border border-white/10">
                   <p className="italic text-stone-200 mb-4">That night wasn’t glamorous. It wasn’t fancy. But it meant something to me.</p>
                   <p className="text-2xl md:text-3xl font-serif text-rose-100">
                     Because loving you has never felt like inconvenience.<br/>
                     It has always felt like intention.
                   </p>
                 </div>
               </FadeIn>
             </div>
           </div>
        </section>

        {/* --- NEW SECTION: MOMENTS OF GRACE GALLERY --- */}
        <section className="min-h-screen px-6 py-24 bg-rose-50/30">
          <div className="max-w-7xl mx-auto">
             <FadeIn className="text-center mb-20">
               <div className="flex justify-center mb-4 text-rose-300">
                 <ImageIcon size={24} strokeWidth={1} />
               </div>
               <h2 className="text-4xl md:text-5xl tracking-widest uppercase text-stone-800 mb-4">Moments of Grace</h2>
               <p className="font-script text-3xl text-stone-500">Every version of you is my favorite.</p>
             </FadeIn>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                {/* Large Featured Photo */}
                <FadeIn delay={0.1} className="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-sm shadow-md">
                   <RomanticImage src="/gallery1.jpg" alt="Moment 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 pointer-events-none">
                      <p className="text-white font-script text-3xl">Pure Joy</p>
                   </div>
                </FadeIn>

                {/* Vertical Photo */}
                <FadeIn delay={0.2} className="relative group overflow-hidden rounded-sm shadow-md">
                   <RomanticImage src="/gallery2.jpg" alt="Moment 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </FadeIn>

                {/* Vertical Photo */}
                <FadeIn delay={0.3} className="relative group overflow-hidden rounded-sm shadow-md">
                   <RomanticImage src="/gallery3.jpg" alt="Moment 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </FadeIn>

                {/* Landscape Photo */}
                <FadeIn delay={0.4} className="lg:col-span-2 relative group overflow-hidden rounded-sm shadow-md">
                   <RomanticImage src="/gallery4.jpg" alt="Moment 4" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 pointer-events-none">
                      <p className="text-white font-script text-3xl">Serenity</p>
                   </div>
                </FadeIn>

                {/* The Couple Photo */}
                <FadeIn delay={0.5} className="relative group overflow-hidden rounded-sm shadow-md border-4 border-white">
                   <RomanticImage src="/couple.jpg" alt="Us" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                   <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                   </div>
                </FadeIn>
             </div>
          </div>
        </section>

        {/* --- SECTION 4: THE FUTURE --- */}
        <section className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-24 text-center">
           <FadeIn>
             <h2 className="text-3xl md:text-4xl uppercase tracking-widest text-stone-400 mb-12">If This Is Just The Beginning...</h2>
           </FadeIn>

           <div className="max-w-2xl mx-auto space-y-6 text-xl md:text-2xl text-stone-700 font-light mb-20">
             <FadeIn delay={0.2}><p>If one year and four months has given me this many memories...</p></FadeIn>
             <FadeIn delay={0.4}><p>I can’t imagine what the future holds.</p></FadeIn>
             
             <div className="py-8 space-y-2 font-script text-4xl text-stone-900">
               <FadeIn delay={0.6}><p>More late nights.</p></FadeIn>
               <FadeIn delay={0.7}><p>More prayers together.</p></FadeIn>
               <FadeIn delay={0.8}><p>More growth.</p></FadeIn>
               <FadeIn delay={1.0}><p className="text-5xl text-rose-400 mt-4">More of you.</p></FadeIn>
             </div>

             <FadeIn delay={1.2}>
               <p className="font-sans">And if I had to choose again — <br/><span className="font-serif text-3xl font-semibold">I would still choose you.</span></p>
             </FadeIn>
           </div>

           <FadeIn delay={1.5} className="mb-24">
             <h1 className="text-6xl md:text-8xl font-script text-stone-900 mb-4">Happy Birthday, My Love.</h1>
             <p className="text-lg uppercase tracking-[0.3em] text-stone-500">This is only Chapter One</p>
           </FadeIn>

           <FadeIn delay={2.0}>
              <button 
                onClick={() => setShowVideo(true)}
                className="group flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full hover:bg-stone-800 hover:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Play size={18} fill="currentColor" />
                <span className="uppercase tracking-widest text-sm">One More Thing...</span>
              </button>
           </FadeIn>
        </section>
      </div>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-stone-400 text-sm font-sans">
        <p>&copy; 2024 Midnight & Grace. Forever yours.</p>
      </footer>

      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <button 
              onClick={() => {
                setShowVideo(false);
                setMusicPlaying(true); // Resume background music if you want
              }}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-md w-full bg-black rounded-lg overflow-hidden shadow-2xl border border-stone-800 relative"
            >
              {/* Actual Video Player */}
              {!videoError ? (
                <video 
                  className="w-full h-auto max-h-[80vh]" 
                  controls 
                  autoPlay 
                  playsInline
                  src={videoSrc}
                  onPlay={() => setMusicPlaying(false)} 
                  onEnded={() => setMusicPlaying(true)}
                  onError={() => setVideoError(true)}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="aspect-[9/16] w-full bg-stone-900 flex flex-col items-center justify-center p-8 text-center text-stone-400 border border-dashed border-stone-700">
                  <VideoOff size={48} className="mb-4 opacity-50" />
                  <p className="text-white font-script text-2xl mb-2">Video Missing</p>
                  
                  <label className="cursor-pointer mt-4 flex items-center gap-2 px-6 py-3 bg-stone-800 border border-stone-700 rounded-full hover:bg-stone-700 transition-all">
                    <Upload size={16} className="text-rose-400" />
                    <span className="text-xs font-sans font-bold text-stone-300 uppercase tracking-wide">Choose Video File</span>
                    <input 
                      type="file" 
                      accept="video/*" 
                      className="hidden" 
                      onChange={handleVideoUpload} 
                    />
                  </label>
                  <p className="text-[10px] text-stone-600 mt-3">Select your video from your device</p>
                </div>
              )}
              
              <div className="bg-stone-900 p-6 text-center">
                 <h3 className="text-white font-script text-3xl mb-1">For Us.</h3>
                 <p className="text-stone-400 text-xs tracking-widest uppercase">Forever & Always</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;