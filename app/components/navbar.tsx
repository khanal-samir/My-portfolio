'use client'
import { links } from '../lib/data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useActiveSectionContext } from '../context/section-context'
import { useEffect } from 'react'
import { useWindowSizeHook } from '../lib/hooks'

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const width = useWindowSizeHook()

  useEffect(() => {
    const linksContainer = document.getElementById('links-container')
    const activeLink = document.getElementById(activeSection)
    if (linksContainer && activeLink && width < 700) {
      setTimeout(() => {
        linksContainer.scrollTo({
          left: activeLink.offsetLeft - linksContainer.offsetWidth / 2,
          behavior: 'smooth',
        })
      }, 750) // allow time for section to scroll into view
    }
  }, [activeSection, width])

  const renderedLinks = links.map(({ hash, label }) => {
    return (
      <li key={hash}>
        <Link
          href={hash}
          id={label}
          onClick={() => {
            setActiveSection(label)
            setTimeOfLastClick(Date.now())
          }}
          className={`rounded-full relative transition-all text-gray-400 font-medium px-4 py-1.5 flex ${
            activeSection == label
              ? 'text-white font-medium'
              : 'hover:bg-slate-600 hover:text-white'
          }`}
        >
          {label}
          {label === activeSection && (
            <motion.span
              className="bg-sjsu-gold rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
              layoutId="activeSection"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
            ></motion.span>
          )}
        </Link>
      </li>
    )
  })

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="md:rounded-full md:w-auto w-full md:p-2 p-4 fixed md:top-6 top-0 left-1/2 transform -translate-x-1/2 sm:bg-slate-700/75 bg-slate-700/50 z-10 backdrop-blur-md"
    >
      <ul
        id="links-container"
        className="flex overflow-x-auto scroll-hide items-center gap-2"
      >
        {renderedLinks}
      </ul>
    </motion.nav>
  )
}