import React, { useState} from "react";
import "../Login/Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedEmployment, setSelectedEmployment] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const { value } = event.target;

    setEmail(value);

    if (emailPattern.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Clear the login failed message
    setLoginFailed(false);
    setLoginMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const registrationData = JSON.parse(
      localStorage.getItem("registrationData")
    );
    if (
      registrationData &&
      email === registrationData.email &&
      password === registrationData.password &&
      selectedEmployment === registrationData.userType
    ) {
      // Successful login
      setLoginMessage("Login successful!");
      setLoginInProgress(true); 
      setTimeout(() => {
        setLoginInProgress(false); 
        setLoginSuccess(true); 
        navigate("/home");
      }, 3000);
    } else {
      setLoginMessage("Login failed. Please check your credentials.");
    }
  };

  const employmentOptions = [
    { value: "admin", label: "Admin" },
    { value: "faculty", label: "Faculty" },
  ];

  return (
    <div className="container-root">
      <div className="imageDiv">
        <img
          className="image"
          src="https://i.pinimg.com/564x/d6/24/f9/d624f90758d7058c2ab0de4709caf03d.jpg"
          alt=""
        />
      </div>
      <div className="login">
        <form
          onSubmit={handleSubmit}
          className="loginform"
          action="action_page.php"
          method="post"
        >
          <div className="email-input">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter Mail id"
              name="email"
              id="email"
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <div className="password-input">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                id="password"
                minLength="7"
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="form">
              <select
                value={selectedEmployment}
                onChange={(e) => setSelectedEmployment(e.target.value)}
                name="employment"
                id="employment"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                {employmentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {loginSuccess && <p className="login-success">Login Successful!</p>}

            {loginInProgress ? (
              <div className="loading-spinner"></div> // Display buffering GIF while login in progress
            ) : (
              <button type="submit" className="log_btn">Login</button> // Display login button when not in progress
            )}
            <div className="login-message">
              {loginMessage === "Login successful!" ? (
                <p className="login-success">{loginMessage}</p>
              ) : (
                <p className="login-failed">{loginMessage}</p>
              )}
            </div>
            <div className="reg">
              <span className="psw">
                Didn't have an account?<Link to="/register"> Register</Link>
              </span>
            </div>
            <div className="forgot">
              <span className="psw">
                Forgot <Link to="/forgot-pswd">password?</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
