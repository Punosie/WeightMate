import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/authContext";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App.jsx";
import AuthListener from "./redux/AuthListener";
import system from "./theme/theme";
import Tracker from "./pages/Tracker";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ReduxProvider store={store}>
                <Provider>
                    <AuthListener />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/tracker" element={<Tracker />} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
        </ReduxProvider>
    </StrictMode>
);