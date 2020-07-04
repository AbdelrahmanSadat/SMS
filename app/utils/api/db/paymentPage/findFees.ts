// * finds all student fees given a student ID
import { StudentFees } from '../../../database/index';


export default async function (studentId: Number) {
  let foundFees = await StudentFees.findAll({
    where: {
      studentId,
      paid: false,
    },
  })
  return foundFees;
}