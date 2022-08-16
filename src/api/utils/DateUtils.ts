export const formatDate = (date: Date | null): string => {
    if(!date) return ''
    let year = `${date.getFullYear()}`
    let month = `${(date.getMonth() + 1)}`
    if(date.getMonth() + 1 < 10) month = `0${month}`
    let day = `${date.getDate()}`
    if(date.getDate() < 10) day = `0${day}`
    return `${year}-${month}-${day}`
}

export const daysBetween = (date1: Date, date2: Date): number => {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((date2.getTime() - date1.getTime())/(1000*60*60*24));
}