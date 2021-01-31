/* eslint-disable */
import React from 'react'
import Head from 'next/head'

import HeaderV1 from '../molecules/HeaderV1'

type IndazooProps = {
  title: string
  children: any
}

function IndazooLayout({ children, title }: IndazooProps) {
  let sitemap = [
    {
      text: 'ABOUT',
      to: '/about',
      _id: '/',
      hasChild: true,
      collapsed: false,
      parentId: '/',
      icon: void 0,
    },
    {
      text: 'ARTISTS',
      to: '/artists',
      _id: '/',
      hasChild: true,
      collapsed: false,
      parentId: '/',
      icon: void 0,
    },
    {
      text: 'WORKS',
      to: '/works',
      _id: '/',
      hasChild: true,
      collapsed: false,
      parentId: '/',
      icon: void 0,
    },
    {
      text: 'SHOP',
      to: '/shop',
      _id: '/',
      hasChild: true,
      collapsed: false,
      parentId: '/',
      icon: void 0,
    },
    {
      text: 'CONTACT',
      to: '/contact',
      _id: '/',
      hasChild: true,
      collapsed: false,
      parentId: '/',
      icon: void 0,
    },
  ]

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HeaderV1 data={sitemap.map(({ to: href, text: name, icon }) => ({ href, name, icon }))} />

      <main className="bg-gray-200" style={{ height: 'calc(100vh - 5rem)' }}>
        {children}
      </main>

      <footer></footer>
    </div>
  )
}

IndazooLayout.defaultProps = {
  title: 'Indazoo',
}

export default IndazooLayout
