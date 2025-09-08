import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Kanit,sans-serif",
  colors: {
    chanadda: virtualColor({
      name: "chanadda",
      dark: "yellow",
      light: "violet",
    }),
    Pawaris: virtualColor({
      name: "Pawaris",
      dark: "blue",
      light: "red",
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
