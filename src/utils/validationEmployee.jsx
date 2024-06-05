import * as Yup from "yup"


export  const Validation = Yup.object({
    name:Yup.string().required("name is required"),
    role:Yup.string().required("role is required"),
    contact:Yup.string().required("contact is required")
})