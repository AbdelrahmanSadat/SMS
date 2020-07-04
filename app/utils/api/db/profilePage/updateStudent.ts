// * updates a student given a found student record and new data
import findSection from './findSection';
import {merge} from 'lodash';

// ? maybe just take a student ID instead of the whole record
export default async function (studentRecord, studentFormData) {

    // * Find the model you want to update

    // * Check if the section was updated by the user
    // * If so, find that section's using its name, pull up its ID
    // * Use that ID as the new reference to the section in the
    // * student's record
    // ? You can also just do that without the if check
    // ? if it's not an expensive operation
    let newSection = await findSection(studentFormData.sectionName);

    // ? should check if a section with that name was found
    if (!!newSection) studentRecord.sectionId = newSection.id;
    // otherwise, display that no section with that name exists
    else throw new Error("No section exists with that name");

    // merges the new values with the student model
    merge(studentRecord, studentRecord, studentFormData);
    let savedStudent = await studentRecord.save();
    return savedStudent;
}
