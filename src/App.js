import React from 'react'
import equation from './equation'
import {
    Grid,
    Container,
    Box,
} from "@material-ui/core";
import {Question} from "./Question";
import Pancake from "./Pancake";

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

        return <div>
            <Container>
                <Box mt={3} mx={'auto'}>
                    <Grid container spacing={0} justify={"center"}>
                        <Grid item xs={6}>
                            <Question labels={labels} eq={this.state.equation} check={this.handleCheck}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Pancake labels={labels}/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    }
}
