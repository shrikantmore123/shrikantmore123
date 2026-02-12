const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Load profile data
const getProfileData = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../data/profile.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading profile data:', error);
    return {};
  }
};

// Home page
router.get('/', (req, res) => {
  const profile = getProfileData();
  res.render('index', {
    title: 'Home',
    profile: profile
  });
});

// About section (same page, different route for navigation)
router.get('/about', (req, res) => {
  const profile = getProfileData();
  res.render('index', {
    title: 'About',
    profile: profile,
    section: 'about'
  });
});

// Skills section
router.get('/skills', (req, res) => {
  const profile = getProfileData();
  res.render('index', {
    title: 'Skills',
    profile: profile,
    section: 'skills'
  });
});

module.exports = router;
