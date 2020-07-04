// * Sets a fee's "paid" field to true

export default async function (feeRecord) {
    feeRecord.paid = true;
    return await feeRecord.save();
}