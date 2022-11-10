import axios from "axios";
const baseurl="https://postman1234.herokuapp.com";
// const baseurl="http://localhost:2410";
function get(url){
    return axios.get(baseurl+url)
}
function post(url,obj) {
    return axios.post(baseurl+url,obj)
}
function put(url,obj) {
    return axios.put(baseurl+url,obj)
}
function deleteapi(url) {
    return axios.delete(baseurl+url)
}
export default {
    get,
    post,
    put,
    deleteapi
};

