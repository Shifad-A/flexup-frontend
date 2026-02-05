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

export const updateUserAPI=async(reqBody,reqHeader)=>{
        return await commonAPI('put',`${serverURL}/api/update-user`,reqBody,reqHeader)
}
export const getUsersAPI=async(reqHeader)=>{
        return await commonAPI('get',`${serverURL}/api/all-users`,{},reqHeader)
}
export const getTrainerAPI=async(reqHeader)=>{
        return await commonAPI('get',`${serverURL}/api/all-trainers`,{},reqHeader)
}
export const trainerRequestAPI=async(reqBody,reqHeader)=>{
        return await commonAPI('post',`${serverURL}/api/trainer-request`,reqBody,reqHeader)
}
export const requestsViewAPI=async(reqHeader)=>{
        return await commonAPI('get',`${serverURL}/api/get-trainerRequests`,{},reqHeader)
}
export const acceptTrainerRequestsAPI=async(reqBody,reqHeader)=>{
        return await commonAPI('put',`${serverURL}/api/trainer/request-accept`,reqBody,reqHeader)
}
export const declineTrainerRequestsAPI=async(reqBody,reqHeader)=>{
        return await commonAPI('put',`${serverURL}/api/trainer/request-reject`,reqBody,reqHeader)
}
export const viewMyClientsAPI=async(reqHeader)=>{
        return await commonAPI('get',`${serverURL}/api/get-myClients`,{},reqHeader)
}
export const dashboardStatusAPI=async(reqHeader)=>{
        return await commonAPI('get',`${serverURL}/api/get-dashStatus`,{},reqHeader)
}