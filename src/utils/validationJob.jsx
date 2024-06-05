import * as Yup from "yup"

export const Validation = Yup.object({
    job:Yup.string().required("Job is required"),
    vacancy:Yup.string().required("vacancies need to be add"),
    requirements:Yup.string().required("add Requirements")
})