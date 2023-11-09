import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import {SearchIcon, MicrophoneIcon} from '@heroicons/react/solid'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null)

  function search(event){
    event.preventDefault();
    const term = searchInputRef.current.value.trim()

    if(!term) return

    router.push(`/search?term=${term}&searchType=`)
  }

  async function randomSearch(event){
    event.preventDefault();
    const randomTerm = await fetch("https://random-word-api.herokuapp.com/word?number=1").then((response) => response.json())

    if(!randomTerm) return

    router.push(`/search?term=${randomTerm}&searchType=`)
  }

  return (
    <div>
      <title>Google V1</title>

      {/* Header */}

      <Header/>

      {/* Body */}

      <form className='flex flex-col items-center mt-40'>
        <Image
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          width="300"
          height="100"
          objectFit='cover'
        />
        <div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 text-gray-500 mr-3'/>
          <input 
            ref={searchInputRef}
            type="text"
            className='flex-grow focus:outline-none'
          />
          <MicrophoneIcon className='h-5'/>
        </div>
        <div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={randomSearch} className='btn'>I&apos;m Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}

      <Footer />
    </div>
  )
}
