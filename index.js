const centra = require("centra")

const resolveOutput = (_) => JSON.parse(_.body.toString() || "{}")
const BASE_URL = "https://nekos.best";
const ENDPOINTS = [
    'cuddle', 'feed',
    'hug', 'kiss',
    'nekos', 'pat',
    'poke', 'slap',
    'tickle'
]

class NekoBestClient {
    constructor() {
        ENDPOINTS.forEach((endpoint) => {
            this[`get${endpoint[0].toUpperCase() + endpoint.slice(1).toLowerCase()}`] = async function () {
                return await centra(`${BASE_URL}/${endpoint}`).send().then(resolveOutput).then((res) => res.url)
                    .catch(() => null)
            }
        })
    }
}

module.exports = NekoBestClient