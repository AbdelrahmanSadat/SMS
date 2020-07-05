import { PaymentGroup } from '../../../database';

export default async function () {
    return await PaymentGroup.findAll({});
    
}