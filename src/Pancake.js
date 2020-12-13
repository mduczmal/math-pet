import React from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import Lottie from "react-lottie";
import * as animationData from "./happy-dog.json";

export default class Pancake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false, isWagging: true};
    }
    render() {
        const defaultOptions = {
            loop: 0.5,
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
                            eventListeners={
                                [{
                                    eventName: "complete",
                                    callback: () => {
                                        this.setState({isStopped: true});
                                        setTimeout(() => this.setState({isStopped:false}), 10000)
                                    }
                                }]}
                            isClickToPauseDisabled={true}
                            isStopped={this.state.isStopped}
                            isPaused={this.state.isPaused}/>
                </Grid>
                <Grid container item xs={12} justify={'center'}>
                    <Button onClick={() => this.setState({
                        isPaused: !this.state.isPaused,
                        isWagging: !this.state.isWagging
                    })}>
                        {this.state.isWagging? this.props.labels.stopWagging : this.props.labels.startWagging}
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    }
}