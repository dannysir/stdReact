import React from "react";

const Message = ({message}) => {
    return <p>{message}</p>;
};
const ListItem = ({post}) =>{
    return (
        <li>
            <p>{post.title}</p>
        </li>
    )
}
const List = ({post}) => {
    return (
        <ul>
            {post.map(v => (
                <ListItem key={v.id} post={v}/>
            ))}
        </ul>
    );
};
const B = ({message, posts}) => {
    return (
        <div>
            <h1>B Component</h1>
            <p>{message}</p>
            <List post={posts}/>
            <Message message={message}/>
        </div>
    );
}
export default B;