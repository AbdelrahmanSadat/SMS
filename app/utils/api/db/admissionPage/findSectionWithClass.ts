import { Section } from '../../../database';

export default async function(className){
    let foundSections = Section.findAll({
        where: {
            class: className,
        },
    })

    return foundSections
}