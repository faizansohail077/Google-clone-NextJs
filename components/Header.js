import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOption from './HeaderOption'

const Header = () => {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) return
        router.push(`/search?term=${term}`)

    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full items-center p-6">
                <Image height={50} width={100} src="/google.png" className="cursor-pointer" onClick={() => router.push('/')} />
                <form className="flex flex-grow px-6 py-3 items-center ml-10 mr-5 border border-gray-150 rounded-full shadow-lg max-w-3xl">
                    <input type="text" className="flex-grow w-full focus:outline-none" ref={searchInputRef} />
                    <XIcon className="h-7 text-gray-700 cursor-pointer transition duration-350 transform hover:scale-125 sm:mr-3"
                        onClick={() => searchInputRef.current.value = ""}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url={'/faizan.png'} />
            </div>
            <HeaderOption />
        </header>
    )
}

export default Header
