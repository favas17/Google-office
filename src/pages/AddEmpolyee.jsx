import {Formik,Field,Form,ErrorMessage} from "formik"
import {Validation} from "../utils/validationEmployee"

function AddEmployee(){

    const onSubmit = (value)=>{
        console.log(value)
    }
    return(

        <div>
            <h1>Employess Adding page</h1>

            {/* starting of formik form */}

            <Formik
            initialValues={{
                name:"",
                role:"",
                contact:"",
            }}
            validationSchema={Validation}
            onSubmit={onSubmit}
            >

                <Form>
                    <div>
                    <Field
                    type="text"
                    name="name"
                    placeholder="Enter youre name"
                    />

                    <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600"
                    />
                    </div>

                    <div>
                        <Field
                        type="text"
                        name="role"
                        placeholder="Enter role"
                        />

                        <ErrorMessage
                        name="role"
                        component="div"
                        className="text-red-600"
                        />
                    </div>

                    <div>
                        <Field 
                        type="text"
                        name="contact"
                        placeholder="Enter conatct no"
                        />

                        <ErrorMessage
                        name="contact"
                        component="div"
                        className="text-red-600"
                        />
                    </div>

                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </div>

    )
}
export default AddEmployee