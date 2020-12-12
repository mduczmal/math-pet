import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './happy-dog.json'
import equation from './equation'
import {
    Button,
    Paper,
    Grid,
    Container,
    Box,
} from "@material-ui/core";
import {Question} from "./Question";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false, isFlirting: true, equation: equation()};
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(event) {
        event.preventDefault()
        console.log("submitted:")
        console.log(event.target.value)
    }

    render() {
        const labels = {
            stopFlirting: "Przestań merdać!",
            startFlirting: "Zacznij merdać!",
            response: "Odpowiedź",
            checkResponse: "Sprawdź!",
            question: {
                header: "Ile wynosi ",
                footer: "?"
            }
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
                    <Grid container spacing={0} justify={"center"}>
                        <Grid item xs={6}>
                            <Question labels={labels} eq={this.state.equation} check={this.handleCheck}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
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
                                            isFlirting: !this.state.isFlirting
                                        })}>
                                            {this.state.isFlirting? labels.stopFlirting : labels.startFlirting}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    }
}
