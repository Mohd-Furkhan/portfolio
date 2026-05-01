import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./Contact.css";
import Footer from "../../Footer/Component/Footer";

function Contact() 
{
  // Hooks start
  const formInititalValues = { 
    name: "",
    email: "",
    message: "",
  };

  const formSchema = Yup.object({
    name: Yup.string()
      .required("Please enter your name.")
      .min(4, "Enter minimum 4 characters."),
    email: Yup.string()
    .email("Invalid email address.")
    .required("Please enter your email."),
    message: Yup.string()
      .required("Please enter your message.")
      .min(5, "Enter atleast 5 words."),
  });

  const formik = useFormik({
    initialValues: formInititalValues,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const formData = {
        ...values,
        access_key: "405fa0cc-b335-437c-b398-2ccbcb9a3297",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: 'Success',
          text: 'Send message successfully',
          icon: 'success',
          showConfirmButton: false,
          background: '#111',
          color: 'white',
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            popup: 'form-success-popup', 
            title: 'form-title', 
            icon: 'form-icon',
            content: 'form-content'
          }
        });
        formik.resetForm();
      } else {
        console.log("Error", res);
        Swal.fire({
          title: 'Oops',
          text: 'Something went wrong',
          icon: 'error',
          showConfirmButton: false,
          background: '#1e1e1e',
          color: '#fff',
          timer: 2000,
          timerProgressBar: true
        });
      }
    }      
  });  
  // Hooks end

  // Functions start
  
  // Functions end
  return (
    <>
      <div
        className="card container-fluid col-xxl-8 px-5 "
        style={{ backgroundColor: "#212528", color: "white" }}
      >
        <br />
        <div className="row">
          <h6 className="text-center">ASK ME A QUESTION</h6>
          <h1 className="text-center">Contact me</h1>
          <br />
          <div className="col-lg-1">
            <div className="mb-4 text-center">
              <a
                className="btn rounded-circle"
                href="https://www.linkedin.com/in/mohammed-furkhan-450943154"
                target="_blank"
                style={{ backgroundColor: "#0A66C2" }}
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f9fff2"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />{" "}
                </svg>
              </a>
            </div>
            <div className="mb-4 text-center">
              <a
                className="btn rounded-circle"
                href="https://github.com/Mohd-Furkhan"
                target="_blank"
                style={{ backgroundColor: "#000000" }}
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f9fff2"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />{" "}
                </svg>
              </a>
            </div>
            <div className="mb-4 text-center">
              <a
                className="btn rounded-circle"
                href="https://mail.google.com/"
                target="_blank"
                title="Gmail"
                style={{ backgroundColor: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="18"
                  height="18"
                  fill="#f9fff2"
                >
                  {" "}
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  />{" "}
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  />
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  />{" "}
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  />{" "}
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  />{" "}
                </svg>
              </a>
            </div>
            <div className="mb-4 text-center">
              <a
                className="btn rounded-circle"
                href="https://wa.me/+919701416477"
                target="_blank"
                style={{ backgroundColor: "#25D366" }}
                title="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#f9fff2"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />{" "}
                </svg>
              </a>
            </div>
          </div>
          <div className="col-lg-11">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Your name"
                />
                <span className="text-danger">{formik.errors.name}</span>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Your email"
                />
                <span className="text-danger">{formik.errors.email}</span>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  placeholder="Your message"
                />
                <span className="text-danger">{formik.errors.message}</span>
              </div>
              <div className="mb-3 text-center">
                <button type="submit" className="bn5">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
