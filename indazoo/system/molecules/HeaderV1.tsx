/* eslint-disable */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import List from '../components/List'

type HeaderV1Props = {
  data: Array<any>
  className: string
}

function HeaderV1({ data, className }: HeaderV1Props) {
  return (
    <header className={`h-20 flex items-center px-10 lg:px-20 ${className}`}>
      <nav className="flex w-full items-center">
        {/* brandIcon */}
        <div className="brandIcon cursor-pointer">
          <Link href="/">
            <div>
              <Image src="/system/brandLogo.png" alt="indazoo" width="102" height="42" />
            </div>
          </Link>
        </div>

        {/* mobile menu button */}
        <svg
          className="md:hidden ml-auto cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        {/* menu */}
        <List className="hidden md:flex ml-auto items-center" data={data} />
        {/* userName */}
        {/* logout button */}
      </nav>
    </header>
  )
}

HeaderV1.defaultProps = {
  data: [],
  className: '',
}

export default HeaderV1
