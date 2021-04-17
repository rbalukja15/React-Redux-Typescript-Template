import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { FormGroup, FormControl, Input, InputLabel, Button, TextField, Typography } from '@material-ui/core';
import styles from './index.module.scss';
import { loginActions } from '../../login.actions';
import { connect } from 'react-redux';
import { IFormValues, ILoginProps } from '../../login.interfaces';
import { AppState } from '../../../../shared/store';
import clsx from 'clsx';
import { validationSchema } from '../../utils/validation.schema';

type OwnProps = ILoginProps & ReturnType<typeof mapStateToProps>;

const Login = (props: PropsWithChildren<OwnProps>): ReactElement<FunctionComponent<OwnProps>> => {
    const initialValues: IFormValues = { email: '', password: '' };

    const handleSubmit = async (values: IFormValues) => {
        await props.login(values);
    };

    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <Typography className={styles.title} variant={'h2'}>
                    Login to App{' '}
                </Typography>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, { setSubmitting }) => {
                        await handleSubmit(values);
                        setSubmitting(false);
                    }}
                    validationSchema={validationSchema}
                >
                    {(props: FormikProps<IFormValues>) => (
                        <Form className={styles.loginForm}>
                            <FormGroup>
                                <FormControl className={clsx(styles.formControl, 'mb8')}>
                                    <TextField
                                        className={styles.formInput}
                                        label={'Email'}
                                        name="email"
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                        helperText={props.errors.email && props.touched.email ? props.errors.email : ''}
                                        FormHelperTextProps={{
                                            className: clsx(styles.error_span, 'mt2'),
                                        }}
                                        variant={'outlined'}
                                        required
                                    />
                                </FormControl>
                                <FormControl className={clsx(styles.formControl, 'mb8')}>
                                    <TextField
                                        className={styles.formInput}
                                        label={'Password'}
                                        name="password"
                                        type="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password}
                                        helperText={
                                            props.errors.password && props.touched.password ? props.errors.password : ''
                                        }
                                        FormHelperTextProps={{
                                            className: clsx(styles.error_span, 'mt2'),
                                        }}
                                        variant={'outlined'}
                                        required
                                    />
                                </FormControl>
                                <Button
                                    className={styles.submitBtn}
                                    type="submit"
                                    variant={'outlined'}
                                    color={'inherit'}
                                    disabled={props.isSubmitting || !(props.isValid && props.dirty)}
                                >
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    loggedIn: state.authentication.loggedIn,
});

const mapDispatchToProps = {
    login: loginActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
