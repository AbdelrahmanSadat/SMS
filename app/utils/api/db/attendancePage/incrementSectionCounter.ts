// * Updates a sections counter (incrementing it)
// * Given the section record and increment value
export default async function (sectionRecord, incrementValue) {
    sectionRecord.counter += incrementValue;
    return await sectionRecord.save();
}