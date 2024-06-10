import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const app = express();
const PORT = 8080;
const blogs = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

// Home page to display all blog posts
app.get('/', (req, res) => {
  res.render("index", { posts: blogs });
});

// Page to create a new blog post
app.get('/write', (req, res) => {
  res.render('write');
});

// Page to edit a specific blog post
app.get('/posts/:index/edit', (req, res) => {
  const { index } = req.params;
  if (index >= 0 && index < blogs.length) {
    res.render('edit.ejs', { post: blogs[index], index });
  } else {
    res.status(404).send('Post not found');
  }
});

app.get('/posts/:index/delete', (req, res) => {
  const { index } = req.params;
  if (index >= 0 && index < blogs.length) {
    blogs.splice(index, 1);
    res.redirect('/')
  }
  else {
    res.status(404).send('Post not found');
  }

})
// Update a specific blog post
app.put('/posts/:index', (req, res) => {
  const { index } = req.params;
  const data = req.body;
  
  if (index >= 0 && index < blogs.length) {
    blogs[index] = data;
    res.redirect(`/posts/${index}/post`);
  } else {
    res.status(404).send('Post not found');
  }
});

// Display a specific blog post
app.get('/posts/:index/post', (req, res) => {
  const { index } = req.params;

  if (index >= 0 && index < blogs.length) {
    res.render('post.ejs', { post: blogs[index], index });
  } else {
    res.status(404).send('Post not found');
  }
});

// Handle form submission to create a new blog post
app.post('/send', (req, res) => {
  const data = req.body;

  // Validate data (basic example, should be expanded based on actual requirements)
  if (data.title && data.content) {
    blogs.push(data);
    res.redirect('/');
  } else {
    res.status(400).send('Invalid data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
