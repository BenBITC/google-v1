import Image from 'next/image'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import {SearchIcon, MicrophoneIcon, XIcon} from '@heroicons/react/solid'
import User from './User';

export default function SearchHeader() {
    const router = useRouter();
    const searchInputRef =useRef();
   
    function search(event){
        event.preventDefault();
        const term = searchInputRef.current.value.trim();
        if(!term) return
        router.push(`/search?term=${term}`)
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image
                    onClick={() => router.push('/')}
                    src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
                    width="120"
                    height="40"
                    objectFit='contain'
                    className='cursor-pointer'
                />
                <form className='flex border border-grey-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
                    <input
                        type="text"
                        defaultValue={router.query.term}
                        ref={searchInputRef}
                        className='w-full focus:outline-none'
                    />
                    <XIcon
                        onClick={()=>(searchInputRef.current.value = "")}
                        className='h-7 text-gray-500 cursor-pointer sm:mr-3'
                    />
                    <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3'/>
                    <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500'/>
                    <button onClick={search} type='submit' hidden/>
                </form>
                <User className="ml-auto"/>
            </div>
        </header>
    )
}
