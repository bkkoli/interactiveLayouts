/* eslint-disable */
import React from 'react'
import ListItem from '../atoms/ListItem'
import LinkItem from '../atoms/LinkItem'

type ListProps = {
  data: Array<any>
  direction: string
  itemName: string
  className: string
}

/* eslint-disable */
function List({ data, direction, itemName, className }: ListProps) {
  const directionClass = direction === 'row' ? ' flex flex-row' : ' flex flex-col'
  className += ` ${directionClass}`
  return (
    <div className={className}>
      {data.map(({ name = '', href = '', icon } = {}, index) =>
        itemName === 'link' ? (
          <LinkItem
            className="flex items-center hover:text-blue-500 active:text-blue-500"
            name={name}
            key={index}
            direction={direction}
            href={href}
            icon={icon}
          />
        ) : (
          <ListItem name={name} key={index} direction={direction} />
        )
      )}
    </div>
  )
}

List.defaultProps = {
  data: [],
  direction: 'row',
  itemName: 'link',
  className: 'flex flex-row',
}

export default List
