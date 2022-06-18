import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
// import './Comment.css';
import { Wrapper } from './Comment.style'

function CommentApp() {
    return(
        // <div className="wrapper">
        <Wrapper>
            CommentApp
            <CommentInput />
            <CommentList />
        </Wrapper>
        // </div>
    )
}

export default CommentApp