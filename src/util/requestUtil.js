/*
 * 请求工具类
 */

import Axios from "axios";


 const reqBaseUrl="http://localhost:8282"
export const getBaseUrl= () => {
   
    return reqBaseUrl;
}

   const respBaseUrl="http://localhost:8080"
export const getRespBaseUrl = () => {
 
    return respBaseUrl;
}



export const requestUtil = (params) => {
    return new Promise((resolve, reject) => {
        Request({
            ...params,
            url: reqBaseUrl + params.url,
            
          }).then( {
            success: (result) => {
                resolve(result.data)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
   
}