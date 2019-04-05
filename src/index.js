import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./commentDetail";
import ApprovalCard from "./approvalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure?</ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2:45PM"
          commentText="Comment 1"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 3:30AM"
          commentText="Comment 2"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          commentText="Comment 3"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
