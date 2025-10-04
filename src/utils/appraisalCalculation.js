function getAverage(data) {
    const totalAttendance= data.weeklyAttendance.reduce((sum, entry) => sum + Number(entry.attendance))
    const totalServiceDays = data.weeklyAttendance.length()

    const average = totalAttendance / totalServiceDays

    return average
};

function getPercentage(avg) {
    return avg * 100
}

function getScore(perc, score){
    return perc * score
}

export { getAverage, getPercentage, getScore }
