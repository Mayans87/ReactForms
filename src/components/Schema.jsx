import * as yup from 'yup';

export const Schema =yup.object({
    firstname: yup.string().required("please enter name").min(2).max(8),
    lastname: yup.string().required("please enter lastname").min(2).max(8),
    email: yup.string().email().required("please enter your email")
})
