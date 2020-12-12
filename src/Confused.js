import React from "react";
import {Grid, Paper} from "@material-ui/core";
import Lottie from "react-lottie";
import * as animationData from "./smiling-dog.json";

export default class Confused extends React.Component {
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
