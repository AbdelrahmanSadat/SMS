import { Section } from '../../../database';

export default async function (name, className, defaultAdmissionFees, defaultMonthlyFees ) {
    let createdSection = await Section.create({
        name,
        class: className,
        defaultAdmissionFees,
        defaultMonthlyFees
    });
    return createdSection;
}