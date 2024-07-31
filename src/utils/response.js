
const success = (res, message, data) => {
    return res.status(200).json({
        success: true,
        message,
        data
    })
}

const failure = (res, message) => {
    return res.status(400).json({
        success: false,
        message
    })
}

export { success, failure }