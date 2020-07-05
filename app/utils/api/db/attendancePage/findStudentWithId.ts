// * Finds a student using their ID and returns record with Warnings

import { Student, Warning } from '../../../database';

export default async function (studentId: Number) {
    let foundStudent = await Student.findOne({
        where: {
            id: studentId
        },
        include: [Warning],
    });

    return foundStudent;
}