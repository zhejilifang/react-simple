import jsonp from "common/js/jsonp";
import {jsonpConfig,commonParams} from "common/js/config";


export function getRankList(){
    const url="";
    const opt = Object.assign(commonParams,{
        
    })
    return jsonp(url,opt,jsonpConfig)
}