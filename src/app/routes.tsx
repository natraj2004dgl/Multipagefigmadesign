import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { GlucoseTracker } from "./screens/GlucoseTracker";
import { Medications } from "./screens/Medications";
import { Diet } from "./screens/Diet";
import { More } from "./screens/More";
import { FootCare } from "./screens/FootCare";
import { Notifications } from "./screens/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Login },
      { path: "home", Component: Home },
      { path: "glucose", Component: GlucoseTracker },
      { path: "medications", Component: Medications },
      { path: "diet", Component: Diet },
      { path: "more", Component: More },
      { path: "footcare", Component: FootCare },
      { path: "notifications", Component: Notifications },
    ],
  },
]);
