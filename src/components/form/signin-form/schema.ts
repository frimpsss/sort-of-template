import * as y from 'yup'

export const signInSchema = y.object().shape({
    username: y.string().required(),
    password: y.string().required()
})