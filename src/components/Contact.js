import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const inputClass =
  'w-full border border-apple-border dark:border-dark-border rounded-xl px-4 py-3 text-sm text-apple-dark-gray dark:text-dark-text bg-white dark:bg-dark-elevated placeholder-apple-mid-gray dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-blue-100 dark:focus:ring-dark-blue/20 focus:border-apple-blue dark:focus:border-dark-blue transition-all duration-200'

const Contact = () => (
  <div className="grid md:grid-cols-2 gap-12">
    <div>
      <p className="text-apple-mid-gray dark:text-dark-muted text-sm leading-relaxed mb-8">
        Interested in collaborating or have a question? Send me a message and I'll get back to you.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-sm text-apple-mid-gray dark:text-dark-muted">
          <FiLinkedin className="w-4 h-4 text-apple-blue dark:text-dark-blue shrink-0" />
          <a href="https://www.linkedin.com/in/akshat-sinha-568765167/" target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue dark:hover:text-dark-blue transition-colors">
            linkedin.com/in/akshat-sinha
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm text-apple-mid-gray dark:text-dark-muted">
          <FiGithub className="w-4 h-4 text-apple-blue dark:text-dark-blue shrink-0" />
          <a href="https://github.com/akshatgit" target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue dark:hover:text-dark-blue transition-colors">
            github.com/akshatgit
          </a>
        </div>
      </div>
    </div>

    <form method="post" action="https://formspree.io/f/akshat.snh28@gmail.com" className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Your name" className={inputClass} />
        <input type="email" name="_replyto" placeholder="Your email" className={inputClass} />
      </div>
      <textarea name="message" placeholder="Your message" rows={5} className={inputClass} />
      <button type="submit" className="w-full py-3 bg-apple-dark-gray dark:bg-dark-text text-white dark:text-dark-bg text-sm font-medium rounded-xl hover:bg-black dark:hover:bg-dark-muted transition-colors duration-200">
        Send Message
      </button>
    </form>
  </div>
)

export default Contact
