// * Creates fee records for students given 

import { Attendance, StudentFees } from '../../../database';
// * attendantsOnly: Boolean, date: Date, fee name and value
export default async function ({attendantsOnly, sessionDateTime, feeName, feeValue}) {
    let date = new Date(sessionDateTime);    
    // check wether or not to add the fees to only the students
    // that attended the session according to the checkbox's value
    let sessionAttendanceRecords;
    if (attendantsOnly) {
        sessionAttendanceRecords = await Attendance.findAll({
            where: { date, attended: true }
        });
    } else {
        sessionAttendanceRecords = await Attendance.findAll({
            where: { date }
        });
    }

    // Extract all the student IDs into an array
    let sessionStudentsIds = sessionAttendanceRecords.map(
        (session, index) => session.studentId
    );

    // Map all the student IDs into objects to be created in the DB
    // should include: studentId, name(of payment), value
    // * optional?: dueDate, paymentGroupId
    // TODO?: add the optional data in

    let studentFeesBulkCreateArray = sessionStudentsIds.map(
        (studentId, index) => {
            return {
                studentId,
                name: feeName,
                value: feeValue
            };
        }
    );

    // Bulk create into the studentFees table using the created arr
    StudentFees.bulkCreate(studentFeesBulkCreateArray);
}