import React from 'react'
import equation from './equation'
import {
    Grid,
    Container,
    Box,
} from "@material-ui/core";
import {Question} from "./Question";
import Pancake from "./Pancake";
import Confused from "./Confused";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false, isFlirting: true, dog: 'default', equation: equation()};
        this.handleCheck = this.handleCheck.bind(this);
        this.handleFailure = this.handleFailure.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.getDog = this.getDog.bind(this);
    }
    handleSuccess() {
        this.setState({dog : 'default'})
    }
    handleFailure() {
        this.setState({dog : 'confused'})
    }
    handleCheck(event) {
        event.preventDefault();
        if (parseInt(event.target[0].value) === this.state.equation.solution) {
            this.handleSuccess();
        } else {
            this.handleFailure();
        }
    }

    getDog() {
        switch (this.state.dog) {
            case 'default':
                return <Pancake/>;
            case 'confused':
                return <Confused/>;
            default:
                return <Pancake/>;
        }
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

        return <div>
            <Container>
                <Box mt={3} mx={'auto'}>
                    <Grid container spacing={0} justify={"center"}>
                        <Grid item xs={6}>
                            <Question labels={labels} eq={this.state.equation} check={this.handleCheck}/>
                        </Grid>
                        <Grid item xs={6}>
                            {React.cloneElement(this.getDog(), {labels: labels})}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    }
}
