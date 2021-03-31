import React, { useState } from "react";
import "./forms.css";
import { Button, TextField, Typography, Paper } from "@material-ui/core";
import Filebase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import useStyles from "./style";
const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};
  const dispatch = useDispatch();
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          value={postData.creator}
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />

        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          value={postData.nessage}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          value={postData.tags}
          fullWidth
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <Filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          color="primary"
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          color="secondary"
          size="small"
          variant="contained"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
