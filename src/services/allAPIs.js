import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

// 1.Register User
export const registerAPI=async(reqBody)=>{
        return await commonAPI('post',`${serverURL}/api/register`,reqBody,{})
}
//login API
export const loginAPI=async(reqBody)=>{
        return await commonAPI('post',`${serverURL}/api/login`,reqBody,{})
}
//googleLogin
export const googleLoginAPI=async(reqBody)=>{
        return await commonAPI('post',`${serverURL}/api/googleLogin`,reqBody,{})
}
export const getUserAPI=async(reqHeader)=>{
        return await commonAPI('get',`${serverURL}/api/getUser`,{},reqHeader)
}