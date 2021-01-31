/* eslint-disable */
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'

type LinkItemProps = {
  name: string
  direction: string
  href: string
  icon: { name: [IconPrefix, IconName] }
  className: string
}

/* eslint-disable */
function LinkItem({ name, direction, icon, href, className }: LinkItemProps) {
  const router = useRouter()

  if (direction === 'row') className += ' mr-5'
  else className += ' mb-5'

  if (router.pathname === href) className += ' text-blue-500'
  return (
    <div className={className}>
      {icon ? <FontAwesomeIcon icon={icon.name} /> : ''}
      <Link href={href}>{name}</Link>
    </div>
  )
}

LinkItem.defaultProps = {
  name: '',
  direction: 'row',
  href: '/',
  icon: { name: ['fas', ''] },
  className: 'flex align-center',
}

export default LinkItem
