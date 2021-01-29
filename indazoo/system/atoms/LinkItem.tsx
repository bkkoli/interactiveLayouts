/* eslint-disable */
import React from 'react'
import Link from 'next/link'

type LinkItemProps = {
  name: string
  direction: string
  href: string
}

/* eslint-disable */
function LinkItem({ name, direction, href }: LinkItemProps) {
  let className = 'flex align-center'
  if (direction === 'row') className += ' mr-5'
  else className += ' mb-5'
  return (
    <div className={className}>
      <Link href={href}>{name}</Link>
    </div>
  )
}

LinkItem.defaultProps = {
  name: '',
  direction: 'row',
  href: '/',
}

export default LinkItem
