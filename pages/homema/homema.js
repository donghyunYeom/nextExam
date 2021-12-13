import Image from 'next/image'
import { ssApi } from '../api/index'
import Header from '../components/Header'
import {useState, useEffect} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


import {
    HeartIcon,
    StarIcon,
    SupportIcon
} from "@heroicons/react/outline"

const Homema = (props) => {
    //const homema = props.detail;
    
    const [homema,setHome] = useState(props.detail);
    const [isCopied, setIsCopied] = useState(false);
    
    const afrerSearch = async (keyword) => {
        window.scrollTo(0,0)
        const res = await ssApi.GetList({keyword: keyword})
        setHome(res);
      }
      
    const Search = () =>{
        var keyword = (document.getElementById("search_keyword")).value; 
        afrerSearch(keyword);
    }

    const shortUrl = async () =>{
        //(document.getElementById("search_keyword")).value = shortUrl;
        //console.log(shortUrl)
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
        if( setIsCopied ){
            alert("클립보드에 복사되었습니다!!");
        }
    }
    

    const Explain = 
  useEffect(() => {
      Kakao.init(process.env.KAKAO_API_KEY);
      //Kakao.init("c063be17296e1c7973d558319b0ebe5a");
  }, []);

    const shareKakao = (name, image, url) => {
    Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
            title: name+" Discord",
            description: name+" Discord",
            imageUrl: image,
            link: {
            mobileWebUrl: url,
            androidExecParams: "Discord",
            },
        },
        buttons: [
            {
            title: "Discord로 이동",
            link: {
                mobileWebUrl: url,
            },
            },
        ],
    });
    }

    //twitter
    function shareTwitter(name, image, url) {
        var sendText = name; // 전달할 텍스트
        var sendUrl = url; // 전달할 URL
        window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
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

            <div className="w-auto md:flex mt-20" >
            <div className="md:flex-shrink-0"></div>
                {homema.map((homema) => (
                <div className="cursor-pointer group mr-20 inline-block" key={homema.idx}>
                    <HeartIcon className="h-8 group-hover:animate-bounce"/>
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">{homema.name}</span><br />
                    <span className="opacity-0 group-hover:opacity-100 tracking-widest">{homema.nameKo}</span>
                    <div className="">
                        <img className="w-96 rounded-full" src={homema.imagePath} alt="test" />
                    </div>
                    {/* <div onClick={()=> shortUrl(homema.shortUrl) } >단축url</div> */}
                    {/* <CopyToClipboard onCopy={ console.log("copy!!! " + homema.shortUrl) } text={homema.shortUrl}  > */}
                    <CopyToClipboard onCopy={ shortUrl } text={homema.shortUrl}  >
                        <button>단축url 복사</button>
                    </CopyToClipboard>

                    {/* {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null} */}
                    

                    <div onClick={()=> shareKakao(homema.name, homema.imagePath, homema.shortUrl) } >카카오톡 공유</div>
                    <div onClick={()=> shareTwitter(homema.name, homema.imagePath, homema.shortUrl) } >트위터 공유</div>

                    {/* <span className={` ${isCopied ? "" : "hidden"}`} >
                        Copied!
                    </span> */}
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


