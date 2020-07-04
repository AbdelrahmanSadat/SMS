// * Returns all exam records given a specific date for a day
// * Returns all exams within that day

import { Exam } from '../../../database';
import { Op } from 'sequelize';

export default async function (date: String) {
    // Setting up a date-time range from the beginning of
    // the day to its end to use in exam fetching by date
    let startDate = new Date(date);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate = new Date(startDate.getTime() - 1000);
    let endDate = new Date(date);
    endDate.setHours(23);
    endDate.setMinutes(59);

    // fetch exams with the date range (chosen day)
    let foundExams = await Exam.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            }
        }
    });

    return foundExams;
}