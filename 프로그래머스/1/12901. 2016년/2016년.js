function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let dateStr = "2016-" + a + "- " + b;
    let date = new Date(dateStr);
    
    return days[date.getDay()];
}