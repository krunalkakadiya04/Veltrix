import React from "react"
import * as Yup from "yup"
import { useFormik } from "formik"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import "./inquiry.css"

const SignUpSchema = Yup.object().shape({
  firstname: Yup.string().required("*Firstname is required"),
  lastname: Yup.string().required("*Lastname is required"),
  email: Yup.string().required("*Email is required"),
  contact: Yup.string().required("*Contact is required"),
  address: Yup.string().required("*Address is required"),
  city: Yup.string().required("*City is required"),
  state: Yup.string().required("*State is required"),
  pincode: Yup.string().required("*Pincode is required"),
})
const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
}

function InquiryList() {
  const handleSubmit = value => {
    const data = {
      firstname: value.firstname,
      lastname: value.lastname,
      email: value.email,
      contact: value.contact,
      address: value.address,
      city: value.city,
      state: value.state,
      pincode: value.pincode,
    }
  }

  const formik = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    validationSchema: SignUpSchema,
    onSubmit: handleSubmit,
  })

  return (
    <>
      <div className="bodyBox">
        <div className="onlayout">
          <Form className="layout" onSubmit={formik.handleSubmit}>
            <h3>Inquiry Form</h3>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  // id="firstname"
                  name="firstname"
                  type="firstname"
                  placeholder="Firstname"
                />
                <p style={{ color: "red" }}>
                  {formik.errors.firstname && formik.touched.firstname ? (
                    <div>{formik.errors.firstname}</div>
                  ) : null}
                </p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  // id="lastname"
                  name="lastname"
                  type="lastname"
                  placeholder="Lastname"
                />
                <p style={{ color: "red" }}>
                  {formik.errors.lastname && formik.touched.lastname ? (
                    <div>{formik.errors.lastname}</div>
                  ) : null}
                </p>
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                // id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <p style={{ color: "red" }}>
                {formik.errors.email && formik.touched.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </p>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                // id="contact"
                name="contact"
                type="contact"
                placeholder="Contact No."
              />
              <p style={{ color: "red" }}>
                {formik.errors.contact && formik.touched.contact ? (
                  <div>{formik.errors.contact}</div>
                ) : null}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                // id="address"
                name="address"
                type="address"
                placeholder="Address"
              />
              <p style={{ color: "red" }}>
                {formik.errors.address && formik.touched.address ? (
                  <div>{formik.errors.address}</div>
                ) : null}
              </p>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  // id="city"
                  name="city"
                  type="city"
                  placeholder="City"
                />
                <p style={{ color: "red" }}>
                  {formik.errors.city && formik.touched.city ? (
                    <div>{formik.errors.city}</div>
                  ) : null}
                </p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  // id="state"
                  name="state"
                  type="state"
                  placeholder="State"
                />
                <p style={{ color: "red" }}>
                  {formik.errors.state && formik.touched.state ? (
                    <div>{formik.errors.state}</div>
                  ) : null}
                </p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  // id="pincode"
                  name="pincode"
                  type="pincode"
                  placeholder="Pincode"
                />
                <p style={{ color: "red" }}>
                  {formik.errors.pincode && formik.touched.pincode ? (
                    <div>{formik.errors.pincode}</div>
                  ) : null}
                </p>
              </Form.Group>
            </Row>
            <br />
            <center>
              <Button className="buttonn" variant="primary" type="submit">
                Submit
              </Button>
            </center>
          </Form>
        </div>
      </div>
    </>
  )
}
export default InquiryList
