import { useFormik } from "formik";
import { Schema } from "./Schema";
const BasicForm = (props) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
  };
  const formik = useFormik(
    {
      initialValues: initialValues,
      validationSchema: Schema,
    
    onSubmit: (values) => {
      console.log(values);
    }}
    );
    console.log(formik.errors);
  // console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" onBlur={formik.handleBlur} onChange={formik.handleChange} />
          {<p>{formik.errors.firstname}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" onBlur={formik.handleBlur} onChange={formik.handleChange} />
          {<p>{formik.errors.lastname}</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange}/>
        {<p>{formik.errors.email}</p>}
      </div>
      <div className="form-actions">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
