"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1200], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(16,185,129,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(245,158,11,0.06),transparent)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px]"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px]"
      />
      
      {/* Grid pattern with parallax */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, 50]) }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]"
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-64 h-64 border border-amber-500/20 rounded-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0],
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[10%] w-48 h-48 border border-emerald-500/20 rounded-full"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[25%] w-32 h-32 border border-amber-500/15 rotate-45"
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
