import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './happy-dog.json'
import equation from './equation'
import {
    Button,
    Paper,
    TextField,
    Card,
    CardContent,
    Grid,
    Container,
    Box,
    Typography
} from "@material-ui/core";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false, isFlirting: true, equation: equation()};
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
            question: {
                header: "Ile wynosi ",
                footer: "?"
            }
        }
        const paper = {
            textAlign: 'center',
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
                                            <CardContent>
                                                <Box mb={2}>
                                                    <Typography variant="h5" component="h1">
                                                        <Box display={'inline'}>{labels.question.header}</Box>
                                                        <Box display={'inline'} fontStyle={'oblique'}>{'x'}</Box>
                                                        <Box display={'inline'}>{labels.question.footer}</Box>
                                                    </Typography>
                                                </Box>
                                                <Typography variant="h3" component="body1" display={'inline'}>
                                                    <Box display={'inline'}>{this.state.equation.header}</Box>
                                                    <Box display={'inline'} fontStyle={'oblique'}>{'x'}</Box>
                                                    <Box display={'inline'}> {this.state.equation.footer} </Box>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                            <form noValidate autoComplete="off" onSubmit={this.handleCheck}>
                                                <Grid container xs={12} spacing={0}>
                                                    <Grid item xs={6}>
                                                        <TextField id="response" fullWidth={true} label={labels.response} variant="filled" />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Button style={{height: '100%'}} type="submit" fullWidth={true} >{labels.checkResponse}</Button>
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
                                                            setTimeout(() => this.setState({isStopped:false}), 10000)
                                                        }
                                                    }]}
                                                isClickToPauseDisabled={true}
                                                isStopped={this.state.isStopped}
                                                isPaused={this.state.isPaused}/>
                                    </Grid>
                                    <Grid container item xs={12} justify={'center'}>
                                        <Box width={300}>
                                            <Grid container justify={'center'}>
                                                <Button onClick={() => this.setState({
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
