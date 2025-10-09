function getAverage(data) {
    if (!data.weeklyAttendance || data.weeklyAttendance.length === 0) return 0;

    const totalAttendance= data.weeklyAttendance.reduce((sum, entry) => sum + (Number(entry.attendance) || 0), 0)
    const totalServiceDays = data.weeklyAttendance.length

    const average = totalAttendance / totalServiceDays

    return average
};

function getPercentage(avg, data) {
    const totalMembers = Number(data.totalMembers)
    if (!totalMembers || totalMembers === 0) return 0;

    return (avg/totalMembers) * 100
}

function getScore(perc, weight){
    return (perc/100) * weight
}

function getEvangelismPercentage(data){
    const totalMembers = Number(data.totalMembers)
    if (!totalMembers || totalMembers === 0) return 0;

    const evangelism = Number(data.evangelism)
    if (!evangelism || evangelism === 0) return 0;

    return (evangelism/totalMembers) * 100
}

function getAppraisalSummary(data){
    const weeklyAttendanceWeight = 50
    const evangelismAttendanceWeight = 10

    const weeklyAttendanceAverage = Math.round(getAverage(data) * 10) / 10
    const weeklyAttendancePercentage = Math.round(getPercentage(weeklyAttendanceAverage, data) * 10) / 10
    const weeklyAttendanceWeightedScore = Math.round(getScore(weeklyAttendancePercentage, weeklyAttendanceWeight) * 10) / 10

    const evangelismPercentage = Math.round(getEvangelismPercentage(data) * 10) / 10
    const evangelismAttendanceWeightedScore= Math.round(getScore(evangelismPercentage, evangelismAttendanceWeight) * 10) / 10

    
    const summary = {
        weeklyServiceAttendance: {
            weight: weeklyAttendanceWeight,
            average: weeklyAttendanceAverage,
            percentage: weeklyAttendancePercentage,
            weightedScore: weeklyAttendanceWeightedScore,
        },
        
        evangelismAttendance: {
            weight: evangelismAttendanceWeight,
            percentage: evangelismPercentage,
            weightedScore: evangelismAttendanceWeightedScore
        }
    }

    return summary
}

export { getAverage, getPercentage, getScore, getAppraisalSummary }