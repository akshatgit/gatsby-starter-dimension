import React, { useEffect, useState } from 'react'
import { FiLinkedin, FiGithub, FiX } from 'react-icons/fi'
import QRCode from 'react-qr-code'

const linkedInUrl = 'https://www.linkedin.com/in/akshat-sinha-568765167/'

const inputClass =
  'w-full border border-apple-border dark:border-dark-border rounded-xl px-4 py-3 text-sm text-apple-dark-gray dark:text-dark-text bg-white dark:bg-dark-elevated placeholder-apple-mid-gray dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-dark-blue/20 focus:border-apple-blue dark:focus:border-dark-blue transition-all duration-200'

const Contact = () => {
  const [isQrOpen, setIsQrOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsQrOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-apple-mid-gray dark:text-dark-muted text-sm leading-relaxed mb-8">
            Interested in collaborating or have a question? Send me a message
            and I'll get back to you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-apple-mid-gray dark:text-dark-muted">
              <FiLinkedin className="w-4 h-4 text-apple-blue dark:text-dark-blue shrink-0" />
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-apple-blue dark:hover:text-dark-blue transition-colors"
              >
                linkedin.com/in/akshat-sinha
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-apple-mid-gray dark:text-dark-muted">
              <FiGithub className="w-4 h-4 text-apple-blue dark:text-dark-blue shrink-0" />
              <a
                href="https://github.com/akshatgit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-apple-blue dark:hover:text-dark-blue transition-colors"
              >
                github.com/akshatgit
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsQrOpen(true)}
            aria-haspopup="dialog"
            className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-apple-border dark:border-dark-border bg-apple-light-gray/60 dark:bg-dark-elevated p-4 hover:border-apple-blue dark:hover:border-dark-blue transition-colors"
          >
            <div className="rounded-lg bg-white p-2" aria-hidden="true">
              <QRCode
                value={linkedInUrl}
                size={112}
                bgColor="#ffffff"
                fgColor="#111827"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-apple-dark-gray dark:text-dark-text">
                Connect on LinkedIn
              </p>
              <p className="mt-1 text-xs text-apple-mid-gray dark:text-dark-muted">
                Click to enlarge
              </p>
            </div>
          </button>
        </div>

        <form
          method="post"
          action="https://formspree.io/f/akshat.snh28@gmail.com"
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={inputClass}
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your email"
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            className={inputClass}
          />
          <button
            type="submit"
            className="w-full py-3 bg-apple-dark-gray dark:bg-dark-text text-white dark:text-dark-bg text-sm font-medium rounded-xl hover:bg-black dark:hover:bg-dark-muted transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {isQrOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          role="presentation"
          onClick={() => setIsQrOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="linkedin-qr-title"
            className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-dark-elevated p-8 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsQrOpen(false)}
              aria-label="Close QR code preview"
              className="absolute right-4 top-4 rounded-lg p-2 text-apple-mid-gray hover:bg-apple-light-gray hover:text-apple-dark-gray dark:text-dark-muted dark:hover:bg-dark-bg dark:hover:text-dark-text"
            >
              <FiX className="h-5 w-5" />
            </button>
            <h3
              id="linkedin-qr-title"
              className="text-lg font-medium text-apple-dark-gray dark:text-dark-text"
            >
              Connect on LinkedIn
            </h3>
            <div className="mx-auto mt-6 inline-block rounded-xl bg-white p-4">
              <QRCode
                value={linkedInUrl}
                size={240}
                bgColor="#ffffff"
                fgColor="#111827"
              />
            </div>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm text-apple-blue hover:underline dark:text-dark-blue"
            >
              Open LinkedIn profile
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact
