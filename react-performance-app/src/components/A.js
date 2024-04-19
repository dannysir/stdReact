import React from "react";
const A = ({message, posts}) => {
    return (
        <div>
            <h1>A Component</h1>
            <p>{message}</p>
            <ul>
                {posts.map(v =>{
                    return (
                        <li key={v.id}>
                            <p>{v.title}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default A;