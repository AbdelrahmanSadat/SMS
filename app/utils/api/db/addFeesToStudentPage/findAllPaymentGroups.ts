// * Finds all paymentGroups

import { PaymentGroup } from '../../../database';

export default async function () {
    let paymentGroups = await PaymentGroup.findAll({});
    return paymentGroups;
}