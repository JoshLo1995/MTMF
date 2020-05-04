import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class ImageDetails extends React.Component {
  
    render() {
  
        console.log(this.props.data);
  
        return (
            <Grid item xs={12}>
                <Paper>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Objects</TableCell>
                        <TableCell align="right">Probability</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((row) => {
                            if (this.props.type === "imagenet") {
                                return (
                                    <TableRow key={row.className}>
                                        <TableCell component="th" scope="row">
                                        {row.className}
                                        </TableCell>
                                        <TableCell align="right">{row.probability.toFixed(2)}</TableCell>
                                    </TableRow>
                                )
                            } else if(this.props.type === "coco-ssd") {
                                return (
                                    <TableRow key={row.className}>
                                        <TableCell component="th" scope="row">
                                        {row.class}
                                        </TableCell>
                                        <TableCell align="right">{row.score.toFixed(2)}</TableCell>
                                    </TableRow>
                                )
                            }
                            })
                        }
                    </TableBody>
                    </Table>
                </Paper>        
            </Grid>
        )
    }
 }