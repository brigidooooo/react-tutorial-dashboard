import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SideBar } from "components/index";
import { Box } from "@mui/system";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "nowrap",
    width: "100%",
    position: "relative",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Box sx={style.container}>
        <SideBar />
        <Component {...pageProps} />
      </Box>
    </>
  );
}

export default MyApp;
