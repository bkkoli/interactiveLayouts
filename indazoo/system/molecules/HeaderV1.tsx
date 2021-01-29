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
    <header className={`h-20 flex items-center px-20 ${className}`}>
      <nav className="flex w-full">
        {/* brandIcon */}
        <div className="brandIcon cursor-pointer">
          <Link href="/">
            <Image src="/system/brandLogo.png" alt="indazoo" width="102" height="42" />
          </Link>
        </div>

        {/* menu */}
        <List className="ml-auto items-center" data={data} />
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
