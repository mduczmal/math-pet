import React from "react";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import Lottie from "react-lottie";
import * as animationData from "./happy-unicorn-dog.json";
import {SuccessMessage} from "./reaction"

export default class Proud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            },
        };
        return <Paper>
            <Grid container alignItems={'center'}>
                <Grid container item xs={12} justify={'center'}>
                    <SuccessMessage elevation={0}>
                        <Grid container justify={'center'}>
                            <Box py={5}>
                                <Typography variant={'h3'}>
                                    {this.props.labels.correct}
                                </Typography>
                            </Box>
                        </Grid>
                    </SuccessMessage>
                </Grid>
                <Grid item xs={12}>
                    <Lottie options={defaultOptions}
                            isClickToPauseDisabled={true}
                            isStopped={this.state.isStopped}
                            isPaused={this.state.isPaused}/>
                </Grid>
            </Grid>
        </Paper>
    }
}
