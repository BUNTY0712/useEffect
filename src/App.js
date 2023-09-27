import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("hera");

  useEffect(() => {
    console.log("kuch v change toh ye line console hoga");
  }, []);

  useEffect(() => {
    console.log("jb value change hoga toh ye line ");
  }, [value]);

  useEffect(() => {
    console.log("jb count no. change hoga toh ye line");
  }, [count]);

  function updateCount() {
    setCount(count + 1);
  }
  function updateData() {
    setValue("bunty");
  }

  return (
    <>
      <Grid container>
        <Grid item lg={12}>
          <h1>
            Button clicked {count} times {value}{" "}
          </h1>
          <button onClick={updateCount}>click</button>
          <button onClick={updateData}>Update Data</button>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
