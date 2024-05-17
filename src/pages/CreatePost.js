import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({ isAuth }) => {
    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const navigate = useNavigate()

    const postsCollectionRef = collection(db, 'posts')
    const handleSubmit = async () => {
        const timestamp = Date.now()

        await addDoc(postsCollectionRef, {
            title: title,
            context: postText,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            },
            timestamp: timestamp
        })
        navigate('/')
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [])

    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <h1>Create A Post</h1>
                <div className='inputGp'>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(e) => { setTitle(e.target.value) }}></input>
                </div>
                <div className='inputGp'>
                    <label>Post</label>
                    <textarea placeholder='Input your content' onChange={(e) => { setPostText(e.target.value) }}></textarea>
                </div>
                <button onClick={handleSubmit}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost