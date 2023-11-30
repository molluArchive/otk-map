import dotenv from "dotenv"

const api = async (url:string, body?:any ) => {

  const response = await fetch("http://localhost:3333" + url,{
    method:"GET",
  })
  const result = await response.json()
  return result;
};

export default api;
