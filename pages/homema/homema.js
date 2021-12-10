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
        (document.getElementById("search_keyword")).value = shortUrl;
    }

    // Kakao.Link.createDefaultButton({
    //     container: '#create-kakao-link-btn',
    //     objectType: 'text',
    //     text:
    //       '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.',
    //     link: {
    //       mobileWebUrl:
    //         'https://developers.kakao.com',
    //       webUrl:
    //         'https://developers.kakao.com',
    //     },
    //   });
      

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

            <div className="w-auto md:flex mt-20" >
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
                    {/* <div onClick={()=> Kakao.Link.createDefaultButton(homema.shortUrl) } >단축url 공유</div> */}
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
        detail: detail,
      },
    };
  }

export default Homema


