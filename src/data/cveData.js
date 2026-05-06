const cvePosts = [
  {
    id: 'CVE-2026-44007',
    project: 'vm2',
    severity: 'Critical',
    score: '9.1',
    date: '2026-05-01',
    desc: 'Sandbox escape to arbitrary OS command execution when NodeVM is created with nesting: true',
    url: 'https://github.com/patriksimek/vm2/security/advisories/GHSA-8hg8-63c5-gwmx',
  },
  {
    id: 'CVE-2026-33309',
    project: 'Langflow',
    severity: 'Critical',
    score: '10.0',
    date: '2026-03-15',
    desc: 'Arbitrary file write via path traversal in v2 file upload API, enabling Remote Code Execution',
    url: 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-g2j9-7rj2-gm6c',
  },
  {
    id: 'CVE-2026-33484',
    project: 'Langflow',
    severity: 'High',
    score: '7.5',
    date: '2026-02-28',
    desc: 'Unauthenticated IDOR on image download endpoint allowing data exposure in multi-tenant deployments',
    url: 'https://github.com/langflow-ai/langflow/security/advisories/GHSA-7grx-3xcx-2xv5',
  },
  {
    id: 'CVE-2026-28786',
    project: 'Open WebUI',
    severity: 'Moderate',
    score: '4.3',
    date: '2026-01-10',
    desc: 'Path traversal in audio transcription endpoint leaking server filesystem paths via error messages',
    url: 'https://github.com/open-webui/open-webui/security/advisories/GHSA-vvxm-vxmr-624h',
  },
]

module.exports = { cvePosts }
