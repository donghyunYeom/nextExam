import { useRouter } from "next/router"
import Image from 'next/image'

import {
    HeartIcon,
    StarIcon,
    SupportIcon
} from "@heroicons/react/outline"

function Homema(){
    const router = useRouter();

    return (
        <div className="flex-row items-center sm:w-20 hover:text-white mt-48 ml-20 md:max-w-2xl">
            <div class="flex flex-row w-screen md:max-w-screen-lg">
                <div className="cursor-pointer group mr-20 flex-1 w-auto">
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Nuna_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">누나뷔</span>
                    {/* <Image class="w-48 h-48" src="/image/nuna.png" alt="test" width="500" height="500"></Image> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/nuna.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <a href="https://discord.com/invite/TCWsj9QDZ7" target="_blank">
                    <StarIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">REALV</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">리얼뷔</span>
                    {/* <img height={200} src={`/image/real.png`} /> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/real.png" alt="test" />
                    </div>
                    </a>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    {/* <img height={200} src={`/image/ruler.jpeg`} /> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    {/* <img height={200} src={`/image/ruler.jpeg`} /> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>
            </div> 

            <div class="flex flex-row w-screen md:max-w-screen-lg mt-20">
                <div className="cursor-pointer group mr-20 flex-1 w-auto">
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Nuna_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">누나뷔</span>
                    {/* <Image class="w-48 h-48" src="/image/nuna.png" alt="test" width="500" height="500"></Image> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/nuna.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <StarIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">REALV</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">리얼뷔</span>
                    {/* <img height={200} src={`/image/real.png`} /> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/real.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    {/* <img height={200} src={`/image/ruler.jpeg`} /> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    {/* <img height={200} src={`/image/ruler.jpeg`} /> */}
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>                
            </div> 
        </div>
    )
}

export default Homema