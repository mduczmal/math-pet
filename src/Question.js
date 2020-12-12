import {Box, Button, Card, CardContent, Grid, Paper, TextField, Typography} from "@material-ui/core";
import React from "react";

export function Question(props) {
    return (
        <Paper>
            <Grid container alignItems={'center'}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box mb={2}>
                                <Typography variant="h5">
                                    <Box display={'inline'}>{props.labels.question.header}</Box>
                                    <Box display={'inline'} fontStyle={'oblique'}>{'x'}</Box>
                                    <Box display={'inline'}>{props.labels.question.footer}</Box>
                                </Typography>
                            </Box>
                            <Typography variant="h3" display={'inline'}>
                                <Box display={'inline'}>{props.eq.header}</Box>
                                <Box display={'inline'} fontStyle={'oblique'}>{'x'}</Box>
                                <Box display={'inline'}> {props.eq.footer} </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <form noValidate autoComplete="off" onSubmit={props.check}>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <TextField id="response" fullWidth={true} label={props.labels.response} variant="filled" />
                            </Grid>
                            <Grid item xs={6}>
                                <Button style={{height: '100%'}} type="submit" fullWidth={true} >{props.labels.checkResponse}</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    )

}