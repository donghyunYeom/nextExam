import useSWR from 'swr'
import fetch from '../../libs/fetch'

const ssApi = {
  GetList() {  
    if(process.env.NEXTAUTH_URL === undefined)
    return fetch('/api/homema/list') 
    else
    return fetch(process.env.NEXTAUTH_URL+'/api/homema/list') 
  }
}


//export  {api};
export  {ssApi} ;

