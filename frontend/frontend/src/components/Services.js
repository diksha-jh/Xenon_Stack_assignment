import axios from "axios";



export async function regUser(userData) {
    return axios.post("http://localhost:8080/reg", userData);
  }

  
  
  export async function loginUser(userData) {
    return axios.post("http://localhost:8080/login", userData);
  }

  export async function saveContact(userData) {
    return axios.post("http://localhost:8080/contact",userData);
  
  }



