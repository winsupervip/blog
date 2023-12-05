const meRouter = require('./me');
const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const express = require('express');

function route(app) {
    app.use(express.json()); app.use(express.urlencoded({ extended: true}));
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}
module.exports = route;
