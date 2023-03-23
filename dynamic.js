const posts = [];
let lastActivityTime = null;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: NO POSTS FOUND");
      }
    }, 1500);
  });
}

function getAllPostsAndActivityTime() {
  console.log("All posts: ", posts);
  console.log("Last activity time: ", lastActivityTime);
}

createPost({ title: "First Post", body: "This is my first post." })
  .then(() => updateLastUserActivityTime())
  .then(() => getAllPostsAndActivityTime())
  .then(() => deleteLastPost())
  .then((deletedPost) => {
    console.log("Post deleted: ", deletedPost);
    getAllPostsAndActivityTime();
  })
  .catch((error) => console.log(error));
