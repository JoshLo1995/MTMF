import React from 'react';
import TrackImg from '../../../Content/images/Silverstone_Circuit_2011.png';
// const cocoSsd = require('@tensorflow-models/coco-ssd');
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
 
import {api} from '../../../routes/api-routes';
 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import ImageDetails from '../../../Scripts/ImageDetails';

export default class MembersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image_object: null,
            image_object_details: {},
            active_type: null
        }
    }

    updateImageObject(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState(
                {
                    image_object: reader.result,
                    image_object_details: {},
                    active_type: null
                }
            )
        }
    }

    processImageText() {

    }

    render() {
        return(
            <Container maxwidth = "md" style = {{marginTop: '5%'}}>
                <Grid container spacing = {2}>
                    <Grid item xs = {12} container justify = "center">
                        <CardContent>
                            <Typography 
                                variant = "h4"
                                color = "textPrimary"
                                component = "h4">
                                    Upload overhead track image to start!
                                </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid item xs={12} container justify = "center">
                       {this.state.image_object &&
                           <img src={this.state.image_object} alt="" height="700px"/>
                       }
                </Grid>
                <Grid item xs={12} container justify = "center">
                    <Card>
                        <CardContent>
                            <Button variant="contained"
                                component='label' // <-- Just add me!
                                >
                                Upload Image
                                <input accept="image/jpeg" onChange={(e) =>  this.updateImageObject(e)} type="file" style={{ display: 'none' }} />
                            </Button>
                           </CardContent>
                       </Card>
                   </Grid>
                   <Grid item xs={12}>
                       <Grid container justify="center" spacing={3}>
                           <Grid item >
                               {this.state.image_object && <Button onClick={() => this.processImageObject("imagenet")}variant="contained" color="primary">
                                   Get objects with ImageNet
                               </Button>}
                           </Grid>
                       </Grid>
                   </Grid>
                   <Grid item xs={9}>
                       <Grid container justify="center">
                           {this.state.active_type && this.state.image_object_details[this.state.active_type] &&
                               <Grid item xs={12}>
                                   <Card>
                                       <CardContent>
                                           <Typography variant="h4" color="textPrimary" component="h4">
                                               {this.state.active_type.toUpperCase()}
                                           </Typography>
                                           <ImageDetails type={this.state.active_type} data = {this.state.image_object_details[this.state.active_type]}></ImageDetails>
                                       </CardContent>
                                   </Card>
                               </Grid>
                           }
                           {this.state.active_type && !this.state.image_object_details[this.state.active_type] &&
                               <Grid item xs={12}>
                                   <CircularProgress
                                       color="secondary"
                                   />
                               </Grid>
                           }
                       </Grid>
                   </Grid>
           </Container>
       );
   }
}
    
    // <div className = "container">
    //     <div className = "row">
    //         <div className = "col-12">
    //             <img 
    //                 id = "content"
    //                 src = {TrackImg}
    //                 alt = "silverstone">    
    //             </img>
    //         </div>
    //     </div>
    // </div>