// * Finds all sections given a class
import { Section } from '../../../database';

export default async function (className: String) {
    let foundSections = await Section.findAll({
        where: { class: className }
    });
    return foundSections;
}