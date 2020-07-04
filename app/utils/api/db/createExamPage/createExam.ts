// * Creates an exam given the data object needed to create it

import { Exam } from '../../../database';

export default async function (examData) {
    
    let createdExam = await Exam.create({ ...examData });

    return createdExam;
}