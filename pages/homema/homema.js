import { useRouter } from "next/router"
import Image from 'next/image'
import { ssApi } from '../api/index'

import {
    HeartIcon,
    StarIcon,
    SupportIcon
} from "@heroicons/react/outline"

//  let detail = ssApi.GetList();
//  console.log(detail);


const Homema = (props) => {
    const homema = props.detail;
    const router = useRouter();

    console.log()

    return (
               
        <div className="hover:text-white ">
            <div className="w-screen md:flex mt-20">
            <div className="md:flex-shrink-0"></div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Nuna_V</span><br />
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">누나뷔</span>
                    <div className="">
                        <img className="w-96 rounded" src="/image/nuna.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <a href="https://discord.com/invite/TCWsj9QDZ7" target="_blank">
                    <StarIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">{homema[0].name}</span><br />
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">리얼뷔</span>
                    <div className="">
                        <img className="w-96 rounded-full" src="/image/real.png" alt="test" />
                    </div>
                    </a>
                </div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">RULER_V</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">룰러뷔</span>
                    <div className="">
                        <img className="w-96 rounded-full" src="/image/ruler.jpeg" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <SupportIcon className="h-8 group-hover:animate-spin"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Polaris</span>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">폴라리스</span>
                    <div className="">
                    <Image
                        src={
                            'https://duckzill-resource.s3.ap-northeast-2.amazonaws.com/upload/store/2021/01/14/f28fff7e-f179-49bb-b4e8-aa47d41e2925.jpg'
                        }
                        width={400}
                        height={400}
                        className="rounded-full"
                        />
                    </div>
                </div>                
            </div> 
        </div>
    )
}

export async function getServerSideProps(context) {
   
    let detail = await ssApi.GetList();
 
    return {
      props: {
        //sidoList : sidoList,
        detail: detail,
      },
    };
  }

// export async function list() {
//     try {
//         const result = await excuteQuery({
//             query: 'SELECT * FROM homema where idx = ?',
//             values: 1,
//         });

//         console.log(result)
//         return result[0];
//     } catch (error) {
//         console.log(error);
//     }
// }

export default Homema