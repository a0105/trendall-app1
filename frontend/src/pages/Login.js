import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/ui/Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import video from "../video/n.mp4";
import { auth } from "../firebase";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetEmailError, setResetEmailError] = useState("");
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);
  const [isResetFormVisible, setIsResetFormVisible] = useState(false);

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
    setEmailError("");
    setPasswordError("");
    setAuthError("");
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Please enter your email.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Please enter your password.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSignUp = () => {
    if (validateEmail() && validatePassword()) {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setIsSignUpSuccessful(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setAuthError("An error occurred during sign-up. Please try again.");
          setIsLoading(false);
        });
    }
  };

  const handleSignIn = () => {
    if (validateEmail() && validatePassword()) {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setAuthError("An error occurred during sign-in. Please try again.");
          setIsLoading(false);
        });
    }
  };

  const handlePasswordReset = () => {
    if (!resetEmail) {
      setResetEmailError("Please enter your email.");
      return;
    }
    setIsLoading(true);
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        setIsResetEmailSent(true);
        setIsLoading(false);
        setIsResetFormVisible(false);
      })
      .catch((error) => {
        console.error(error);
        setResetEmailError("Failed to send reset email. Please try again.");
        setIsLoading(false);
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleResetEmailChange = (event) => setResetEmail(event.target.value);

  const textVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <>
      <Header />
      <div className="container flex flex-col items-center justify-center md:grid md:h-5/6 lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={video}
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <motion.i
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.3 }}
              variants={textVariants}
              className=""
            >
              <img
                className="h-16"
                src="https://www.latrobe.edu.au/__data/assets/file/0010/796393/logo-white.svg"
              />
            </motion.i>
          </div>
          <div className="relative -top-20 z-20 mt-auto">
            <blockquote className="space-y-2">
              <motion.p
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={textVariants}
                className="text-lg"
              >
                &ldquo;The Trendall Centre at La Trobe University houses a
                unique archive of some 40,000 images of ancient South Italian
                vases.&rdquo;
              </motion.p>
              <motion.footer
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={textVariants}
                className="text-sm"
              >
                AD Trendall Research Centre for Ancient Mediterranean Studies
              </motion.footer>
            </blockquote>
          </div>
        </div>
        <div className="flex h-screen w-full px-4 lg:p-8">
          <div className="mx-auto -mt-32 flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {isResetFormVisible
                  ? "Forgot Password"
                  : isSignUpActive
                  ? "Create an Account"
                  : "Sign In"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isResetFormVisible
                  ? "Enter your email to reset your password"
                  : isSignUpActive
                  ? "Enter your Email below to create your account"
                  : "Enter your Email below to sign in"}
              </p>
            </div>
            {!isResetFormVisible && (
              <>
                <form>
                  <div className="mb-4">
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleEmailChange}
                      onBlur={validateEmail}
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-500">{emailError}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="password" className="sr-only">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      onBlur={validatePassword}
                    />
                    {passwordError && (
                      <p className="mt-1 text-sm text-red-500">
                        {passwordError}
                      </p>
                    )}
                  </div>
                  <div className="grid">
                    {isSignUpActive ? (
                      <Button
                        type="button"
                        onClick={handleSignUp}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="mr-3 h-5 w-5 animate-spin"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleSignIn}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="mr-3 h-5 w-5 animate-spin"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Sign In"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
                {authError && (
                  <p className="mt-4 text-sm text-red-500">{authError}</p>
                )}
                {isSignUpSuccessful && (
                  <p className="mt-4 text-sm text-green-500">
                    Account created successfully. Please sign in.
                  </p>
                )}
                <div className="text-center">
                  <p
                    className="cursor-pointer text-sm text-primary"
                    onClick={() => setIsResetFormVisible(true)}
                  >
                    Forgot Password?
                  </p>
                </div>
              </>
            )}
            {isResetFormVisible && (
              <form>
                <div className="mb-4">
                  <Label htmlFor="resetEmail" className="sr-only">
                    Email for password reset
                  </Label>
                  <Input
                    type="email"
                    id="resetEmail"
                    placeholder="Email for password reset"
                    onChange={handleResetEmailChange}
                  />
                  {resetEmailError && (
                    <p className="mt-1 text-sm text-red-500">
                      {resetEmailError}
                    </p>
                  )}
                </div>
                <div className="grid">
                  <Button
                    type="button"
                    onClick={handlePasswordReset}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="mr-3 h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Send Password Reset Email"
                    )}
                  </Button>
                  {isResetEmailSent && (
                    <p className="mt-4 text-sm text-green-500">
                      Password reset email sent successfully.
                    </p>
                  )}
                </div>
              </form>
            )}
            <Separator asChild className="my-6 bg-background">
              <div className="flex items-center py-3 text-xs uppercase text-muted-foreground before:me-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:before:border-gray-700 dark:after:border-gray-700">
                Or
              </div>
            </Separator>
            <div className="flex justify-center">
              {isSignUpActive ? (
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a
                    className="cursor-pointer text-primary"
                    onClick={handleMethodChange}
                  >
                    Sign In
                  </a>
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a
                    className="cursor-pointer text-primary"
                    onClick={handleMethodChange}
                  >
                    Create an Account
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
