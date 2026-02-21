"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const TypewriterEffect = dynamic(() => import('typewriter-effect'), { ssr: false })

const Typewriter: React.FC = () => {
  return (
    // `typewriter-effect` requires window; render only on client via dynamic import
    // eslint-disable-next-line react/jsx-no-undef
    <TypewriterEffect
      options={{
        strings: [
            " Frontend developer",
            " Backend developer",
            " Web developer",
            ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
        wrapperClassName: "p1-2",
      }}
    />
  )
}

export default Typewriter
