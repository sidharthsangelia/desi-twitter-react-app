import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch(" https://desi-twitter-react-app-backend-g7bqj4bab.vercel.app /posts");
  const resData = await response.json();
  return resData.posts;
}
