export const formatDate = (date: Date): string => {
    let year = `${date.getFullYear()}`
    let month = `${(date.getMonth() + 1)}`
    if(date.getMonth() + 1 < 10) month = `0${month}`
    let day = `${date.getDate()}`
    if(date.getDate() < 10) day = `0${day}`
    return `${year}-${month}-${day}`
}