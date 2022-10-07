import React from 'react'
import {footerList3, footerList2, footerList1 } from '../utils/constants'


const List = ({ items, mt }: { items: string[], mt: boolean}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${ mt &&'mt-5'}`}>
    {items.map((item, index) => (
      <p key={index} className="text-gray-400 text-sm hover:underline cursor-pointer">
        {item}
      </p>
    ))}
  </div>
  )
}

function Footer() {
  return (
    <div className="mt-6 hidden xl:block">
     <List items={footerList1} mt={false} />
     <List items={footerList2} mt />
     <List items={footerList3} mt />
     <p className="mt-4 text-sm text-gray-400">2022 Blektik App &copy;</p>
    </div>
  )
}

export default Footer
