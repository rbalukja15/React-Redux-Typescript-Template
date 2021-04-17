import * as Yup from 'yup';
import { IValidationSchema } from '../login.interfaces';

export const validationSchema: Yup.ObjectSchema<IValidationSchema> = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required').defined(),
    password: Yup.string()
        .min(6, 'A minimum of 6 characters password is required')
        .max(24, 'A maximum of 24 characters password is required')
        .required('Password is required')
        .defined(),
});
