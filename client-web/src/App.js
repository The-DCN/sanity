import "./App.css";
import SanityLogo from "./components/svg/SanityLogo";
import HealthIcon from "./components/svg/HealthIcon";
import Toast from 'react-bootstrap/Toast'
import ToastBody from "react-bootstrap/ToastBody";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";

function App() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState(true);
  const [show, setShow] = useState(false);
  const toggleToast = () => setShow(!show);

  //when the user clicks the submit button the subscribe to email notification function
  // gets triggered and adds a toast to the top of the page

  const subscribeToEmailNotification = async (e) => {
    try {
      e.preventDefault();
       const docRef = await addDoc(collection(db, "contact"), {
         email:email,
      });
      
      setEmail("");
      toggleToast();
    } catch (e) {
      setError(!error)
      console.log(e);
    }
  };


  return (
    <>
      <div className="app">
      <Toast  bg='success' onClose={() => setShow(false)} show={show} delay={3000}
        autohide>
          <ToastBody>
            <div className="toast_wrapper">
              <h1 className="toast_heading">Success! You will receive an email notification as soon as the beta application has been released.</h1>
            </div>
          </ToastBody>
        </Toast>
        <header className="landing_nav">
          <div className="landing_nav_header">
            <SanityLogo logoStyle="isolatedwhiteMonoChrome" />
          </div>
          <div></div>
        </header>

        <div className="hero">
          <div className="hero_title_section">
            <HealthIcon />
            <h1 id="hero_heading">The Only App You Need To Track Covid-19</h1>
            <h1 id="hero_subheading">
              Our mobile application will provide covid-19 tracking solutions at
              the microlevel for people, and businesses. Join us in spearheading
              a movement that will make the world a better place for everyone.
            </h1>
          </div>

          <div className="notification_form">
            <h1 className="notification_form_header">
              Enter your name and your email address to be notified when the app
              has launched.
            </h1>

            <form onSubmit={subscribeToEmailNotification}>
              <div className="form-row">
                <input
                  id="email_input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input id="submit_btn" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
