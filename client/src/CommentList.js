import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
    const [comments, setComments] = useState([]);
    
    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    }; 

    useEffect(() => {
        fetchComments();
    }, []);

    const renderedComments = Object.values(comments).map(comment => {
        return (<div className="card" 
        style={{ width: '100%', marginBottom: '20px' }}
        key={comment.id}
        >
            <div className="card-body"><p>
                {comment.content}</p>
            </div>
        </div>
        )
    })
    return <div className="d-flex flex-column flex-wrap justify-content-between">
        {renderedComments}
        </div>;
}
