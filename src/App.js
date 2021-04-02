import React,{ useState,useEffect } from 'react'
import './App.css';
import './index.css'
import useStyles from './styles'
import mem  from './images/mem1.jpg'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPost } from "./actions/posts"
import{ Container,AppBar,Typography,Grow,Grid }  from '@material-ui/core'


function App() {
  const [currentId,setCurrentId] = useState(null)
  const classes=useStyles()
   const dispatch = useDispatch()
   useEffect(() => {
     dispatch(getPost())
     }, [dispatch])
  return (
    <>
   
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='sticky' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
          <img className={classes.image} src={mem} alt="memories" height='40'/>
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
             <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Form currentId={currentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
        
      
    </Container>
    </>
  );
}

export default App;
