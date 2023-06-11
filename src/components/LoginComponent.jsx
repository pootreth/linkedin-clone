import { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/linkedinLogo.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentails] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to LinkedIn!");
      localStorage.setItem('userEmail', res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please check your credentials");
    }
  };

  const googleSignIn = () => {
    GoogleSignInAPI();
    navigate("/home");
  };
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <div>
          <h1 className="heading">Sign in</h1>
          <p className="sub-heading">Stay updated on your professional world</p>
        </div>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentails({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentails({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <div>
          <p className="forgot">Forgot password?</p>
          <button onClick={login} className="login-btn">
            Sign in
          </button>
        </div>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSignIn} />

        <p className="go-to-signup">
          New to LinkedIn? <span className="join-now" onClick={() => navigate('/register')}>Join now</span>
        </p>
      </div>
    </div>
  );
}
