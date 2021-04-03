import React, { useState ,useEffect} from "react";
import "./forms.css";
import { Button, TextField, Typography, Paper } from "@material-ui/core";
import Filebase from "react-file-base64";
import { useDispatch,useSelector } from "react-redux";
import { createPost,updatePost } from "../../actions/posts";
import useStyles from "./style";

const Form = ({currentId, setCurrentId}) => {
  const post = useSelector((state)  => currentId ? state.posts.find((post)=> post._id ===currentId) : null)
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,postData));
      
    }else{
          dispatch(createPost(postData));
          
    }
    clear()
  };
  const clear = () => {
    setCurrentId(null)
    setPostData({creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""})
  };

  useEffect(()=>{
    if(post) setPostData(post)
  },[post])
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a memory</Typography>
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
          value={postData.message}
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
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
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
