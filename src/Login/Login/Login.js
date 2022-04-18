import React from "react";
import { Form } from "react-bootstrap";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Login.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  let errorMessage;
  if (!user) {
    errorMessage = <p>{error?.message}</p>;
  }
  const emailRef = useRef("");

  const passwordRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="my-5 ">
      <Form className="w-50 m-auto form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn bg-black  d-block mx-auto golden"
        >
          Log-In
        </button>
        {errorMessage}
        <p className="mt-3 text-center">
          Don't Have an Account?
          <span
            onClick={handleRegister}
            className="btn btn-link text-decoration-none "
          >
            Register
          </span>
        </p>
        <p className="mt-3 text-center">
          Forget Password?
          <span className="btn btn-link text-decoration-none ">
            Reset Password
          </span>
        </p>

        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Login;