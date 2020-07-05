import { Section } from '../../../database';

export default async function () {
    return await Section.findAll({});
}