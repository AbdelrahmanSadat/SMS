// * Creates studentFees records given an appropriate object array
// * studentId, value, name

import { StudentFees } from '../../../database';

export default async function (studentFeesData) {
    // TODO: if there are no students, do an error thingy
    // TODO?: add reference to payment group (id)?
    let createdStudentFees = await StudentFees.bulkCreate(studentFeesData);

    return createdStudentFees
}