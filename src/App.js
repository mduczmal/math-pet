import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './happy-dog.json'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Card"
import {Grid, Container, Box} from "@material-ui/core";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false, isFlirting: true};
    }

    render() {
        const labels = {
            stopFlirting: "Przestań merdać!",
            startFlirting: "Zacznij merdać!"
        }
        /*const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };*/
        const paper = {
            textAlign: 'center',
        }
        const button = {
            minWidth: 200,
        }

        const defaultOptions = {
            loop: 0.5,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            },
        };

        return <div>
            <Container>
                <Box mt={3} mx={'auto'}>
                    <Grid container spacing={2} justify={"center"}>
                        <Paper className={paper}>
                            <Grid px="30" container alignItems={'center'}>
                                <Grid item xs={12}>
                                    <Lottie options={defaultOptions}
                                            eventListeners={
                                                [{
                                                    eventName: "complete",
                                                    callback: () => {
                                                        this.setState({isStopped: true});
                                                        setTimeout(() => this.setState({isStopped:false}), 1000)
                                                    }
                                                }]}
                                            height={400}
                                            width={400}
                                            isClickToPauseDisabled={true}
                                            isStopped={this.state.isStopped}
                                            isPaused={this.state.isPaused}/>
                                </Grid>
                                <Grid container item xs={12} justify={'center'}>
                                    <Box width={300}>
                                        <Grid container justify={'center'}>
                                        <Button classes={button} onClick={() => this.setState({
                                            isPaused: !this.state.isPaused,
                                            isFlirting: !this.state.isFlirting
                                        })}>
                                            {this.state.isFlirting? labels.stopFlirting : labels.startFlirting}
                                        </Button>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Box>
            </Container>
        </div>
    }
}
