import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [comPassword, setComPassword] = useState("");
  const [responseHandler, setResponseHandler] = useState({});
  const { uid, token } = useParams();
  const forgetPasswordHandler = (e) => {
    e.preventDefault();
    if (password !== comPassword) {
      setResponseHandler({ error: "Password does not match", status: "error", message: "Password does not match" });
    }
    axios
      .post("/api/v1/user/resetPassword", { password, uid, token })
      .then((res) => {
        console.log(res.data);
        setResponseHandler(res.data);
        // navigate(`/super/admin/resetPassword/${res.data.uid}/${res.data.token}`);
      })
      .catch((err) => {
        console.log(err);
        setResponseHandler(err);
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
                    Reset password?
                  </h1>
                  <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Remember your password?
                    <Link
                      class="text-amber-500 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      to="/super/admin"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>

                <div class="mt-5">
                  <form
                    onSubmit={forgetPasswordHandler}
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div class="grid gap-y-4">
                      <div>
                        <label
                          for="email"
                          class="block text-sm mb-2 dark:text-white"
                        >
                          New Password
                        </label>
                        <div class="relative">
                          <input
                            type="password"
                            id="email"
                            name="newpaassword"
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-describedby="email-error"
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
                        <label
                          for="email"
                          class="block text-sm mb-2 dark:text-white"
                        >
                          Confirm Password
                        </label>
                        <div class="relative">
                          <input
                            type="password"
                            id="email"
                            name="compassword"
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            required
                            value={comPassword}
                            onChange={(e) => setComPassword(e.target.value)}
                            aria-describedby="email-error"
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
                      {responseHandler.message && (
                        <div
                          class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {responseHandler}
                        </div>
                      )}

                      <button
                        type="submit"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Reset password
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

export default ResetPassword;
