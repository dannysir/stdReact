import React, {useCallback} from "react";

const Message = React.memo(({message}) => {
    return <p>{message}</p>;
});
const ListItem = React.memo(({post}) => {
    return (
        <li>
            <p>{post.title}</p>
        </li>
    )
});
const List = React.memo(({post, testFunc}) => {
    console.log('list render');
    return (
        <ul>
            {post.map(v => (
                <ListItem key={v.id} post={v}/>
            ))}
        </ul>
    );
});
const B = ({message, posts}) => {
    console.log('B render');
    const testFunc = useCallback(() => {
    }, []);
    return (
        <div>
            <h1>B Component</h1>
            <p>{message}</p>
            <List post={posts} testFunc={testFunc}/>
            <Message message={message}/>
        </div>
    );
}
export default B;