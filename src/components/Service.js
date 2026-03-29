import React, { useState, useEffect } from 'react'
import { FiStar } from 'react-icons/fi'

const useStars = (repo) => {
  const [stars, setStars] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then(r => r.json())
      .then(d => {
        if (d.stargazers_count) {
          const n = d.stargazers_count
          setStars(n >= 1000 ? `${(n / 1000).toFixed(0)}k` : String(n))
        }
      })
      .catch(() => {})
  }, [repo])
  return stars
}

const severityColors = {
  'Critical': 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400',
  'High': 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400',
  'Moderate': 'bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-400',
}

const SeverityBadge = ({ level, score }) => (
  <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${severityColors[level]}`}>
    {level} {score}
  </span>
)

const projects = {
  Langflow: {
    desc: 'Low-code AI agent & workflow builder',
    repo: 'langflow-ai/langflow',
    url: 'https://github.com/langflow-ai/langflow',
  },
  'Open WebUI': {
    desc: 'Self-hosted UI for local LLMs',
    repo: 'open-webui/open-webui',
    url: 'https://github.com/open-webui/open-webui',
  },
  libfuse: {
    desc: 'Reference Linux FUSE implementation',
    repo: 'libfuse/libfuse',
    url: 'https://github.com/libfuse/libfuse',
  },
}

const cveDiscoveries = [
  {
    id: 'CVE-2026-33309',
    project: 'Langflow',
    severity: 'Critical',
    score: '10.0',
    desc: 'Arbitrary file write via path traversal in v2 file upload API, enabling Remote Code Execution',
    url: 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-g2j9-7rj2-gm6c',
  },
  {
    id: 'CVE-2026-33484',
    project: 'Langflow',
    severity: 'High',
    score: '7.5',
    desc: 'Unauthenticated IDOR on image download endpoint allowing data exposure in multi-tenant deployments',
    url: 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-7grx-3xcx-2xv5',
  },
  {
    id: 'CVE-2026-28786',
    project: 'Open WebUI',
    severity: 'Moderate',
    score: '4.3',
    desc: 'Path traversal in audio transcription endpoint leaking server filesystem paths via error messages',
    url: 'https://github.com/open-webui/open-webui/security/advisories/GHSA-vvxm-vxmr-624h',
  },
]

const cveReviews = [
  {
    id: 'CVE-2026-33150',
    project: 'libfuse',
    severity: 'High',
    score: '7.8',
    desc: 'Use-after-free in io_uring subsystem — freed heap chunk could enable arbitrary code execution',
    url: 'https://github.com/libfuse/libfuse/security/advisories/GHSA-qxv7-xrc2-qmfx',
  },
  {
    id: 'CVE-2026-33179',
    project: 'libfuse',
    severity: 'Moderate',
    score: '5.5',
    desc: 'NULL pointer dereference and memory leak in io_uring queue initialization, enabling local DoS',
    url: 'https://github.com/libfuse/libfuse/security/advisories/GHSA-x669-v3mq-r358',
  },
]

const ProjectTag = ({ name }) => {
  const p = projects[name]
  const stars = useStars(p?.repo)
  if (!p) return <span className="text-xs text-apple-mid-gray">{name}</span>
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-apple-mid-gray hover:text-apple-blue transition-colors">
      <span>{name}</span>
      {stars && (
        <>
          <span>·</span>
          <FiStar className="w-3 h-3" />
          <span>{stars}</span>
        </>
      )}
    </a>
  )
}


const CveRow = ({ cve }) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-3 py-4 border-b border-apple-border dark:border-dark-border last:border-0">
    <div className="sm:w-52 shrink-0">
      <div className="flex items-center gap-2 flex-wrap">
        <a
          href={cve.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono text-apple-blue dark:text-dark-blue hover:underline"
        >
          {cve.id}
        </a>
        <ProjectTag name={cve.project} />
      </div>
    </div>
    <div className="flex-1">
      <p className="text-sm text-apple-mid-gray dark:text-dark-muted">{cve.desc}</p>
    </div>
    <div className="shrink-0">
      <SeverityBadge level={cve.severity} score={cve.score} />
    </div>
  </div>
)

const Service = () => (
  <div className="space-y-12">
    {/* Artifact Reviewing */}
    <div>
      <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-5">Artifact Reviewing</h3>
      <div className="space-y-3">
        {[
          { conf: 'OOPSLA 2026', role: 'Artifact Evaluation Committee Reviewer', url: 'https://2026.splashcon.org/track/splash-2026-artifact-evaluation' },
          { conf: 'MLSys 2026', role: 'Artifact Evaluation Committee Reviewer', url: 'https://mlsys26ae.hotcrp.com/users/pc' },
        ].map(({ conf, role, url }) => (
          <div key={conf} className="flex items-center justify-between border-b border-apple-border dark:border-dark-border pb-3 last:border-0">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-apple-blue dark:text-dark-blue hover:underline transition-colors">
              {conf}
            </a>
            <span className="text-xs text-apple-mid-gray dark:text-dark-muted">{role}</span>
          </div>
        ))}
      </div>
    </div>

    {/* CVE Discoveries */}
    <div>
      <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-4">CVE Discoveries</h3>
      <div>
        {cveDiscoveries.map(cve => <CveRow key={cve.id} cve={cve} />)}
      </div>
    </div>

    {/* CVE Remediation Reviews */}
    <div>
      <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-4">CVE Remediation Reviews</h3>
      <div>
        {cveReviews.map(cve => <CveRow key={cve.id} cve={cve} />)}
      </div>
    </div>
  </div>
)

export default Service
