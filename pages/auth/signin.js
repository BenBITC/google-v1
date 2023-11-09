import React from 'react'
import Header from '../../components/Header'
import {getProviders, signIn} from "next-auth/react"

export default function signin({providers}) {
  return (
    <div>
        <Header/>
        <div className='mt-10'>
            {console.log(providers)}
            {providers ? (
                Object.values(providers).map((provider) => (
                    <div key={providers.name} className="flex flex-col items-center">
                        <img
                            className='w-52 object-cover'
                            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
                            alt="Google logo"
                        />
                        <p className='text-sm italic my-10 text-center'>This website is created for learning purposes</p>
                        <button className="bg-red-400 rounded-lg text-white p-3 hover:shadow-md hover:bg-red-500" onClick={()=>signIn(providers.id, {callbackUrl : "/"})}>Sign in with {providers.name}</button>
                    </div>
            ))
            ) : (
                <p>Loading providers...</p>
            )
            }
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    try {
      const providers = await getProviders();
      console.log('Providers:', providers);
      return {
        props: { providers },
      };
    } catch (error) {
      console.error('Error fetching providers:', error);
      return {
        props: { providers: null }, // Handle the error gracefully
      };
    }
  }