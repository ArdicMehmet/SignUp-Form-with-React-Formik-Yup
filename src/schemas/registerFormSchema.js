import { object, string, date, ref, boolean} from 'yup';
import { passwordSchema } from './passwordSchema';

const registerSchema = object().shape({
        name: string().required("Name field cannot be empty"),
        email: string().email("Please enter a valid email address.").required("Email field cannot be empty"),
        password: passwordSchema.required("Password field cannot be empty"),
        confirmPassword: string().required("Password confirmation field cannot be empty.").oneOf([ref('password')],"Passwords do not match."),
        term: boolean().oneOf([true],"You must accept the terms and conditions.").required(),
        createdOn: date().default(() => new Date()),
});

export {
    registerSchema,
}