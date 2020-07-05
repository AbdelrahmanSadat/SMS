// * Finds all students in a section given a section ID
import { Student } from '../../../database';

export default async function (sectionId: Number) {
    let foundStudents = await Student.findAll({
        where: {
            sectionId
        }
    });

    return foundStudents;
}