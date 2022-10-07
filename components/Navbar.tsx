import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { createOrGetUser  } from '../utils/index'
import useAuthStore from '../store/authStore'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'


function Navbar() {
  
  const { userProfile, addUser, removeUser} = useAuthStore()
 
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-3 px-5">
      <Link href="/">
      <div >
       <h2 className="cursor-pointer text-2xl font-bold text-cyan-800 font-mono italic">Beltik App</h2>
      </div>
      </Link>
      <div>
        Search
      </div>
      <div>
        {
          userProfile ? (
          <div className="flex gap-5 md:gap-10"> 
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd  className="text-xl" /> {` `} 
                <span  className="hidden md:block">
                  Upload
                </span> 
              </button>
            </Link>
            {userProfile.image && (
               <Link href="/">
               <>
               <Image 
               width={40}
               height={40}
               className="rounded-full cursor-pointer"
               src={userProfile.image}
               alt="profile shoot"
               />
               </>
             </Link>
            ) }
            <button 
            type='button'
            className="px-2 border-2 rounded-full hover:bg-gray-100"
            onClick={() => {
              googleLogout()
              removeUser()
            }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
             ) : (
             <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser) }

            onError={() => console.log('Error') }
            />)
        }
      </div>
    </div>
  )
}

export default Navbar