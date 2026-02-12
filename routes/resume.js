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

// Resume page
router.get('/', (req, res) => {
  const profile = getProfileData();
  res.render('resume', {
    title: 'Resume',
    profile: profile
  });
});

module.exports = router;
