import "./App.css";
import pic from "./images/illustration-sign-up-desktop.svg";
import list from "./images/icon-list.svg";
import list2 from "./images/icon-success.svg";
import Email from "./components/Email";
import { useState } from "react";

function App() {
  const [success, setSuccess] = useState(true);
  const [email, setEmail] = useState("");
  return (
    <>
      {success ? (
        <div class=" bg-[#27293F] flex h-screen w-screen  items-center justify-center   ">
          <div class="bg-white  p-10 w-3/5 h-5/6 flex items-center rounded-3xl flex-row ">
            <div class=" flex-col justify-center items-center mx-auto w-full basis-1/2 p-10 h-full">
              <p class="text-5xl font-bold justify-self-center">
                Stay updated!
              </p>
              <br></br>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <br></br>
              <ul>
                <li class="py-1 inline-flex ">
                  <img src={list} alt="pic"></img>
                  <p class="ps-4 w-96">
                    {" "}
                    Product discovery and building what matters
                  </p>
                </li>
                <li class="py-1 inline-flex">
                  <img src={list} alt="pic"></img>
                  <p class="ps-4">Measuring to ensure updates are a success </p>
                </li>
                <li class="py-1 inline-flex">
                  <img src={list} alt="pic"></img>
                  <p class="ps-4"> And much more! </p>
                </li>
              </ul>
              <br></br>
              <Email
                setSuccess={setSuccess}
                success={success}
                email={email}
                setEmail={setEmail}
              />
            </div>
            <div className="basis-1/2">
              <img src={pic} alt="pic" class="p-2"></img>
            </div>
          </div>
        </div>
      ) : (
        <div class=" bg-[#34364C] flex h-screen w-screen  items-center justify-center   ">
          <div class="bg-white  p-10 w-2/6 h-4/6  items-center rounded-3xl  ">
            <div class="   justify-center items-center mx-auto w-full  p-6 h-full">
              <img src={list2} alt="pic"></img>
              <br></br>
              <p class="text-5xl font-bold justify-self-center">
                Thanks for subscribing!
              </p>
              <br></br>
              <p>
                A confirmation email has been sent to {email}. Please open it
                and click the button inside to confirm your subscription
              </p>
              <br></br>
              <button
                value="Dissmiss message"
                class="bg-[#242742] p-3 rounded-lg w-80 font-bold text-white justify-self-stretch hover:bg-Tomato"
                onClick={() => {
                  setSuccess(true);
                }}
              >
                <p>Dissmiss message</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
