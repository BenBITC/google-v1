import React from 'react'
import Header from '../../components/Header'
import {getProviders, signIn} from "next-auth/react"

export default function signin({providers}) {
  return (
    <div>
        <Header/>
        <div className='mt-10'>
            {Object.values(providers).map(providers =>(
                <div key={providers.name} className="flex flex-col items-center">
                    <img
                        className='object-cover'
                        src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
                        alt="Google logo"
                    />
                    <p className='text-sm italic my-10 text-center'>This website is created for learning purposes</p>
                    <button className="bg-red-400 rounded-lg text-white p-3 hover:shadow-md hover:bg-red-500" onClick={()=>signIn(providers.id, {callbackUrl : "/"})}>Sign in with {providers.name}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {providers},
    };
}