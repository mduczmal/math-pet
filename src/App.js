import React from 'react'
import equation from './equation'
import {
    Grid,
    Container,
    Box, MuiThemeProvider,
} from "@material-ui/core";
import {Question} from "./Question";
import Pancake from "./Pancake";
import Confused from "./Confused";
import Proud from "./Proud";
import {TopBar, topBarTheme} from "./TopBar";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dog: 'default', equation: equation(), lang: 'pl'};
        this.handleCheck = this.handleCheck.bind(this);
        this.handleFailure = this.handleFailure.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.getDog = this.getDog.bind(this);
        this.labels = {
            pl: {
                stopWagging: "Przestań merdać!",
                startWagging: "Zacznij merdać!",
                response: "Odpowiedź",
                checkResponse: "Sprawdź!",
                question: {
                    header: "Ile wynosi ",
                    footer: "?"
                },
                correct: "TAAAK! Jesteś Miszczem!",
                wrong: "Coś jest źle.",
                title: "Matematyka z Pancake"
            },
            en:  {
                stopWagging: "Stop wagging!",
                startWagging: "Start wagging!",
                response: "Response",
                checkResponse: "Check!",
                question: {
                    header: "Solve for ",
                    footer: "."
                },
                correct: "YAAAY! You're so smart!",
                wrong: "Something is wrong.",
                title: "Math with Pancake"
            },

        }
    }
    handleSuccess() {
        this.setState({dog : 'proud'})
    }
    handleFailure() {
        this.setState({dog : 'confused'})
    }
    handleCheck(event) {
        event.preventDefault();
        const success = parseInt(event.target[0].value) === this.state.equation.solution;
        if (success) {
            this.handleSuccess();
        } else {
            this.handleFailure();
        }
        setTimeout(() => {
            this.setState({dog: 'default'})
            if (success) {
                this.setState({equation: equation()})
            }
        }, 5000)
    }

    getDog() {
        switch (this.state.dog) {
            case 'default':
                return <Pancake/>;
            case 'proud':
                return <Proud/>;
            case 'confused':
                return <Confused/>;
            default:
                return <Pancake/>;
        }
    }

    getLabels() {
        switch(this.state.lang) {
            case 'pl':
                return this.labels.pl;
            case 'en':
                return this.labels.en;
            default:
                return this.labels.en;
        }
    }

    render() {
        const labels = this.getLabels();

        return <div>
            <MuiThemeProvider theme={topBarTheme}>
                <TopBar labels={labels} lang={this.lang}
                        setLang={(l) => this.setState({lang: l})}/>
            </MuiThemeProvider>
                <Box mt={3} mx={'auto'}>
                    <Container>
                        <Grid container spacing={0} justify={"center"}>
                            <Grid item xs={6}>
                                <Question labels={labels} eq={this.state.equation} check={this.handleCheck}/>
                            </Grid>
                            <Grid item xs={6}>
                                {React.cloneElement(this.getDog(), {labels: labels})}
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
    }
}
