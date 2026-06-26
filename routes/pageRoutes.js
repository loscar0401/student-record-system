const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/student/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/student-login.html'));
});
router.get('teacher/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/teacher-login.html'));
});

router.get('/student/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/student-dashboard.html'));
});
router.get('/student/grades', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/student-grades.html'));
});
router.get('/student/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/student-profile.html'));
});
router.get('/student/schedule', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/student-schedule.html'));
});
router.get('/student/subjects', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/student-subjects.html'));
});

router.get('/teacher/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/teacher-dashboard.html'));
});
router.get('/teacher/grades', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/teacher-grades.html'));
});
router.get('/teacher/schedule', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/teacher-schedule.html'));
});
router.get('/teacher/students', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/teacher-students.html'));
});
router.get('/teacher/subjects', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/teacher-subjects.html'));
});

module.exports = router