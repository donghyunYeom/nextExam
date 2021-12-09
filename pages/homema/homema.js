import Image from 'next/image'
import { ssApi } from '../api/index'
import Header from '../components/Header'
import {useState} from 'react';
//import { useRouter } from "next/router"
import useSWR from 'swr'

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

    const shortUrl = async (shortUrl) =>{

        console.log(shortUrl);
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
                    <div onClick={()=> shortUrl(homema.shortUrl) } >단축url</div>
                </div>
                ))}
            </div> 
        </div>
    )
}

export async function getServerSideProps(context) {
   
    let detail = await ssApi.GetList();

    console.log(detail)
 
    return {
      props: {
        detail: detail,
      },
    };
  }

export default Homema


