// * finds a student given an ID
import { Student, Section } from '../../../database/index';


export default async function (studentId: Number) {

    let foundStudent = await Student.findOne({
        where: { id: studentId },
        include: [{ model: Section }]
    });
    return foundStudent;
}