import React,{useState} from 'react';
import {Container,Card,Typography,Grid,CardContent, Button} from '@material-ui/core';
import useStyles from '../styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Popover } from '@mui/material';
import "../index.css";
const Homepage = () => {
    const classes=useStyles();
    const [ArgoCDanchorEl, ArgoCDsetAnchorEl] = useState(null);
    const ArgoCDhandleClick = (event) => {
    ArgoCDsetAnchorEl(event.currentTarget);
    };

  const ArgoCDhandleClose = () => {
    ArgoCDsetAnchorEl(null);
  };

  const ArgoCDopen = Boolean(ArgoCDanchorEl);
  const ArgoCDid = ArgoCDopen ? 'simple-popover' : undefined;
/*-------------------------------------------------------------------  */
const [HarboranchorEl, HarborsetAnchorEl] = useState(null);
const HarborhandleClick = (event) => {
HarborsetAnchorEl(event.currentTarget);
};

const HarborhandleClose = () => {
HarborsetAnchorEl(null);
};

const Harboropen = Boolean(HarboranchorEl);
const Harborid = Harboropen ? 'simple-popover' : undefined;
/*-------------------------------------------------------------------  */
const [PulpanchorEl, PulpsetAnchorEl] = useState(null);
const PulphandleClick = (event) => {
PulpsetAnchorEl(event.currentTarget);
};

const PulphandleClose = () => {
PulpsetAnchorEl(null);
};

const Pulpopen = Boolean(PulpanchorEl);
const Pulpid = Pulpopen ? 'simple-popover' : undefined;
/*-------------------------------------------------------------------  */
const [DRBDanchorEl, DRBDsetAnchorEl] = useState(null);
const DRBDhandleClick = (event) => {
DRBDsetAnchorEl(event.currentTarget);
};

const DRBDhandleClose = () => {
DRBDsetAnchorEl(null);
};

const DRBDopen = Boolean(DRBDanchorEl);
const DRBDid = DRBDopen ? 'simple-popover' : undefined;
/*-------------------------------------------------------------------  */
  const [PDNSanchorEl,PDNSsetAnchorEl] = useState(null);

  const PDNShandleClick = (event) => {
    PDNSsetAnchorEl(event.currentTarget);
  };

  const PDNShandleClose = () => {
    PDNSsetAnchorEl(null);
  };

  const PDNSopen = Boolean(PDNSanchorEl);
  const PDNSid = PDNSopen ? 'simple-popover' : undefined;
  /*-------------------------------------------------------------------  */
  return(
      <>
    <Container className={classes.clusternamecontainer}>
    <Card className={classes.clusternamecard}>
        <Typography variant="h6" align="center" className={classes.clusternamestring}>Control Plane 2.0</Typography>
    </Card>

</Container>
  <Container>
    <Typography style={{ fontWeight: 600,marginTop:"10px" }}>Dashboard</Typography>
    <Typography align="center" style={{ fontWeight: 600 }}>Components</Typography>
    <Grid container style={{marginTop:"20px"}} spacing={2} justify="center">
    <Grid key="ArgoCD"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Typography style={{ fontWeight: 600 }}>ArgoCD</Typography>
                    <MoreVertIcon aria-describedby={ArgoCDid} onClick={ArgoCDhandleClick}/>
      <Popover
        id={ArgoCDid}
        open={ArgoCDopen}
        anchorEl={ArgoCDanchorEl}
        onClose={ArgoCDhandleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{padding:'5px'}}>
       <Typography sx={{ p: 2 }}>Version: v2.2.5</Typography> 
       </div>
      </Popover>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box green' ></div>
                      Active
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="Harbor"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography style={{ fontWeight: 600 }}>Harbor</Typography>
                    <MoreVertIcon aria-describedby={Harborid} onClick={HarborhandleClick}/>
      <Popover
        id={Harborid}
        open={Harboropen}
        anchorEl={HarboranchorEl}
        onClose={HarborhandleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{padding:'5px'}}>
       <Typography sx={{ p: 2 }}>Version: v1.10.9</Typography> 
       </div>
      </Popover>
                    </div>
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box red' ></div>
                      Inactive
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="Pulp"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Typography style={{ fontWeight: 600 }}>Pulp</Typography>
                  <MoreVertIcon aria-describedby={Pulpid} onClick={PulphandleClick}/>
      <Popover
        id={Pulpid}
        open={Pulpopen}
        anchorEl={PulpanchorEl}
        onClose={PulphandleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{padding:'5px'}}>
       <Typography sx={{ p: 2 }}>Version: 2.6</Typography> 
       </div>
      </Popover>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box green' ></div>
                      Active
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="DRBD"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Typography style={{ fontWeight: 600 }}>DRBD</Typography>
                  <MoreVertIcon aria-describedby={DRBDid} onClick={DRBDhandleClick}/>
      <Popover
        id={DRBDid}
        open={DRBDopen}
        anchorEl={DRBDanchorEl}
        onClose={DRBDhandleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{padding:'5px'}}>
       <Typography sx={{ p: 2 }}>Version: 9.0.28</Typography> 
       </div>
      </Popover>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box red' ></div>
                      Inactive
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    <Grid key="PDNS"item xs={12} sm={6} md={2}>
    <Card >
                  <CardContent>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Typography style={{ fontWeight: 600 }}>PDNS</Typography>
                  <MoreVertIcon aria-describedby={PDNSid} onClick={PDNShandleClick}/>
      <Popover
        id={PDNSid}
        open={PDNSopen}
        anchorEl={PDNSanchorEl}
        onClose={PDNShandleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{padding:'5px'}}>
       <Typography sx={{ p: 2 }}>Version: 4.6.0</Typography> 
       </div>
      </Popover>
                    </div>
                   
                    <div>
                     <p style={{marginTop:"5px"}}>Status:</p>
                      <div style={{marginTop:"5px"}}>
                      <div class='box green' ></div>
                      Active
                      </div>
                      </div>
                  </CardContent>
    </Card>
    </Grid>
    </Grid>

    
  </Container>
</>
  );
};

export default Homepage;
