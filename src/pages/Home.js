import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase-config'
import { getDocs, deleteDoc, doc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'

const Home = ({ isAuth }) => {

    const postsCollectionRef = collection(db, 'posts')
    const [postLists, setPostLists] = useState([])

    const handleDeletePost = async (id) => {
        const postDoc = doc(db, 'posts', id)
        await (deleteDoc(postDoc))
    }
    const getPosts = async () => {
        const data = await getDocs(postsCollectionRef)
        setPostLists(data.docs.map((doc) => (
            { ...doc.data(), id: doc.id }
        )))
    }

    useEffect(() => {
        getPosts()
    }, [handleDeletePost])

    return (
        <div className='homePage'>
            {postLists && postLists.map((post) => (
                <div className='post' key={post.id}>
                    <div className='postHeader'>
                        <div className='title'>
                            <h1>
                                {post.title}
                            </h1>
                        </div>
                        {isAuth && auth?.currentUser?.uid === post.author.id &&
                            <div className='deletePost'>
                                <button onClick={() => handleDeletePost(post.id)}>
                                    &#128465;
                                </button>
                            </div>
                        }
                    </div>
                    <div className='postTextContainer'>
                        {post.context}
                    </div>
                    <h3>@{post.author.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default Home