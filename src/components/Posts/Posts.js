import React from 'react'
import Post from './Post/Post'
import {Grid,CircularProgress} from '@material-ui/core'
import useStyles from './style'
import {useSelector} from 'react-redux'

const Posts =()=>{
    const classes=useStyles()
    const posts = useSelector((state)  => state.posts)
    console.log(posts) 
    return(
        
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {
                    posts.map((post)=>(
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post}/>
                        </Grid>
                    ))
                }

            </Grid>
        )
        
    )
}
export default Posts