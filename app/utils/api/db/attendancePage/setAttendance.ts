// * Sets the attendance record's 'attended' value to true
// * Given the student's Id, their section, and session's date

import { Attendance } from '../../../database';

export default async function (studentId, sectionId, date) {

    let attendanceRecord = await Attendance.findOne({
        where: {
            studentId: studentId,
            sectionId: sectionId,
            date: date,
        },
    });
    attendanceRecord.attended = true;
    attendanceRecord.save().then(() => console.log('updated record'));
    return attendanceRecord;
}