const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utill/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((course) =>
                res.render('me/stored-courses', {
                    course: mutipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((course) =>
                res.render('me/trash-courses', {
                    course: mutipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
