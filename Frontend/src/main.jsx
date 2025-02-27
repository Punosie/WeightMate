import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/authContext";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.jsx";
import AuthListener from "./redux/AuthListener";
import Tracker from "./pages/Tracker";
import { Toaster } from "@/components/ui/toaster"
import Stats from "./pages/Stats";
import UserForm from "./components/UserForm";
import NotFoundPage from "./pages/NotFound";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ReduxProvider store={store}>
                <Provider>
                    <AuthListener />
                    <Toaster />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/tracker" element={<Tracker />} />
                            <Route path="/stats" element={<Stats />} />
                            <Route path="/createUser" element={<UserForm />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
        </ReduxProvider>
    </StrictMode>
);