function solution(myString, pat) {
    const k = myString.lastIndexOf(pat);
    return myString.slice(0, k + pat.length);
}