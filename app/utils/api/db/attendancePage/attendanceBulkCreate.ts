// * Creates a number of Attendance records given an array of objects

import { Attendance } from '../../../database';

export default async function (attendanceBulkCreateArray) {
    let createdAttendances = await Attendance.bulkCreate(
        attendanceBulkCreateArray
    );
    return createdAttendances;
}
