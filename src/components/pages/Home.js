import React, { useState, useRef } from "react";
import resume from "../../resume/CV_Yiping_Niu.pdf";
import { Button, Modal } from "react-bootstrap";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }
  return (
    <section className='home'>
      <div className='home-background'>
        <div className='overlay'>
          {/* Background animation */}
          <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className='home-content text-center'>
        <p className='text-light mb-0'>Hello. I'm</p>
        <h1 className='text-light title'>YIPING NIU</h1>
        <h3 className='text-primary'>
          Full-stack Developer | Front-end Developer
        </h3>
        <div className='text-center mt-5'>
          <a
            href='https://www.linkedin.com/in/yiping-niu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Linkedin</span>
          </a>
          <a
            href='https://github.com/Nndouu'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Github</span>
          </a>
          <a href='#!' onClick={handleShow}>
            <span>Email</span>
          </a>
          <a target='_blank' rel='noopener noreferrer' href={resume}>
            <span>Resume</span>
          </a>

          <Modal show={show} onHide={handleClose} size='sm' centered>
            <Modal.Header closeButton>
              <Modal.Title>My Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <input
                  ref={textAreaRef}
                  defaultValue='yp.niu.dev@gmail.com'
                  style={{ borderWidth: "0px" }}
                ></input>
              </form>
            </Modal.Body>
            <Modal.Footer className='py-1'>
              {copySuccess}
              <Button
                variant='secondary'
                onClick={(handleClose, copyToClipboard)}
              >
                Copy
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Home;
