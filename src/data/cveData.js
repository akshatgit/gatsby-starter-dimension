const cvePosts = [
  {
    id: 'CVE-2026-9277',
    project: 'shell-quote',
    severity: 'High',
    score: '8.1',
    date: '2026-05-22',
    desc: 'Shell command injection via unescaped newlines in quote() object .op values',
    url: 'https://github.com/ljharb/shell-quote/security/advisories/GHSA-w7jw-789q-3m8p',
  },
  {
    id: 'CVE-2026-7874',
    project: 'Langflow',
    severity: 'Critical',
    score: '9.1',
    date: '2026-06-30',
    desc: 'Weak and reversible key derivation for credential encryption exposed all stored API keys, database passwords, and OAuth tokens once the secret key was obtained.',
    url: 'https://www.ibm.com/support/pages/node/7278447',
  },
  {
    id: 'CVE-2026-44007',
    project: 'vm2',
    severity: 'Critical',
    score: '9.1',
    date: '2026-05-01',
    desc: 'Sandbox escape to arbitrary OS command execution when NodeVM is created with nesting: true',
    url: 'https://github.com/patriksimek/vm2/security/advisories/GHSA-8hg8-63c5-gwmx',
    coverage: [
      {
        outlet: 'The Hacker News',
        url: 'https://web.archive.org/web/20260507045951/https://thehackernews.com/2026/05/vm2-nodejs-library-vulnerabilities.html',
      },
      {
        outlet: 'CSO Online',
        url: 'https://web.archive.org/web/20260508055352/https://www.csoonline.com/article/4168568/13-new-critical-holes-in-javascript-sandbox-allow-execution-of-arbitrary-code.html',
      },
      {
        outlet: 'ThreatAft',
        url: 'https://threataft.com/articles/vm2-nodejs-sandbox-escape-vulnerabilities-cve-2026',
      },
      {
        outlet: 'GBHackers',
        url: 'https://web.archive.org/web/20260507092707/https://gbhackers.com/critical-vm2-node-js-library-flaws/',
      },
      {
        outlet: 'CyberPress',
        url: 'https://cyberpress.org/critical-vm2-vulnerabilities-enable-arbitrary-code-execution-attacks/',
      },
      {
        outlet: 'Mena CyberWire',
        url: 'https://menacyberwire.com/post/12-critical-sandbox-escape-flaws-in-vm2-node-js-library-enable-arbitrary-code-execution',
      },
    ],
  },
  {
    id: 'CVE-2026-33760',
    project: 'Langflow',
    severity: 'High',
    score: '8.8',
    date: '2026-04-11',
    desc: 'IDOR/BOLA in seven monitor API endpoints allowed unauthorized read, write, and delete operations on sessions, messages, build artifacts, and LLM transaction logs.',
    url: 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-9c59-2mvc-vfr8',
  },
  {
    id: 'CVE-2026-33309',
    project: 'Langflow',
    severity: 'Critical',
    score: '10.0',
    date: '2026-03-15',
    desc: 'Arbitrary file write via path traversal in the v2 file upload API enabled remote code execution through a multipart filename bypass.',
    url: 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-g2j9-7rj2-gm6c',
    downstreamIds: [
      {
        label: 'IBM CVE-2026-4502',
        refs: [
          {
            tag: '[1]',
            url: 'https://www.ibm.com/support/pages/node/7271101',
            title: 'IBM Langflow OSS bulletin',
          },
          {
            tag: '[2]',
            url: 'https://www.ibm.com/support/pages/node/7271097',
            title: 'IBM Langflow Desktop bulletin',
          },
        ],
      },
    ],
    coverage: [
      {
        outlet: 'SANS @Risk Newsletter',
        url: 'https://www.sans.org/newsletters/at-risk/xxvi-13',
      },
      {
        outlet: 'SingCERT Security Bulletin',
        url: 'https://isomer-user-content.by.gov.sg/36/0bd72b6b-eb30-49d4-aba4-f136d5d20ba9/25_Mar_2026.pdf',
      },
      {
        outlet: 'Cyble Weekly Vulnerabilities Report',
        url: 'https://cyble.com/blog/cyble-weekly-vulnerabilities-report-apr-01/',
      },
      {
        outlet: 'Endor Labs',
        url: 'https://www.endorlabs.com/vulnerability/cve-2026-33309',
      },
    ],
  },
  {
    id: 'CVE-2026-33484',
    project: 'Langflow',
    severity: 'High',
    score: '7.5',
    date: '2026-02-28',
    desc: 'Unauthenticated IDOR on the image download endpoint allowed cross-tenant exfiltration via flow_id enumeration and missing ownership checks.',
    url: 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-7grx-3xcx-2xv5',
    downstreamIds: [
      {
        label: 'IBM CVE-2026-4503',
        refs: [
          {
            tag: '[1]',
            url: 'https://www.ibm.com/support/pages/node/7270882',
            title: 'IBM Langflow OSS bulletin',
          },
          {
            tag: '[2]',
            url: 'https://www.ibm.com/support/pages/node/7271099',
            title: 'IBM Langflow Desktop bulletin',
          },
        ],
      },
    ],
    coverage: [
      {
        outlet: 'Heise Security',
        url: 'https://www.heise.de/en/news/Patch-now-Malicious-code-attacks-on-AI-tool-Langflow-observed-11226962.html',
      },
    ],
  },
  {
    id: 'CVE-2026-28786',
    project: 'Open WebUI',
    severity: 'Moderate',
    score: '4.3',
    date: '2026-01-10',
    desc: 'Path traversal in audio transcription endpoint leaking server filesystem paths via error messages',
    url: 'https://github.com/open-webui/open-webui/security/advisories/GHSA-vvxm-vxmr-624h',
    coverage: [
      {
        outlet: 'SentinelOne Vulnerability Database',
        url: 'https://www.sentinelone.com/vulnerability-database/cve-2026-28786/',
      },
      {
        outlet: 'NVD',
        url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-28786',
      },
    ],
  },
]

module.exports = { cvePosts }
