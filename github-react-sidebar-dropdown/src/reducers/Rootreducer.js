import { combineReducers } from 'redux';
import Clusterinforeducer from './Clusterinforeducer';
import Masterinforeducer from './Masterinforeducer';
import Workerinforeducer from './Workerinforeducer';
import Podsinforeducer from './Podsinforeducer';
const Rootreducer=combineReducers({
    podsinfo:Podsinforeducer,
    masterinfo:Masterinforeducer,
    
})
export default Rootreducer;
