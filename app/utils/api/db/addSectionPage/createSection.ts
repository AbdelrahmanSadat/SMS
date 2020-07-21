import { Section } from '../../../database';

export default async function (values) {
    let createdSection = await Section.create({
        name: values.sectionName,
        class: values.class,
        defaultMonthlyFees: values.monthlyFees,
        defaultAdmissionFees: values.admissionFees
    });
    return createdSection;
}