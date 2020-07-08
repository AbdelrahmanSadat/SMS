// * Checks the value of and environemnt variable
// * envName: the name of the env variable to check
// * envValue: the value envName should have

export default function (envName, envValue) {
    if (process.env[envName] == envValue)
        return true
    return false
}
