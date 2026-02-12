const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const indexRoutes = require('./routes/index');
const projectsRoutes = require('./routes/projects');
const resumeRoutes = require('./routes/resume');
const contactRoutes = require('./routes/contact');

// Use routes
app.use('/', indexRoutes);
app.use('/projects', projectsRoutes);
app.use('/resume', resumeRoutes);
app.use('/contact', contactRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).render('error', {
    title: '404 - Page Not Found',
    errorCode: 404,
    errorMessage: 'The page you are looking for does not exist.'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).render('error', {
    title: 'Error',
    errorCode: err.status || 500,
    errorMessage: err.message || 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
