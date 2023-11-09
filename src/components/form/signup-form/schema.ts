import * as Yup  from 'yup'

export const signUpSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
})