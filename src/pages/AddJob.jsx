import { Formik,Form,Field,ErrorMessage } from "formik"
import { Validation } from "../utils/validationJob"

function AddJob(){

    const onSubmit = (values)=>{
        console.log(values)
    }
    return(
        <div>
            <h1>AddJob</h1>

            <Formik
                initialValues={{
                    job:"",
                    vacancy:"",
                    requirements:"",
                }}
                validationSchema={Validation}
                onSubmit={onSubmit}
            >

                <Form>
                    <div>
                    <Field
                    text="text"
                    name="job"
                    placeholder="Enter job"
                    />

                    <ErrorMessage
                    name="job"
                    component="div"
                    className="text-red-600"
                    />
                    </div>

                    <div>
                    <Field
                    text="text"
                    name="job"
                    placeholder="Enter job"
                    />

                    <ErrorMessage
                    name="job"
                    component="div"
                    className="text-red-600"
                    />
                    </div>

                    <div>
                    <Field
                    text="text"
                    name="job"
                    placeholder="Enter job"
                    />

                    <ErrorMessage
                    name="job"
                    component="div"
                    className="text-red-600"
                    />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AddJob;