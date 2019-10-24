import React from 'react';
import { useHistory } from 'react-router-dom';
import {Container, Grid, Button, TextField} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import { signIn } from '../services/auth';
import {useCookies} from "react-cookie";

const LoginForm = ({ errors, status, touched, isSubmitting }) => (
    <Form>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <h1>Login</h1>
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

export const LoginView = () => {

    const history = useHistory();
    const [, setCookie] = useCookies(['Authorization']);
    const initialValues = {
        login: '',
        password: '',
    };

    const onSubmitHandler = async (values, actions) => {
        const response = await signIn(values);

        actions.setSubmitting(false);
        if (response && response.status === 200) {
            setCookie('Authorization', `Bearer ${response.data.accessToken}`);
            history.push('/');
        }
    };

    return (
        <div>
            <Container maxWidth="sm">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmitHandler}
                    render={LoginForm}
                />
            </Container>
        </div>
    )
};
