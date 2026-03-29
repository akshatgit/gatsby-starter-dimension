import React from 'react'

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white relative overflow-hidden">
    {/* Subtle background gradient */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 40%, #f0f4ff 0%, transparent 70%)',
      }}
    />

    <div className="relative z-10 max-w-2xl">
      <p className="text-apple-mid-gray text-sm font-medium tracking-widest uppercase mb-4">
        Senior Site Reliability Engineer
      </p>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-apple-dark-gray mb-6">
        Akshat Sinha
      </h1>
      <p className="text-base md:text-lg text-apple-mid-gray leading-relaxed mb-10 max-w-2xl mx-auto">
        Senior SRE at{' '}
        <a href="https://www.rubrik.com" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline">Rubrik</a>
        {' '}with 6+ years of industry experience across{' '}
        <a href="https://about.meta.com" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline">Meta</a>
        ,{' '}
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline">TikTok</a>
        , and{' '}
        <a href="https://www.media.net" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline">Media.Net</a>
        . I build large-scale distributed infrastructure, drive observability and reliability at scale, and research systems security — publishing at USENIX Security, IMC, and ICVGIP.
        I have discovered and disclosed CVEs in open source AI projects, reviewed artifacts for OOPSLA and MLSys, and hold an MS in Computer Science from the University of Wisconsin–Madison.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#work"
          className="px-7 py-3 bg-apple-blue text-white text-sm font-medium rounded-full hover:bg-apple-blue-hover transition-colors duration-200"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-7 py-3 bg-apple-gray text-apple-dark-gray text-sm font-medium rounded-full hover:bg-apple-border transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-apple-border">
      <span className="text-xs text-apple-mid-gray">Scroll</span>
      <div className="w-px h-8 bg-apple-border" />
    </div>
  </section>
)

export default Hero
