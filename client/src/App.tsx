import { useEffect, useState } from "react";
import ProblemPage from "./Pages/ProblemPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProblemSet from "./Pages/ProblemSet";
import LandingPage from "./Pages/LandingPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ErrorPage from "./Pages/ErrorPage";
import ProfilePage from "./Pages/ProfilePage";
import SettingPage from "./Pages/SettingPage";

export const TOKEN_STORAGE_KEY = "authToken";
export const ID_STORAGE_KEY = "id";
export const API_URL = "http://localhost:80";

function App() {
    const [token, setToken] = useState(localStorage.getItem(TOKEN_STORAGE_KEY));
    const [id, setId] = useState(localStorage.getItem(ID_STORAGE_KEY));

    const changeToken = (string: string) => {
        setToken(string);
    };
    const changeId = (string: string) => {
        setId(string);
    };

    useEffect(() => {
        if (token) {
            localStorage.setItem(TOKEN_STORAGE_KEY, token);
        } else {
            localStorage.removeItem(TOKEN_STORAGE_KEY);
        }
        if (id) {
            localStorage.setItem(ID_STORAGE_KEY, id);
        } else {
            localStorage.removeItem(ID_STORAGE_KEY);
        }
    }, [token, id]);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<LandingPage token={token} id={id} />}
                    />
                    <Route
                        path="/problemset"
                        element={<ProblemSet token={token} id={id} />}
                    />
                    <Route
                        path="/problem/:name/editorial"
                        element={
                            <ProblemPage
                                data={{ activeNavOption: "editorial" }}
                                token={token}
                                id={id}
                            />
                        }
                    />
                    <Route
                        path="/problem/:name/solutions"
                        element={
                            <ProblemPage
                                data={{ activeNavOption: "solutions" }}
                                token={token}
                                id={id}
                            />
                        }
                    />
                    <Route
                        path="/problem/:name/submissions"
                        element={
                            <ProblemPage
                                data={{ activeNavOption: "submissions" }}
                                token={token}
                                id={id}
                            />
                        }
                    />
                    <Route
                        path="/problem/:name"
                        element={
                            <ProblemPage
                                data={{ activeNavOption: "description" }}
                                token={token}
                                id={id}
                            />
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <SignupPage
                                Data={{
                                    token: token || "",
                                    setTokenFunction: changeToken,
                                    id: id || "",
                                    setIdFunction: changeId,
                                }}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <LoginPage
                                Data={{
                                    token: token || "",
                                    setTokenFunction: changeToken,
                                    id: id || "",
                                    setIdFunction: changeId,
                                }}
                            />
                        }
                    />
                    <Route
                        path="/sorry"
                        element={
                            <ErrorPage
                                data={{
                                    header: "Sorry :(",
                                    message:
                                        "If you already have an account, please log in. If you don't, please sign up.",
                                    links: [
                                        {
                                            text: "Login",
                                            link_path: "/login",
                                        },
                                        {
                                            text: "Signup",
                                            link_path: "/signup",
                                        },
                                    ],
                                }}
                            />
                        }
                    />
                    <Route
                        path="/settings"
                        element={<SettingPage token={token} id={id} />}
                    />
                    <Route
                        path="/accountsRouter/:name"
                        element={<ProfilePage token={token} id={id} />}
                    />

                    <Route
                        path="*"
                        element={
                            <ErrorPage
                                data={{
                                    header: "404",
                                    message: "Page not found.",
                                    links: [
                                        { text: "Main Page", link_path: "/" },
                                        {
                                            text: "Problem List",
                                            link_path: "/problemset",
                                        },
                                    ],
                                }}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
