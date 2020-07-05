// * Finds all students given a sectionId they're assigned to

import { Student } from '../../../database';

export default async function (section) {
    let assignedStudents = await Student.findAll({
        where: {
            sectionId: section.id,
        },
    });

    return assignedStudents;
}