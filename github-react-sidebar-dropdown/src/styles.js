import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles((theme)=>({
    Apptypography:{
        margin: '0px 10px',
        color:'#01a982',
    },
    Moreverticon:{
        textAlign:'center',
        paddingTop:'8px',
       
      '&:hover': {
        color:"blue",
        background: "#D3D3D3",
     },
    },
    morevertbtns:{
        width:'50px',
        '&:hover': {
        color:"blue",
        }
    },
    
    body:{
        marginTop:'1px'
    },
    header:{
        height:'60px',
        backgroundColor:'#FFFFFF',
    },
    headtitle:{
        color:'#FFFFFF',
        fontWeight: 'bold',
       backgroundColor:'#01a982',
    },
    podstable:{
    margin:"10px",
    },
    hpeicon:{
      
        "&:hover": {
        fontWeight:'bold',
        //border: '3px solid  #17EBA0',
        'box-shadow': '0 0 15px  #17EBA0',
        //transition: 'all 0.5s ease',
        }
    },
    clusterbtn:{
        width:'200px',
        height:'47px',
        color:'#FFFFFF',
        backgroundColor:'#01a982'
    },
    gridcontainer:{
        marginTop:'30px'
    },
    clusternamestring:{
        
        color:'#FFFFFF',
        backgroundColor:'#01a982'
    },
    namespacestring:{
        marginTop:"18px",
        width:"100%",
        color:'#FFFFFF',
        backgroundColor:'#01a982'
    },
    clusternamecontainer:{
        width:'100%',
        marginTop:'10px'
    },
    nodescontainer:{
        marginTop:'20px',
        width:"100%"
    },
    controlplaneinfo:{
        marginTop:'8px',
    },
    clusterbtns:{
     width:'155px'
    },
    podsinfobtn:{
        width:'155px',
        marginTop:"20px" 
    },
    circular:{
        marginTop:"20px",
    },
    footer:{
        backgroundColor:'#FFFFFF',
    position:'absolute',
    bottom:'0',
    marginBottom:'0',
    width:'100%',
    height:'80px',
    },
    copyright:{
    width:'50%'
    }
}));
export default useStyles;