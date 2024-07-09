'use client'
import React from 'react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

const Roadmap = () => {
  return (

    <div className='flex flex-col'>

      <div className="content text-white">
        <h1>Roadmap</h1>
        <Link href='/modules/introduction' >
          <Image
            alt='roadmap'
            width={400}
            height={400}
            src='/roadmap/l1.svg'
          />
        </Link>
        <p>Coming soon...</p>
      </div>

    </div>


  )
}

export default Roadmap  