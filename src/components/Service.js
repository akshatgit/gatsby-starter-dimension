import React, { useState, useEffect } from 'react'
import { FiDownload, FiStar } from 'react-icons/fi'
import { cvePosts } from '../data/cveData'

const metricCache = new Map()

const formatCompact = (value) => {
  if (!value || value < 1000) return value ? String(value) : null
  if (value >= 1000000)
    return `${(value / 1000000).toFixed(1).replace(/\.0$/, '')}m`
  return `${(value / 1000).toFixed(0)}k`
}

const useStars = (repo) => {
  const [stars, setStars] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.stargazers_count) {
          const n = d.stargazers_count
          setStars(n >= 1000 ? `${(n / 1000).toFixed(0)}k` : String(n))
        }
      })
      .catch(() => {})
  }, [repo])
  return stars
}

const useDownloadMetric = (registry, packageName, initialMetric = null) => {
  const cacheKey = registry && packageName ? `${registry}:${packageName}` : null
  const [metric, setMetric] = useState(() => {
    if (cacheKey && metricCache.has(cacheKey)) return metricCache.get(cacheKey)
    if (cacheKey && initialMetric) metricCache.set(cacheKey, initialMetric)
    return initialMetric
  })

  useEffect(() => {
    if (!registry || !packageName || metric !== null) return

    const url =
      registry === 'npm'
        ? `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(packageName)}&size=1`
        : `https://pypistats.org/api/packages/${encodeURIComponent(packageName)}/recent`

    fetch(url)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data) return

        const nextMetric =
          registry === 'npm'
            ? data.objects?.[0]?.package?.name === packageName
              ? {
                  label: 'npm',
                  title: 'npm monthly downloads',
                  value: formatCompact(data.objects[0].downloads?.monthly),
                }
              : null
            : data.data?.last_month
              ? {
                  label: 'PyPI',
                  title: 'PyPI monthly downloads',
                  value: formatCompact(data.data.last_month),
                }
              : null

        if (nextMetric?.value) {
          metricCache.set(cacheKey, nextMetric)
          setMetric(nextMetric)
        }
      })
      .catch(() => {})
  }, [cacheKey, metric, packageName, registry])

  return metric
}

const severityColors = {
  Critical: 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400',
  High: 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400',
  Moderate:
    'bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-400',
}

const SeverityBadge = ({ level, score }) => (
  <span
    className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${severityColors[level]}`}
  >
    {level} {score}
  </span>
)

const projects = {
  Langflow: {
    desc: 'Low-code AI agent & workflow builder',
    repo: 'langflow-ai/langflow',
    url: 'https://github.com/langflow-ai/langflow',
    packageMetrics: [
      {
        registry: 'pypi',
        packageName: 'langflow',
        initialMetric: {
          label: 'PyPI',
          title: 'PyPI monthly downloads',
          value: '102k',
        },
      },
    ],
  },
  'Open WebUI': {
    desc: 'Self-hosted UI for local LLMs',
    repo: 'open-webui/open-webui',
    url: 'https://github.com/open-webui/open-webui',
    packageMetrics: [
      {
        registry: 'pypi',
        packageName: 'open-webui',
        initialMetric: {
          label: 'site',
          title: 'Open WebUI site-reported downloads',
          value: '290m',
        },
      },
    ],
  },
  libfuse: {
    desc: 'Reference Linux FUSE implementation',
    repo: 'libfuse/libfuse',
    url: 'https://github.com/libfuse/libfuse',
  },
  vm2: {
    desc: 'Sandbox library for running untrusted code in Node.js',
    repo: 'patriksimek/vm2',
    url: 'https://github.com/patriksimek/vm2',
    packageMetrics: [
      {
        registry: 'npm',
        packageName: 'vm2',
        initialMetric: {
          label: 'npm',
          title: 'npm monthly downloads',
          value: '6.1m',
        },
      },
    ],
  },
  'shell-quote': {
    desc: 'Shell argument parser and quote utility for Node.js',
    repo: 'ljharb/shell-quote',
    url: 'https://github.com/ljharb/shell-quote',
    packageMetrics: [
      {
        registry: 'npm',
        packageName: 'shell-quote',
        initialMetric: {
          label: 'npm',
          title: 'npm monthly downloads',
          value: '219.3m',
        },
      },
    ],
  },
}

const cveDiscoveries = cvePosts

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
  const packageMetric = useDownloadMetric(
    p?.packageMetrics?.[0]?.registry,
    p?.packageMetrics?.[0]?.packageName,
    p?.packageMetrics?.[0]?.initialMetric
  )
  if (!p) return <span className="text-xs text-apple-mid-gray">{name}</span>
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-apple-mid-gray hover:text-apple-blue transition-colors"
    >
      <span>{name}</span>
      {stars && (
        <>
          <span>·</span>
          <FiStar className="w-3 h-3" />
          <span>{stars}</span>
        </>
      )}
      {packageMetric && (
        <>
          <span>·</span>
          <FiDownload className="w-3 h-3" />
          <span title={packageMetric.title}>{packageMetric.value}</span>
        </>
      )}
    </a>
  )
}

const DownstreamLabel = ({ cve }) => {
  if (!cve.downstreamIds?.length) return null

  return cve.downstreamIds.map((item) => (
    <div
      key={item.label}
      className="text-xs text-apple-mid-gray dark:text-dark-muted"
    >
      <span>IBM-issued: </span>
      <a
        href={item.refs[0]?.url}
        target="_blank"
        rel="noopener noreferrer"
        title={item.refs[0]?.title}
        className="text-apple-blue dark:text-dark-blue hover:underline"
      >
        {item.label.replace(/^IBM /, '')}
      </a>
    </div>
  ))
}

const CveRow = ({ cve }) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-3 py-4 border-b border-apple-border dark:border-dark-border last:border-0">
    <div className="sm:w-52 shrink-0">
      <div className="flex flex-col items-start gap-1">
        <a
          href={cve.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono text-apple-blue dark:text-dark-blue hover:underline"
        >
          {cve.id}
        </a>
        <ProjectTag name={cve.project} />
        <DownstreamLabel cve={cve} />
      </div>
    </div>
    <div className="flex-1">
      <p className="text-sm text-apple-mid-gray dark:text-dark-muted">
        {cve.desc}
      </p>
      {(cve.downstreamIds?.length > 0 || cve.coverage?.length > 0) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-apple-mid-gray dark:text-dark-muted">
          {cve.downstreamIds?.length > 0 && (
            <>
              <span>IBM Security</span>
              {cve.downstreamIds.flatMap((item) => item.refs).map((ref) => (
                <a
                  key={ref.url}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={ref.title}
                  className="text-apple-blue dark:text-dark-blue hover:underline"
                >
                  {ref.tag}
                </a>
              ))}
            </>
          )}
          {cve.coverage?.map((item, index) => (
            <React.Fragment key={item.url}>
              {(index > 0 || cve.downstreamIds?.length > 0) && (
                <span aria-hidden="true">·</span>
              )}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue dark:text-dark-blue hover:underline"
              >
                {item.outlet}
              </a>
            </React.Fragment>
          ))}
        </div>
      )}
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
      <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-5">
        Artifact Reviewing
      </h3>
      <div className="space-y-3">
        {[
          {
            conf: 'OOPSLA 2026',
            role: 'Artifact Evaluation Committee Reviewer',
            url: 'https://2026.splashcon.org/track/splash-2026-artifact-evaluation',
          },
          {
            conf: 'MLSys 2026',
            role: 'Artifact Evaluation Committee Reviewer',
            url: 'https://mlsys26ae.hotcrp.com/users/pc',
          },
          {
            conf: "OSDI '26",
            role: 'Artifact Evaluation Committee Reviewer',
            url: 'https://www.usenix.org/conference/osdi26/call-for-artifacts',
          },
        ].map(({ conf, url }) => (
          <div
            key={conf}
            className="border-b border-apple-border dark:border-dark-border pb-3 last:border-0"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-apple-blue dark:text-dark-blue hover:underline transition-colors"
            >
              {conf}
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* CVE Discoveries */}
    <div>
      <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-4">
        CVE Discoveries
      </h3>
      <div>
        {cveDiscoveries.map((cve) => (
          <CveRow key={cve.id} cve={cve} />
        ))}
      </div>
    </div>

    {/* CVE Remediation Reviews */}
    <div>
      <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-4">
        CVE Remediation Reviews
      </h3>
      <div>
        {cveReviews.map((cve) => (
          <CveRow key={cve.id} cve={cve} />
        ))}
      </div>
    </div>
  </div>
)

export default Service
