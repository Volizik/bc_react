import React from 'react';
import { useHistory } from 'react-router-dom';
import {Container, Grid, Button, TextField} from "@material-ui/core";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {signUp} from "../services/auth";

const RegistrationForm = ({errors, status, touched, isSubmitting}) => (
    <Form>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h1>Registration</h1>
            <Field name='login' render={({field}) => (
                <TextField
                    {...field}
                    label="Login"
                    type="text"
                    name="login"
                    autoComplete="login"
                    margin="normal"
                    variant="outlined"
                />
            )} />
            <ErrorMessage name="login" component="div" />
            <Field name='password' render={({field}) => (
                <TextField
                    {...field}
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="password"
                    margin="normal"
                    variant="outlined"
                />
            )} />
            <ErrorMessage name="password" component="div" />
            <Button variant="contained" color="primary" type='submit' disabled={isSubmitting}>
                Submit
            </Button>
        </Grid>
    </Form>
);

export const RegistrationView = () => {

    const history = useHistory();
    const initialValues = {
        login: '',
        password: '',
    };

    const onSubmitHandler = async (values, actions) => {
        const response = await signUp(values);
        console.log(response);
        actions.setSubmitting(false);
        if (response && response.status === 201) {
            history.push('/');
        }
    };

    return (
        <div>
            <Container maxWidth="sm">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmitHandler}
                    render={RegistrationForm}
                />
            </Container>
        </div>
    );
}
