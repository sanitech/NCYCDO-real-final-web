import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthProvider";

function LoginByPassword({ status }) {
  const provider = new GoogleAuthProvider();
  const navigation = useNavigate();
  const [username, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login, toggleFooter, toggleNavbar } = useAuth();

  console.log(status);

  const loginHandler = async (e) => {
    e.preventDefault();
    // from AuthProvider
    console.log(username);
    await axios
      .post("http://localhost:5000/api/v1/user/login", {
       username: username.username,
        password,
      })
      .then((res) => {
        setErrorMessage("");
        login(true);
        toggleFooter();
        toggleNavbar();
        console.log(res.data);
        localStorage.setItem("isLogin", true);
        localStorage.setItem("user", JSON.stringify(res.data.otherDetails));
        navigation("/super/admin/dashboard", { state: res.data });
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <html class="h-full">
        <body class="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
          <main class="w-full max-w-md mx-auto p-6">
            <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="p-4 sm:p-7">
                <div class="text-center">
                  <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign in
                  </h1>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Your session timeout please login
                  </p>
                </div>

                <div class="mt-5">
                  <form
                    onSubmit={loginHandler}
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div class="grid gap-y-4">
                      <div>
                       
                        <div class="relative">
                          <input
                            type="hidden"
                            id=""
                            name=""
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            aria-describedby="email-error"
                            value={username.username}
                            onChange={(e) => setUser(e.target.value)}
                          />
                          <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg
                              class="size-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>

                      <div>
                        <div class="flex justify-between items-center">
                          <label
                            for="password"
                            class="block text-sm mb-2 dark:text-white"
                          >
                            Password
                          </label>
                        </div>
                        <div class="relative">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            aria-describedby="password-error"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg
                              class="size-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p
                          class="hidden text-xs text-red-600 mt-2"
                          id="password-error"
                        >
                          8+ characters required
                        </p>
                      </div>

                      {errorMessage && (
                        <div
                          class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {errorMessage}
                        </div>
                      )}


                      <button
                        type="submit"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </div>
  );
}

export default LoginByPassword;
