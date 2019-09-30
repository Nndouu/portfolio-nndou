import React from "react";

const Contact = () => {
  return (
    <section className='contact'>
      <div className='section-head'>
        <h6 className='text-center'>Get in touch with me</h6>
        <h2 className='text-center'>Contact Me</h2>
        <div className='underline'></div>
        <div className='row'>
          <div className='col-md-6 px-3'>
            <span>
              <input
                className='card-slide'
                id='knock'
                type='text'
                placeholder='Enter your name'
              />
              <label htmlFor='knock'>Name</label>
            </span>
            <span>
              <input
                className='card-slide'
                id='email'
                type='email'
                placeholder='Enter your email'
              />
              <label htmlFor='email'>Email</label>
            </span>
            <span>
              <input
                className='card-slide'
                id='subject'
                type='text'
                placeholder='Enter your subject'
              />
              <label htmlFor='subject'>Subject</label>
            </span>
          </div>
          <div className='col-md-6 px-3'>
            <span>
              <textarea
                class='balloon'
                id='message'
                type='text'
                placeholder='Enter you message here.'
                style={{ height: "148px" }}
              />
              <label htmlFor='message'>Message</label>
            </span>
            <button
              className='btn btn-primary ml-2 d-block w-100'
              style={{ borderRadius: "3px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
