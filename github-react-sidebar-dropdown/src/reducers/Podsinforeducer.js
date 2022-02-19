import { GET_PODS_INFO } from "../Actiontypes"

const initalstateofpods={ 
pods:null
//{'default':[{'pod_namespace':'default','pod_ip':'172.28.6.2','pod_name':'nginx'}]}
}

const Podsinforeducer=(state=initalstateofpods,action)=>{
    
    switch(action.type){
        case GET_PODS_INFO:return{
            ...state,
            pods:action.payload
        }
        default: return state
    }
}
export default Podsinforeducer;