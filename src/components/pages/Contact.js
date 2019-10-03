import React, { useState } from "react";
// import axios from "axios";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  // const [contactError, setContactError] = useState({
  //   error: ""
  // });

  // const addContactInfo = async contact => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   };
  //   try {
  //     const res = await axios.post("/api/contactIndfo", contact, config);
  //   } catch (err) {
  //     setContactError(err.response.msg);
  //   }
  // };

  const onChange = e =>
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });

  const onSubmit = e => {
    // addContactInfo(contactInfo);

    setContactInfo({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className='contact'>
      <div className='section-head'>
        <h6 className='text-center'>Get in touch with me</h6>
        <h2 className='text-center'>Contact Me</h2>
        <div className='underline'></div>
        <form onSubmit={onSubmit}>
          <div className='row w-100'>
            <div className='col-md-6 px-3'>
              <span>
                <input
                  className='card-slide'
                  id='knock'
                  type='text'
                  placeholder='Enter your name'
                  onChange={onChange}
                />
                <label htmlFor='knock'>Name</label>
              </span>
              <span>
                <input
                  className='card-slide'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  onChange={onChange}
                />
                <label htmlFor='email'>Email</label>
              </span>
              <span>
                <input
                  className='card-slide'
                  id='subject'
                  type='text'
                  placeholder='Enter your subject'
                  onChange={onChange}
                />
                <label htmlFor='subject'>Subject</label>
              </span>
            </div>
            <div className='col-md-6 px-3'>
              <span>
                <textarea
                  className='balloon'
                  id='message'
                  type='text'
                  placeholder='Enter you message here.'
                  style={{ height: "148px" }}
                  onChange={onChange}
                />
                <label htmlFor='message'>Message</label>
              </span>
              <button
                className='btn btn-primary ml-2 d-block w-100'
                type='submit'
                style={{ borderRadius: "3px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
