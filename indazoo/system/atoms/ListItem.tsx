/* eslint-disable */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'

type ListItemProps = {
  name: string
  direction: string
  icon: { name: [IconPrefix, IconName] }
}

/* eslint-disable */
function ListItem({ name, direction, icon }: ListItemProps) {
  let className = 'flex align-center'
  if (direction === 'row') className += ' mr-5'
  else className += ' mb-5'
  return (
    <div className={className}>
      {icon ? <FontAwesomeIcon icon={icon.name} /> : ''}
      {name}
    </div>
  )
}

ListItem.defaultProps = {
  name: '',
  direction: 'row',
  icon: { name: ['fas', ''] },
}

export default ListItem
