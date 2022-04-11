import axios from 'axios';

const request = axios.create({
  baseURL: 'http://api.cpengx.cn/metashop/api',
})

export const getHomePage = (params) => {
  return request({
    method:"GET",
    url:"/hoempage",
    params
  })
}

// 响应拦截器
request.interceptors.response.use((response)=>{
  if(response.status === 200){
    return response.data
  }else{
    return response
  }
},function(error){
  return Promise.reject(error)
})