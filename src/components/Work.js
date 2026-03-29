import React from 'react'

const jobs = [
  {
    company: 'Rubrik',
    url: 'https://www.rubrik.com',
    title: 'Senior Software Engineer, SRE',
    period: 'Aug 2023 – Present · Palo Alto, CA',
    bullets: [
      'Serving as Incident Commander for 2+ years — leading cross-functional response for critical production incidents, coordinating engineering, comms, and executive stakeholders.',
      'Spearheaded Observability as Code (Terraform) migration for 50+ teams, leading 3 SREs over 4 quarters with reusable alert templates.',
      'Capacity-planned the company-wide Jenkins cluster, cutting build queue delays by 30% and reducing pod scheduling failures.',
      'Led design and rollout of a StackStorm-based auto-remediation framework, reducing MTTR via least-privilege automation.',
      'Built an LLM-powered Slack summarizer with role-specific contexts (manager vs. on-call) and a GenAI documentation translator.',
    ],
  },
  {
    company: 'TikTok USDS',
    url: 'https://www.tiktok.com',
    title: 'Site Reliability Engineer',
    period: 'Dec 2022 – Aug 2023 · Mountain View, CA',
    team: 'Video Architecture Team',
    bullets: [
      'Automated new node deployment pipeline using GitOps and Python, reducing end-to-end deployment from 3–4 hours to minutes.',
    ],
  },
  {
    company: 'Meta (Facebook)',
    url: 'https://about.meta.com',
    title: 'Production Engineer Intern',
    period: 'May 2022 – Aug 2022 · Menlo Park, CA',
    team: 'Payments Team',
    bullets: [
      "Built a distributed transaction settlement service (Python, MySQL, RPC) to aggregate fintech provider logs, deployed on Meta's container orchestration system.",
    ],
  },
  {
    company: 'Media.Net (Directi)',
    url: 'https://www.media.net',
    title: 'Site Reliability Engineer',
    period: 'Jun 2018 – Dec 2020 · Mumbai, India',
    team: 'Ads Serving Team',
    bullets: [
      'Built and deployed a vulnerability detection system (Wazuh + ElasticSearch), fixing 1000+ system-level issues across the fleet.',
      'Migrated 10+ legacy applications to Kubernetes/Nomad, cutting infrastructure costs by 50%.',
      'Enhanced monitoring stack with Prometheus and Grafana to support mission-critical SLAs.',
    ],
  },
]

const JobRow = ({ job }) => (
  <div className="border-b border-apple-border dark:border-dark-border pb-8 last:border-0 last:pb-0">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
      <div>
        <h3 className="font-medium text-apple-dark-gray dark:text-dark-text">
          {job.title} ·{' '}
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-blue dark:text-dark-blue hover:underline"
          >
            {job.company}
          </a>
        </h3>
        {job.team && (
          <p className="text-xs text-apple-mid-gray dark:text-dark-muted mt-0.5">{job.team}</p>
        )}
      </div>
      <span className="text-xs text-apple-mid-gray dark:text-dark-muted whitespace-nowrap shrink-0">{job.period}</span>
    </div>
    <ul className="space-y-1.5">
      {job.bullets.map((b, i) => (
        <li key={i} className="text-sm text-apple-mid-gray dark:text-dark-muted flex gap-2">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-apple-border dark:bg-dark-border shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  </div>
)

const Work = () => (
  <div className="space-y-8">
    {jobs.map(job => <JobRow key={job.company} job={job} />)}

    <div className="border-b border-apple-border dark:border-dark-border pb-8 last:border-0 last:pb-0">
      <h3 className="font-medium text-apple-dark-gray dark:text-dark-text mb-1">Research Projects</h3>
      <p className="text-sm font-medium text-apple-dark-gray dark:text-dark-text mb-1">
        New Strongly Consistent Protocol on Kafka
      </p>
      <p className="text-sm text-apple-mid-gray dark:text-dark-muted">
        Implemented a strongly consistent protocol for publishing messages to a Kafka cluster.
        Achieves performance comparable to weaker consistency models while guaranteeing linearizability.
        Ongoing research project.
      </p>
    </div>
  </div>
)

export default Work
