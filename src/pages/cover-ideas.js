import React from 'react'
import { Link } from 'gatsby'

import cover from '../images/cover.png'
import portrait from '../images/me.jpg'
import logo from '../images/logo.png'

const companyLinks = ['Rubrik', 'Meta', 'TikTok', 'Media.Net']

const Pills = ({ light = false }) => (
  <div className="flex flex-wrap gap-2">
    {companyLinks.map((company) => (
      <span
        key={company}
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          light ? 'bg-white/10 text-blue-100' : 'bg-blue-50 text-apple-blue'
        }`}
      >
        {company}
      </span>
    ))}
  </div>
)

const Intro = ({ light = false, compact = false }) => (
  <div className={compact ? 'max-w-md' : 'max-w-lg'}>
    <p
      className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? 'text-blue-300' : 'text-apple-blue'
      }`}
    >
      Senior Site Reliability Engineer
    </p>
    <h2
      className={`font-semibold tracking-tight ${
        compact ? 'text-3xl' : 'text-4xl sm:text-5xl'
      } ${light ? 'text-white' : 'text-apple-dark-gray'}`}
    >
      Akshat Sinha
    </h2>
    <p
      className={`mt-4 text-sm leading-relaxed ${
        light ? 'text-slate-300' : 'text-apple-mid-gray'
      }`}
    >
      Building large-scale distributed infrastructure, improving reliability,
      and researching systems and network security.
    </p>
    <div className="mt-5">
      <Pills light={light} />
    </div>
  </div>
)

const DemoHeading = ({ number, title, description, recommendation }) => (
  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-apple-blue">
          Option {number}
        </span>
        {recommendation && (
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-700">
            Recommended
          </span>
        )}
      </div>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-apple-dark-gray">
        {title}
      </h2>
    </div>
    <p className="max-w-md text-sm text-apple-mid-gray sm:text-right">
      {description}
    </p>
  </div>
)

const CoverIdeasPage = () => (
  <main className="min-h-screen bg-[#ececf0] text-apple-dark-gray">
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Akshat Sinha logo"
            className="h-10 w-10 rounded-full object-contain"
          />
          <div>
            <h1 className="text-sm font-semibold">Cover integration studies</h1>
            <p className="text-xs text-apple-mid-gray">
              Six non-destructive mockups
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="rounded-full bg-apple-gray px-4 py-2 text-xs font-medium transition-colors hover:bg-apple-border"
        >
          Back to portfolio
        </Link>
      </div>
    </header>

    <div className="mx-auto max-w-6xl space-y-20 px-5 py-12 sm:px-8 sm:py-16">
      <section>
        <DemoHeading
          number="01"
          title="Soft-faded background"
          description="The artwork becomes atmosphere behind the introduction, with no visible card edge."
          recommendation
        />
        <div className="relative min-h-[430px] overflow-hidden bg-white shadow-xl shadow-black/5">
          <img
            src={cover}
            alt=""
            className="absolute inset-y-0 right-0 h-full w-[88%] object-cover object-[68%_center]"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 38%, black 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 38%, black 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="relative flex min-h-[430px] items-center px-7 py-16 sm:px-14">
            <Intro />
          </div>
        </div>
      </section>

      <section>
        <DemoHeading
          number="02"
          title="Split introduction"
          description="Text and artwork share one composition, rather than appearing as two separate cards."
        />
        <div className="grid min-h-[430px] overflow-hidden bg-[#071426] shadow-xl shadow-black/10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative z-10 flex items-center px-7 py-14 sm:px-12">
            <Intro light compact />
          </div>
          <div className="relative min-h-[300px] md:min-h-0">
            <img
              src={cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, black 22%, black 100%)',
                maskImage:
                  'linear-gradient(to right, transparent 0%, black 22%, black 100%)',
              }}
            />
          </div>
        </div>
      </section>

      <section>
        <DemoHeading
          number="03"
          title="Portrait backdrop"
          description="The technical illustration supports your personal photo instead of competing with the introduction."
        />
        <div className="grid min-h-[480px] items-center gap-10 overflow-hidden bg-white px-7 py-14 shadow-xl shadow-black/5 md:grid-cols-[1fr_0.8fr] md:px-14">
          <Intro />
          <div className="relative mx-auto h-[370px] w-full max-w-sm">
            <img
              src={cover}
              alt=""
              className="absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] object-cover object-[68%_center] opacity-90"
              style={{
                WebkitMaskImage:
                  'radial-gradient(ellipse at center, black 25%, transparent 72%)',
                maskImage:
                  'radial-gradient(ellipse at center, black 25%, transparent 72%)',
              }}
            />
            <img
              src={portrait}
              alt="Akshat Sinha"
              className="relative z-10 mx-auto h-full w-[260px] rounded-[2rem] object-cover object-[65%_66%] shadow-2xl ring-4 ring-white"
            />
          </div>
        </div>
      </section>

      <section>
        <DemoHeading
          number="04"
          title="Sidebar extension"
          description="A restrained crop adds identity to the navigation while keeping the main page almost untouched."
        />
        <div className="flex min-h-[500px] overflow-hidden bg-white shadow-xl shadow-black/5">
          <aside className="relative hidden w-60 shrink-0 overflow-hidden border-r border-white/10 bg-[#071426] sm:block">
            <img
              src={cover}
              alt=""
              className="absolute inset-x-0 top-0 h-60 w-full object-cover object-[63%_center] opacity-80"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 35%, transparent 100%)',
                maskImage:
                  'linear-gradient(to bottom, black 35%, transparent 100%)',
              }}
            />
            <div className="relative z-10 px-6 pt-8">
              <img
                src={logo}
                alt=""
                className="h-16 w-16 rounded-full bg-white/10 object-contain shadow-lg ring-1 ring-white/30"
              />
              <p className="mt-3 font-semibold text-white">Akshat Sinha</p>
              <p className="text-[10px] uppercase tracking-widest text-blue-300">
                SRE · Security
              </p>
              <nav className="mt-16 space-y-2 text-sm text-slate-400">
                {['About', 'Work', 'Publications', 'Service', 'Contact'].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 ${
                        index === 0 ? 'bg-white/10 text-white' : ''
                      }`}
                    >
                      {item}
                    </div>
                  )
                )}
              </nav>
            </div>
          </aside>
          <div className="flex flex-1 items-center px-7 py-14 sm:px-12">
            <Intro />
          </div>
        </div>
      </section>

      <section>
        <DemoHeading
          number="05"
          title="Section transition"
          description="A cinematic strip separates the introduction from education and skills without becoming a standalone card."
        />
        <div className="overflow-hidden bg-white shadow-xl shadow-black/5">
          <div className="px-7 pb-10 pt-14 sm:px-14">
            <Intro />
          </div>
          <div className="relative h-44">
            <img
              src={cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
                maskImage:
                  'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
              }}
            />
          </div>
          <div className="grid gap-8 px-7 pb-14 pt-8 sm:grid-cols-2 sm:px-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-apple-mid-gray">
                Education
              </p>
              <p className="mt-3 text-sm font-medium">
                University of Wisconsin–Madison
              </p>
              <p className="text-xs text-apple-mid-gray">
                MS, Computer Science
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-apple-mid-gray">
                Focus
              </p>
              <p className="mt-3 text-sm text-apple-mid-gray">
                Kubernetes · GCP · Terraform · Prometheus · Kafka
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <DemoHeading
          number="06"
          title="Right-edge illustration"
          description="Only the strongest visual elements enter the page, fading naturally into the content area."
        />
        <div className="relative min-h-[460px] overflow-hidden bg-white shadow-xl shadow-black/5">
          <img
            src={cover}
            alt=""
            className="absolute inset-y-0 right-0 h-full w-[72%] object-cover object-[82%_center]"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 45%, black 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 45%, black 100%)',
            }}
          />
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-white via-white/95 to-transparent" />
          <div className="relative flex min-h-[460px] items-center px-7 py-16 sm:px-14">
            <Intro compact />
          </div>
        </div>
      </section>
    </div>

    <footer className="border-t border-black/10 bg-white py-8 text-center text-xs text-apple-mid-gray">
      Comparison page only — the portfolio homepage has not been changed.
    </footer>
  </main>
)

export const Head = () => (
  <>
    <title>Cover Integration Ideas · Akshat Sinha</title>
    <meta name="robots" content="noindex" />
  </>
)

export default CoverIdeasPage
