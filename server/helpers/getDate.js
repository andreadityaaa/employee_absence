exports.getTodayDateTime = () => {
    let today = new Date()
    let year = today.getFullYear(),
        month = `00${today.getMonth() + 1}`.slice(-2),
        date = `00${today.getDate()}`.slice(-2),
        hh = `00${today.getHours()}`.slice(-2),
        mm = `00${today.getMinutes()}`.slice(-2),
        ss = `00${today.getSeconds()}`.slice(-2),
        ms = `00${today.getMilliseconds()}`.slice(-3)

    return `${year}-${month}-${date} ${hh}:${mm}:${ss}.${ms}`
}