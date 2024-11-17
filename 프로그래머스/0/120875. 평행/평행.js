function solution(dots) {
    const getSlope = (p1, p2) => (p2[1] - p1[1]) / (p2[0] - p1[0]);

    const slopes = [
        getSlope(dots[0], dots[1]),
        getSlope(dots[0], dots[2]),
        getSlope(dots[0], dots[3]),
        getSlope(dots[1], dots[2]),
        getSlope(dots[1], dots[3]),
        getSlope(dots[2], dots[3]),
    ];

    if (slopes[0] === slopes[5] || slopes[1] === slopes[4] || slopes[2] === slopes[3]) {
        return 1;
    }

    return 0;
}
