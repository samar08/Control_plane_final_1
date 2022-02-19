import React,{useEffect} from 'react';

import { CssBaseline,Container,Card,List,ListItem,ListItemText,Typography,Grid,CardContent,Button,CircularProgress,Divider } from '@material-ui/core';
//import AppbarComponent from '../components/AppbarComponent';
//import FooterComponent from '../components/FooterComponent';
import useStyles from '../styles';
import { podsinfoactioncreator } from '../actions/Podsinfoaction';
import { Resourcebar } from '../components/Resourcebar';
// import { masterinfoactioncreator } from '../actions/Masternodeinfoaction';
// import { workerinfoactioncreator } from '../actions/Workernodeinfoaction';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from 'react-redux';
import Podstable from '../components/Podstable';
const Podsinfo = () => {
    useEffect(() => {
        dispatch(podsinfoactioncreator());
        const interval=setInterval(()=>{
            dispatch(podsinfoactioncreator());
        },3000);
        return ()=>clearInterval(interval);
      }, []);
    const classes=useStyles();
    const dispatch=useDispatch();
    const pods=useSelector((state)=>(state.podsinfo.pods));
    const namespaces=pods?Object.keys(pods):null;
    //const worker=useSelector((state)=>(state.workerinfo.worker));
    //console.log('pods:',pods);
    //console.log('worker',worker);
  return (<>
  <CssBaseline/>
  
  <div>
  
      <Container className={classes.clusternamecontainer}>
              <Card className={classes.clusternamecard}>
                  <Typography variant="h6" align="center" className={classes.clusternamestring}>Pods info</Typography>
              </Card>

      </Container>
      <Resourcebar/>
      <Container  className={classes.nodescontainer}>
         <Grid container spacing={4} justify="center" direction={'row'}>
                      {namespaces?
                      namespaces.map((ns)=>(
                          
                        <Grid key="pods"  item xs={12} sm={10} md={8}>
                          <Typography align="center" className={classes.namespacestring}>Namespace: {ns}</Typography>
                        <Podstable ns={ns} pods={pods[ns]}/>
                        </Grid>
                      ))
                      :<center className={classes.circular}><CircularProgress /></center>
                     
                     }
              </Grid>

          </Container>

   
   
  </div>
  {/*<FooterComponent/>*/}
  </>);
};
const mapStatetoProps=state=>{
return{
    master:state.masterinfo.master
}
}
const mapdispatchtoprops=dispatch=>{
    return{
        getmasternodeinfo:()=>dispatch(podsinfoactioncreator())
    }
}
export default Podsinfo;
