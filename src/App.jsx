import React from "react";
import "./App.css";

const SignupForm = () => {
  return (
  <div className="signup-container">
  <form className="signup-form">
  <h1>Sign Up</h1>

  <div className="sec">
  <h2>1 Your Basic Info</h2>
  <label>Name:</label>
  <input type="text" name="name" placeholder="Enter your name" />

  <label>Email:</label>
  <input type="email" name="email" placeholder="Enter your email" />

  <label>Password:</label>
  <input type="password" name="password" placeholder="Enter your password" />

  <label>Age:</label>
  <div>
    <input type="radio" id="under13" name="age" value="under13" />
    <label className="underover">Under 13</label>
  </div>
  <div>
    <input type="radio" id="over13" name="age" value="over13" />
    <label className="underover">Over 13</label>
  </div>
</div>

<div className="sec">
  <h2>2 Your Profile</h2>
  <label>Upload Image:</label>
  <input type="file" name="upload-image" />

  <label>Bio:</label>
  <textarea name="bio" placeholder="Tell about yourself"></textarea>
</div>

<button type="submit">Sign Up</button>
</form>
</div>
);
};

export default SignupForm;