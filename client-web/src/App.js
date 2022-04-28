import "./App.css";
import SanityLogo from "./components/svg/SanityLogo";
import HealthIcon from "./components/svg/HealthIcon";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"
import {db} from "./firebase/firebase"


function App() {


const [loading, setLoading] = useState(false);
const [email, setEmail] = useState('');


  const subscribeToEmailNotification = async (e) => {
    try {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "contact"), {
        email:email,
      });
      alert("Your email was successfully saved");

    } catch(error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="app">
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
              a movement that will make the World A Better Place For Everyone.
            </h1>
          </div>

          <div className="notification_form">
            <h1 className="notification_form_header">
              Enter your name and your email address to be notified when the app
              has launched.
            </h1>

            <form onSubmit={subscribeToEmailNotification}>
              <div className="form-row">
                <input id="email_input" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>    
                <input id="submit_btn" type="submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
