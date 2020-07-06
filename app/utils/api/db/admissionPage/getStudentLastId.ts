// * Gets the last student id used in the db

import { sequelize } from '../../../database';
import getLastId from '../../../misc/getLastID';

export default async function () {
    let lastID = await getLastId(sequelize, 'students');
    return lastID;
}