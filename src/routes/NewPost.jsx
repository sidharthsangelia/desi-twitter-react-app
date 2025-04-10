import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link, Form,redirect } from "react-router-dom";
function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  console.log ("action tri")
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch(" https://desi-twitter-react-app-backend-g7bqj4bab.vercel.app /posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
return redirect('/');
}
