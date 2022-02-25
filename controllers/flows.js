const {get, reply, getIA} = require('../adapter')
const {saveExternalFile} = require('./handle')

const getMessages = async (message) => {
    const data = await get(message)
    return data
}

const responseMessages = async (step) => {
    const data = await reply(step)
    if(data && data.media){
        const file = await saveExternalFile(data.media)
        return {...data,...{media:file}}
    }
    return data
}

const bothResponse = async (message) => {
    const data = await getIA(message)
    console.log(data, 'samir')
    if(data && data.media){
        const file = await saveExternalFile(data.media)
        return {...data,...{media:file}}
    }
    return data
}


module.exports = { getMessages, responseMessages, bothResponse }