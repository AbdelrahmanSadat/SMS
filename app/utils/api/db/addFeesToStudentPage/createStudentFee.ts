// * Creates a studentFee record given an object with student ID and
// * a fee value and name
import { Student, StudentFees } from '../../../database';

export default async function ({studentId, feeName, feeValue}) {
    let foundStudent = await Student.findOne({
        where: { id: studentId }
    });
    // TODO: if there's not student with this id, do an error
    // TODO?: add reference to payment group (id)?
    let createdFees = await StudentFees.create({
        studentId: foundStudent.id,
        // paymentGroupId: this.state.formData.id,
        value: feeValue,
        name: feeName
    });

    return createdFees
}