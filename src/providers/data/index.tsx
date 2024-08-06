import { GraphQLClient } from "@refinedev/nestjs-query";
import {fetchWrapper} from "./fetch-wrapper";
import { createClient } from "graphql-ws";

export const APi_BSE_URL = "https://api.crm.refine.dev";
export const API_URL = "https://api.crm.refine.dev";
export const WS_URL = "wss://api.crm.refine.dev/graphql";


export const client = new GraphQLClient(API_URL,{
    fetch:(url:string,options:RequestInit)=>{
        try{
            return fetchWrapper(url,options);
        }catch(error){
            return Promise.reject(error as Error);
        }
    }
});

export const wsCLient =  typeof window !== "undefined"  
? createClient({
    url: WS_URL,
    connectionParams: function() {
        const access_token = localStorage.getItem("access_token");
        return {
            headers: {
             Authorization: `Bearer ${access_token}`,
            }
        };
    }
}) : null;