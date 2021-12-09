import useSWR from 'swr'
import fetch from '../../libs/fetch'

const ssApi = {

  GetList(keyword) {  
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(keyword),
      };
    if(process.env.NEXTAUTH_URL === undefined){
        return fetch('/api/homema/list',options) 
    }else{
        return fetch(process.env.NEXTAUTH_URL+'/api/homema/list',options) 
    }
  }
}

//export  {api};
export  {ssApi} ;

