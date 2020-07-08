// * Checks the appropriate mac address of the device against
// * the provided mac address argument. Returns true if they match

import macaddress from 'macaddress';

export default async function (MAC) {
    let macAddress = await macaddress.one();
    return macAddress == MAC
}
