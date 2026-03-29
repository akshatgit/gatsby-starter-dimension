import React, { useState, useEffect } from 'react'

const useCitations = (semanticScholarId) => {
  const [count, setCount] = useState(null)
  useEffect(() => {
    if (!semanticScholarId) return
    fetch(`https://api.semanticscholar.org/graph/v1/paper/${semanticScholarId}?fields=citationCount`)
      .then(r => r.json())
      .then(d => { if (d.citationCount != null) setCount(d.citationCount) })
      .catch(() => {})
  }, [semanticScholarId])
  return count
}

const papers = [
  {
    title: 'Using Trātṛ to Tame Adversarial Synchronization',
    authors: 'Yuvraj Patel, Chenhao Ye, Akshat Sinha, Abigail Matthews, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau, Michael M. Swift',
    venue: 'USENIX Security',
    year: '2022',
    url: 'https://www.usenix.org/conference/usenixsecurity22/presentation/patel',
    s2id: '7abdfdc90da67eba76cb8b0ca0a9d80e13f3f09e',
  },
  {
    title: 'Where The Light Gets In: Analyzing Web Censorship Mechanisms in India',
    authors: 'Tarun Kumar Yadav, Akshat Sinha, Devashish Gosain, Piyush Kumar Sharma, Sambuddho Chakravarty',
    venue: 'IMC',
    year: '2018',
    url: 'https://doi.org/10.1145/3278532.3278555',
    s2id: 'c4eba96ff5001c43b4c5acaeffd3e555e3ff664a',
  },
  {
    title: 'Deep Neural Networks for Segmentation of Basal Ganglia Sub-Structures in Brain MR Images',
    authors: 'Akshay Sethi, Akshat Sinha, Ayush Agarwal, Chetan Arora, Anubha Gupta',
    venue: 'ICVGIP',
    year: '2016',
    url: 'https://doi.org/10.1145/3009977.3010048',
    s2id: '9e80982bec8cfc6475ef588ed5eedeea445d7579',
  },
]

const articles = [
  {
    title: 'Socket Programming in C/C++',
    url: 'https://www.geeksforgeeks.org/socket-programming-cc/',
    venue: 'GeeksForGeeks',
    year: '2016',
  },
  {
    title: 'Linux Kernel Module Programming',
    url: 'https://www.geeksforgeeks.org/linux-kernel-module-programming-hello-world-program/',
    venue: 'GeeksForGeeks',
    year: '2016',
  },
]

const VenueBadge = ({ venue, year }) => (
  <span className="inline-block text-xs font-medium text-apple-blue dark:text-dark-blue bg-apple-blue/10 dark:bg-dark-blue/10 px-2.5 py-0.5 rounded-full shrink-0">
    {venue} '{year.slice(2)}
  </span>
)

const PaperRow = ({ paper }) => {
  const citations = useCitations(paper.s2id)
  return (
    <div className="border-b border-apple-border dark:border-dark-border pb-6 last:border-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-apple-dark-gray dark:text-dark-text font-medium hover:text-apple-blue dark:text-dark-blue transition-colors"
        >
          {paper.title}
        </a>
        <VenueBadge venue={paper.venue} year={paper.year} />
      </div>
      <p className="text-xs text-apple-mid-gray dark:text-dark-muted mb-1">
        {paper.authors.split('Akshat Sinha').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && <span className="font-semibold text-apple-dark-gray dark:text-dark-text">Akshat Sinha</span>}
          </React.Fragment>
        ))}
      </p>
      {citations != null && (
        <p className="text-xs text-apple-mid-gray dark:text-dark-muted">
          <span className="font-medium text-apple-dark-gray dark:text-dark-text">{citations}</span> citation{citations !== 1 ? 's' : ''} · via Semantic Scholar
        </p>
      )}
    </div>
  )
}

const Publications = () => (
  <div>
    <div className="space-y-4 mb-10">
      {papers.map(p => <PaperRow key={p.url} paper={p} />)}
    </div>

    <h3 className="text-xs font-medium tracking-widest uppercase text-apple-mid-gray dark:text-dark-muted mb-4">
      Technical Articles
    </h3>
    <div className="space-y-3">
      {articles.map(a => (
        <div key={a.url} className="flex items-center justify-between">
          <a
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-apple-dark-gray dark:text-dark-text hover:text-apple-blue dark:text-dark-blue transition-colors"
          >
            {a.title}
          </a>
          <span className="text-xs text-apple-mid-gray dark:text-dark-muted ml-4 shrink-0">{a.venue} · {a.year}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Publications
