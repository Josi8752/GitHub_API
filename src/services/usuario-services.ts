import axios from "axios";
import { Base_URL } from "../utils/system";

export function userGithub(user: string){
    return axios.get(`${Base_URL}/${user}`);
    
}
