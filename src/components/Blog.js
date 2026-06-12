import React from 'react'
import { Link } from 'gatsby'
import { FiArrowRight } from 'react-icons/fi'
import { cvePosts } from '../data/cveData'

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

const BlogPostCard = ({ post }) => (
  <Link
    to={`/blog/${post.id.toLowerCase()}`}
    className="group block border border-apple-border dark:border-dark-border rounded-xl p-5 hover:border-apple-blue dark:hover:border-dark-blue transition-colors bg-white dark:bg-dark-bg"
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <div>
        <h3 className="text-base font-mono font-medium text-apple-dark-gray dark:text-dark-text group-hover:text-apple-blue dark:group-hover:text-dark-blue transition-colors">
          {post.id}
        </h3>
        <p className="text-xs text-apple-mid-gray dark:text-dark-muted mt-1">
          {post.project}
          {post.date ? ` · ${post.date}` : ''}
        </p>
      </div>
      <SeverityBadge level={post.severity} score={post.score} />
    </div>
    <p className="text-sm text-apple-mid-gray dark:text-dark-muted mb-4 line-clamp-2">{post.desc}</p>
    {post.downstreamIds?.length > 0 && (
      <p className="text-xs text-apple-mid-gray dark:text-dark-muted mb-4">
        {post.downstreamIds.map((item, index) => (
          <React.Fragment key={item.label}>
            {index > 0 ? ' · ' : ''}
            <span>IBM-issued: </span>
            <a
              href={item.refs[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.refs[0]?.title}
              className="text-apple-blue dark:text-dark-blue hover:underline"
              onClick={(event) => event.stopPropagation()}
            >
              {item.label.replace(/^IBM /, '')}
            </a>
          </React.Fragment>
        ))}
      </p>
    )}
    {(post.downstreamIds?.length > 0 || post.coverage?.length > 0) && (
      <p className="text-xs text-apple-mid-gray dark:text-dark-muted mb-4">
        {post.downstreamIds?.length > 0 && (
          <>
            <span>IBM Security </span>
            {post.downstreamIds.flatMap((item) => item.refs).map((ref) => (
              <React.Fragment key={ref.url}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={ref.title}
                  className="text-apple-blue dark:text-dark-blue hover:underline"
                  onClick={(event) => event.stopPropagation()}
                >
                  {ref.tag}
                </a>
              </React.Fragment>
            ))}
          </>
        )}
        {post.coverage?.map((item, index) => (
          <React.Fragment key={item.url}>
            {(index > 0 || post.downstreamIds?.length > 0) ? ' · ' : ''}
            <span>{item.outlet}</span>
          </React.Fragment>
        ))}
      </p>
    )}
    <div className="flex items-center gap-1 text-xs text-apple-blue dark:text-dark-blue font-medium">
      Read more <FiArrowRight className="w-3 h-3" />
    </div>
  </Link>
)

const Blog = () => (
  <div>
    <div className="grid gap-4 md:grid-cols-2">
      {cvePosts.map(post => <BlogPostCard key={post.id} post={post} />)}
    </div>
  </div>
)

export { cvePosts }
export default Blog
