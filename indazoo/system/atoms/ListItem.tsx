/* eslint-disable */
import React from 'react'

type ListItemProps = {
  name: string
  direction: string
  icon: string
}

/* eslint-disable */
function ListItem({ name, direction }: ListItemProps) {
  let className = 'flex align-center'
  if (direction === 'row') className += ' mr-5'
  else className += ' mb-5'
  return <div className={className}>{name}</div>
}

ListItem.defaultProps = {
  name: '',
  direction: 'row',
  icon: ''
}

export default ListItem
