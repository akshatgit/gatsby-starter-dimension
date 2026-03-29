import React from 'react'

const tier1 = new Set(['Python', 'Kubernetes', 'Docker', 'Prometheus'])
const tier2 = new Set(['Kafka', 'Jenkins', 'Terraform', 'Grafana'])

const SkillBadge = ({ label }) => {
  if (tier1.has(label)) return (
    <span className="inline-block bg-apple-blue dark:bg-dark-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-1.5 mb-1.5">
      {label}
    </span>
  )
  if (tier2.has(label)) return (
    <span className="inline-block bg-apple-blue/10 dark:bg-dark-blue/15 text-apple-blue dark:text-dark-blue text-xs font-medium px-2.5 py-0.5 rounded-full mr-1.5 mb-1.5 ring-1 ring-apple-blue/30 dark:ring-dark-blue/30">
      {label}
    </span>
  )
  return (
    <span className="inline-block bg-apple-gray dark:bg-dark-elevated text-apple-mid-gray dark:text-dark-muted text-xs font-medium px-2.5 py-0.5 rounded-full mr-1.5 mb-1.5">
      {label}
    </span>
  )
}

const About = () => (
  <div>
    {/* ── Row 1: Overview + Education ── */}
    <div className="grid md:grid-cols-2 gap-10 items-start mb-10">

      {/* Col 1: Identity */}
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-2">
          Senior Site Reliability Engineer
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-apple-dark-gray dark:text-dark-text mb-4">
          Akshat Sinha
        </h1>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {[
            { label: 'Rubrik', url: 'https://www.rubrik.com' },
            { label: 'Meta', url: 'https://about.meta.com' },
            { label: 'TikTok', url: 'https://www.tiktok.com' },
            { label: 'Media.Net', url: 'https://www.media.net' },
          ].map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer"
              className="text-xs font-medium text-apple-blue dark:text-dark-blue bg-apple-blue/10 dark:bg-dark-blue/10 px-2.5 py-0.5 rounded-full hover:bg-apple-blue/20 dark:hover:bg-dark-blue/20 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-sm text-apple-mid-gray dark:text-dark-muted leading-relaxed mb-5">
          6+ years building large-scale distributed infrastructure and driving reliability at scale.
          Research published at{' '}
          <a href="#publications" className="text-apple-dark-gray dark:text-dark-text font-medium hover:text-apple-blue dark:hover:text-dark-blue transition-colors">USENIX Security</a>,{' '}
          <a href="#publications" className="text-apple-dark-gray dark:text-dark-text font-medium hover:text-apple-blue dark:hover:text-dark-blue transition-colors">IMC</a>, and{' '}
          <a href="#publications" className="text-apple-dark-gray dark:text-dark-text font-medium hover:text-apple-blue dark:hover:text-dark-blue transition-colors">ICVGIP</a>.{' '}
          Discovered{' '}
          <a href="#service" className="text-apple-dark-gray dark:text-dark-text font-medium hover:text-apple-blue dark:hover:text-dark-blue transition-colors">CVEs in high-profile OSS AI projects</a>.{' '}
          Artifact reviewer for{' '}
          <a href="#service" className="text-apple-dark-gray dark:text-dark-text font-medium hover:text-apple-blue dark:hover:text-dark-blue transition-colors">OOPSLA</a> and{' '}
          <a href="#service" className="text-apple-dark-gray dark:text-dark-text font-medium hover:text-apple-blue dark:hover:text-dark-blue transition-colors">MLSys</a> 2026.
        </p>

        <div className="flex gap-2">
          <a href="#work" className="px-4 py-2 bg-apple-blue text-white text-sm font-medium rounded-full hover:bg-apple-blue-hover transition-colors">
            View Work
          </a>
          <a href="#contact" className="px-4 py-2 bg-apple-gray dark:bg-dark-elevated text-apple-dark-gray dark:text-dark-text text-sm font-medium rounded-full hover:bg-apple-border transition-colors">
            Contact
          </a>
        </div>
      </div>

      {/* Col 2: Education */}
      <div>
        <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-5">Education</h3>
        <div className="space-y-5">
          <div className="flex gap-3 items-start">
            <img src="/uw-logo.svg" alt="UW-Madison" className="w-9 h-9 rounded-lg shrink-0 object-contain bg-white p-0.5 border border-apple-border dark:border-dark-border" />
            <div>
              <p className="font-medium text-apple-dark-gray dark:text-dark-text text-sm">University of Wisconsin–Madison</p>
              <p className="text-xs text-apple-mid-gray dark:text-dark-muted">MS, Computer Science · 2021–2023</p>
              <p className="text-xs font-medium text-apple-blue dark:text-dark-blue mt-1">CS Departmental Scholarship · GPA 4.0 / 4.0</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <img src="/iiitd-logo.svg" alt="IIIT Delhi" className="w-9 h-9 rounded-lg shrink-0 object-contain bg-white p-0.5 border border-apple-border dark:border-dark-border" />
            <div>
              <p className="font-medium text-apple-dark-gray dark:text-dark-text text-sm">IIIT Delhi</p>
              <p className="text-xs text-apple-mid-gray dark:text-dark-muted">BTech, Computer Science · 2014–2018</p>
              <p className="text-xs font-medium text-apple-blue dark:text-dark-blue mt-1">GPA 8.76 / 10.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── Divider ── */}
    <div className="border-t border-apple-border dark:border-dark-border mb-8" />

    {/* ── Row 2: Skills (4 categories spread across one row) ── */}
    <div>
      <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-5">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-xs text-apple-mid-gray dark:text-dark-muted mb-1.5">Languages</p>
          {['Python', 'Bash'].map(s => <SkillBadge key={s} label={s} />)}
        </div>
        <div>
          <p className="text-xs text-apple-mid-gray dark:text-dark-muted mb-1.5">Infrastructure</p>
          {['Kubernetes', 'Docker', 'Terraform', 'Nomad', 'Puppet', 'Jenkins'].map(s => <SkillBadge key={s} label={s} />)}
        </div>
        <div>
          <p className="text-xs text-apple-mid-gray dark:text-dark-muted mb-1.5">Observability</p>
          {['Prometheus', 'Grafana'].map(s => <SkillBadge key={s} label={s} />)}
        </div>
        <div>
          <p className="text-xs text-apple-mid-gray dark:text-dark-muted mb-1.5">Data & Messaging</p>
          {['Kafka', 'Redis', 'MongoDB', 'MySQL', 'Hadoop', 'Spark'].map(s => <SkillBadge key={s} label={s} />)}
        </div>
      </div>
    </div>
  </div>
)

export default About
