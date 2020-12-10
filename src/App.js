import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './happy-dog.json'
import {
    Button,
    Paper,
    TextField,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Container,
    Box,
} from "@material-ui/core";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false, isFlirting: true, question: "2+2=?"};
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(event) {
        event.preventDefault()
    }

    render() {
        const labels = {
            stopFlirting: "Przestań merdać!",
            startFlirting: "Zacznij merdać!",
            response: "Odpowiedź",
            checkResponse: "Sprawdź!",
            questionHeader: "Pytanie:"
        }
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
                    <Grid container spacing={0} justify={"center"}>
                        <Grid item xs={6}>
                            <Paper className={paper}>
                                <Grid container alignItems={'center'}>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardHeader title={labels.questionHeader}/>
                                            <CardContent>
                                                {this.state.question}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <form noValidate autoComplete="off" onSubmit={this.handleCheck}>
                                            <Grid container spacing={7}>
                                                <Grid item xs={6}>
                                                    <TextField id="response" label={labels.response} variant="filled" />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button type="submit">{labels.checkResponse}</Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={paper}>
                                <Grid container alignItems={'center'}>
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
                    </Grid>
                </Box>
            </Container>
        </div>
    }
}
