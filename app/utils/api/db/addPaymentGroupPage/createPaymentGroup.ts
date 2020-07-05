// * Creates a payment group given a data object

import { PaymentGroup } from '../../../database';

export default async function (paymentGroupData) {
    let createdPaymentGroup = await PaymentGroup.create(paymentGroupData);
    return createdPaymentGroup;
}