import { http } from "./http";

interface loginData {
    username: string;
    password: string;
}
export const loginApi = (data:loginData)=>{
    return http.post('/park/login',data)
}

interface listData {
    page: number;
    pageSize: number;
    carNumber?:string;
    personName?:string;
    cardStatus?:string
}
export const listApi = (data?:listData)=>{
    return http.get('/parking/card/list',data)
}

export const buildingApi = (data:any)=>{
    return http.get('/park/enterprise',data)
}