import { useRouter } from "next/router"


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
}


function Nav(){
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20">
                <h2 className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-red-500"
                        onClick={
                            //() => router.push(`/?menu=2`, '/')
                            () => router.push(`/posts/posts`, '/')
                        }
                        >목록</h2>
            </div>
        </nav>
    )
}

export default Nav