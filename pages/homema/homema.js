import Image from 'next/image'
import { ssApi } from '../api/index'
import Header from '../components/Header'
import {useState} from 'react';

import {
    HeartIcon,
    StarIcon,
    SupportIcon
} from "@heroicons/react/outline"






const Homema = (props) => {
    //const homema = props.detail;
    
    const [homema,setHome] = useState(props.detail);

    const afrerSearch = async (keyword) => {
        window.scrollTo(0,0)
        const res = await ssApi.GetList({keyword: keyword})
        setHome(res);
      }
      
      const Search = () =>{
        var keyword = (document.getElementById("search_keyword")).value; 
        afrerSearch(keyword);
      }
      
    return (
        
        <div className="hover:text-white ">
            <Header />

            <div className="w-screen text-center mt-24 mb-24">
                <div className="inline">
                <input
                    id="search_keyword"
                    type="text"
                    placeholder="search"
                    className="w-2/3 h-12 text-center text-black"
                />
                <div className="inline-block bg-black text-white h-14 w-12 text-center align-middle" onClick={()=> Search() }>검색</div>
                </div>
            </div>

            <div className="w-auto md:flex mt-20">
            <div className="md:flex-shrink-0"></div>
                {homema.map((homema) => (
                <div className="cursor-pointer group mr-20 inline-block">
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">{homema.name}</span><br />
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">{homema.nameKo}</span>
                    <div className="">
                        <img className="w-96 rounded-full" src={homema.imagePath} alt="test" />
                    </div>
                </div>
                ))}
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

export default Homema












            {/* <div className="cursor-pointer group mr-20 inline-block">
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">Nuna_V</span><br />
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">누나뷔</span>
                    <div className="">
                        <img className="w-96 rounded" src="/image/nuna.png" alt="test" />
                    </div>
                </div>
                <div className="cursor-pointer group mr-20 inline-block">
                    <a href={homema[0].discord} target="_blank">
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
                </div> */}