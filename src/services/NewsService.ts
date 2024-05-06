import { options } from "../types";
import { NYEverything } from "./NYTAdService";
import { NewsAPIEverything } from "./NewsAPIAdService";

export const NewsService = (type:string,searchKeyword?:string,options?:options)=>{
    let results:Array<any>=[];
    if(type=='everything'){
        NYEverything().then(res=>{
            results.push(...res)
        })
        NewsAPIEverything().then(res=>{
            results.push(...res)

        })
        //await results.push();
        //await results.push(NewsAPIEverything());
    }
    console.log("yushsj, ", results);
    return results;

}