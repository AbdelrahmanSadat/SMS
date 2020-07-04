// * finds a section given the section's name
import { Section } from '../../../database/index';


export default async function (sectionName: String) {

    let foundSection = await Section.findOne({
        where: {
            name: sectionName
        }
    }
    )
    return foundSection;
}