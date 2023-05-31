import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../db/api'
import PostCard from '../postCard/PostCard'
import classes from './PeopleFeed.module.css'

function JobsFeed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllUsers().then((result) => {
            setPosts(result)
        })
    }, [])

    return (
        <div className={classes.container}>
            <div>
                {posts.map((post) => (
                    <PostCard
                        key={post.ID}
                        title={post.name}
                        moreText={{
                            Email: post.email,
                            Age: post.age.low,
                            'Phone Number': post.phone.low,
                            'Open to work': `${post.open_to_work ? 'Yes' : 'No'}`,
                        }}
                        arrayData={post.abilities}
                        arrayTitle="Skills"
                    />
                ))}
            </div>
        </div>
    )
}

export default JobsFeed
