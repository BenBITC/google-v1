import { useRouter } from 'next/router'
import React from 'react'

export default function SearchHeaderOption({title, Icon, selected}) {
    const router = useRouter();

    function selectTab(title){
        router.push(
            `/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`
        );
    }
  return (
    <div onClick={()=>selectTab(title)} className={`flex items-center space-x-1 hover:text-blue-500 hover:border-blue-500 cursor-pointer pb-3 ${selected && "text-blue-500 border-b-4 border-blue-500"}`}>
        <Icon className='h-4' />
        <p>{title}</p>
    </div>
  )
}
