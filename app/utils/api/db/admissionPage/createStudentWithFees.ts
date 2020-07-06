// * Creates a student and studentFees (for admission fees)
// * given a studentData object with student's data 
// * (includes studentId, and payment for studentFees)
import { Student, StudentFees } from '../../../database';

export default async function (studentData) {
    let createdStudent = await Student.create(studentData);

    // TODO?: should fees be paid on admission???
    // TODO?: and if so, is it both monthly and admissions fees?
    // TODO?: if paid immediatly, add to income
    // TODO: add name of fee (or default to "Admission Fees")
    let createdStudentFees = await StudentFees.create({
        studentId: createdStudent.dataValues.id,
        value: studentData.payment
    });

    return createdStudentFees
}