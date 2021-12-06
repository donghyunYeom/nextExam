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
               
        <div className="hover:text-white ">
            <div class="w-screen md:flex mt-20">
            <div class="md:flex-shrink-0"></div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Nuna_V</span><br />
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">누나뷔</span>
                    <div class="">
                        <img class="w-96 rounded" src="/image/nuna.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <StarIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">REALV</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">리얼뷔</span>
                    <div class="">
                        <img class="w-96 rounded-full" src="/image/real.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    <div class="">
                        <img class="w-96 rounded-full" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Polaris</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">폴라리스</span>
                    <div class="">
                    <Image
                        src={
                            'https://duckzill-resource.s3.ap-northeast-2.amazonaws.com/upload/store/2021/01/14/f28fff7e-f179-49bb-b4e8-aa47d41e2925.jpg'
                        }
                        width={400}
                        height={400}
                        class="rounded-full"
                        />
                    </div>
                </div>                
            </div> 
        </div>
    )
}

export default Homema



{/* <div class="flex flex-row w-screen md:max-w-screen-lg">
                <div className="cursor-pointer group mr-20 flex-1 w-auto">
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Nuna_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">누나뷔</span>
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/nuna.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <a href="https://discord.com/invite/TCWsj9QDZ7" target="_blank">
                    <StarIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">REALV</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">리얼뷔</span>
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/real.png" alt="test" />
                    </div>
                    </a>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 flex-1">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    <div class="w-full h-full">
                        <img class="w-auto" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>
            </div>  */}