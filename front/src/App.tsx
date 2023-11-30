// import { Provider as ReduxProvider } from "react-redux";
// import { ThemeProvider } from "@mui/material";
import AppRoute from "./routes/AppRoute";
// import themes from "./themes/themes";
// import { useStore } from "./store";

const App = () => {
  return (
    // <ReduxProvider store={useStore()}>
    //   <ThemeProvider theme={themes}>
    //     <AppRoute />
    //   </ThemeProvider>
    // </ReduxProvider>
    <>
      <AppRoute />
    </>
  );
};

export default App;
