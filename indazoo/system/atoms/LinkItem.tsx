/* eslint-disable */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type LinkItemProps = {
  name: string
  direction: string
  href: string
  icon: Object
  className: string
}

/* eslint-disable */
function LinkItem({ name, direction, icon, href, className }: LinkItemProps) {
  if (direction === 'row') className += ' mr-5'
  else className += ' mb-5'
  return (
    <div className={className}>
      {Object.keys(icon).length > 0 ? <Image src="" alt="" width="" height="" /> : '' }
      <Link href={href}>{name}</Link>
    </div>
  )
}

LinkItem.defaultProps = {
  name: '',
  direction: 'row',
  href: '/',
  icon: {},
  className: 'flex align-center'
}

export default LinkItem
