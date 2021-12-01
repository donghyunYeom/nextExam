import { useRouter } from "next/router"

function Nav(){
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20">
                <h2 className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-red-500">1번</h2>
                <h2>2번</h2>
                <h2>3번</h2>
                <h2>4번</h2>
                <h2>5번</h2>
            </div>
        </nav>
    )
}

export default Nav