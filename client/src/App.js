import { Helmet } from "react-helmet";
import Wrapper from "./Components/Wrapper";
import CreatePost from "./Components/CreatePost";
import ListPost from "./Components/ListPost/ListPost";
import { Box, Typography } from "@mui/material";

const renderHeader = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>My Title</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <style>{"body { background-color: rgba(0, 0, 0, .1); }"}</style>
  </Helmet>
);

function App() {
  return (
    <div>
      {renderHeader()}
      <Wrapper>
        <Box sx={{ padding: "10px 0 15px" }}>
          <Typography variant="h5" align="center">
            Simple Microservice Architecture
          </Typography>
        </Box>
        <CreatePost />
        <ListPost />
      </Wrapper>
    </div>
  );
}

export default App;
