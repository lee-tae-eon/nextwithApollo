import { useSubscription, gql, useQuery } from "@apollo/client";
import { Card } from "semantic-ui-react";

const GET_TODOS = gql`
  subscription {
    alarmGetMessage {
      unreadMessageCnt
      receiverId
    }
  }
`;

const Comment = gql`
  query {
    navigatePagenation(
      input: {
        postCategory: QuestionPost
        currentPage: 1
        perPageTakeContent: 10
        subCategory: { questionPost: Trade_Distribution }
      }
    ) {
      ok
      error
      totalCnt
      lastPage
      currentPage
      perPageTakeContent
      subCategory
      perPageTakeContent
      posts {
        __typename
        ... on QuestionPost {
          _id
          title
          writer
          filePathList
          writerLarchiveProfile {
            level
            exp
          }
          writerPersonalUser {
            _id
            nickName
          }
          viewCnt
          likeCnt
          commentCnt
          createdAt
        }
      }
    }
  }
`;

const TodoList = () => {
  // const { loading, error, data } = useSubscription(GET_TODOS);
  // console.log(data);
  // console.log(loading);
  const data = useQuery(Comment);
  console.log(data);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  return <div></div>;
};

export default TodoList;
