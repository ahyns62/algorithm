function solution(rank, attendance) {
    let newRank = rank.filter((e, idx) => attendance[idx] == true);
    newRank.sort((a, b) => a - b);
    return 10000 * rank.indexOf(newRank[0]) + 100 * rank.indexOf(newRank[1]) + rank.indexOf(newRank[2]);
}