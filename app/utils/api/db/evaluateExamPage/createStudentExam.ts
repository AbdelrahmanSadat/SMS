// * Creates student exams given the value of the fields, and
// * an exam object to compare scores and determine passing
// TODO: comparing scores and determining pass should be done in
// TODO: the db models side (aftersave or something)

import { StudentExam } from '../../../database';

export default async function (formData, exam) {
    let createdStudentExam = await StudentExam.create({
        studentId: formData.id,
        examId: formData.exam,
        score: formData.score,
        passing: formData.score >= exam.dataValues.minimum,
    });

    return createdStudentExam;
}
