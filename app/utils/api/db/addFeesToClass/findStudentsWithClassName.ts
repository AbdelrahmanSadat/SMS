// * Finds all students given their class name

import { Student } from '../../../database';

export default async function (className) {
    let foundStudents = await Student.findAll({
        where: {
            class: className
        }
    });

    return foundStudents;
}