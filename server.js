const express = require("express");
const app = express();

app.get("/post", (req, res) => {
  // Create an array of 20 sample posts
  const posts = [
    { title: "Post 1", content: "Lorem ipsum dolor sit amet." },
    { title: "Post 2", content: "Consectetur adipiscing elit." },
    // ... add more posts here ...
    { title: "Post 20", content: "Sed do eiusmod tempor incididunt." },
  ];

  // Send the posts as a JSON response
  res.json(posts);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
