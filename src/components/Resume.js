import React, { useState } from 'react'
import { FiDownload, FiEye } from 'react-icons/fi'

const Resume = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      {!loaded ? (
        <div className="rounded-2xl border border-apple-border bg-apple-gray flex flex-col items-center justify-center gap-4 py-20">
          <p className="text-apple-mid-gray text-sm">Resume preview</p>
          <button
            onClick={() => setLoaded(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-apple-dark-gray text-white text-sm font-medium rounded-full hover:bg-black transition-colors duration-200"
          >
            <FiEye className="w-4 h-4" />
            View Resume
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-apple-blue hover:underline"
          >
            <FiDownload className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      ) : (
        <>
          <div className="rounded-2xl overflow-hidden border border-apple-border shadow-sm mb-4">
            <iframe
              src="/resume.pdf"
              title="Akshat Sinha Resume"
              className="w-full h-[500px] md:h-[700px]"
            />
          </div>
          <div className="text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-apple-blue hover:underline"
            >
              <FiDownload className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </>
      )}
    </div>
  )
}

export default Resume
