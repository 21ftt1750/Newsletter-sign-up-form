import React, { useState } from "react";

const Email = ({ email, setEmail, setSuccess, success }) => {
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setMessage(event.target.value);
    console.log(email);
  };
  const handleSubmit = (event) => {
    if (message.trim().length !== 0) {
      setSuccess(false);
      console.log(success);
    } else {
      console.log("input value is empty");
    }
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <label class="font-semibold">
        Email address
        <br></br>
        <input
          type="email"
          name="Email address"
          id="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="email@company.com."
          class="border-2 border-rose-600 opacity-25 hover:opacity-100 p-2 rounded-lg w-80"
        />
      </label>
      <br></br>
      <br></br>
      <input
        type="submit"
        value="Subscribe to monthly newsletter"
        class="bg-[#242742] p-3 rounded-lg w-80 font-bold text-white hover:bg-Tomato"
      />
    </form>
  );
};

export default Email;
