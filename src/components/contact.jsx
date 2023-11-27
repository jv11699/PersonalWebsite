import { useState } from 'react'
import { PopupButton } from "react-calendly";
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_n00o0oq', 'template_h5dvxgq', e.target, 'Ykvrv79jzG2REB5EK'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Schedule a call to fix!</h2>
                <p>
                  Click the button to schedule a call to fix with us and we will be on touch with you shortly
                </p>
              </div>


              <PopupButton
                className='btn btn-custom btn-lg'
                url="https://calendly.com/vergarahandymanservices/call-consultation-and-schedule"
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
              />


            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              {/* <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p> */}
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              {/* <p>
                <span>
                  <i class="fa-brands fa-github"></i> Github
                </span>{' '}
                <a href={"https://github.com/jv11699"} style={{ color: "rgba(255, 255, 255, 0.75)" }}> github.com/jv11699</a>
              </p> */}
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  {/* <li>
                    <a href={"https://www.instagram.com/voltxxczz/"}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href={"https://twitter.com/voltairevergara"}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            Of course, with the help of Issaaf Kattan template, this webpage of mine wouldn't be possible!
            <a href='https://github.com/issaafalkattan/React-Landing-Page-Template' rel='nofollow'>
              &copy;Explore his Github!
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
