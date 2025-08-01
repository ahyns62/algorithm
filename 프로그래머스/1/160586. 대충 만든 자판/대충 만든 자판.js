function solution(keymap, targets) {
    let answer = [];
    const minPress = {};

    for (let i = 0; i < keymap.length; i++) {
        const key = keymap[i];

        for (let j = 0; j < key.length; j++) {
            const char = key[j];
            const pressCount = j + 1;

            if (!minPress[char] || pressCount < minPress[char]) {
                minPress[char] = pressCount;
            }
        }
    }

    
    for (let i = 0; i < targets.length; i++) {
        let total = 0;
        let isValid = true;

        for (let j = 0; j < targets[i].length; j++) {
            const char = targets[i][j];

            if (minPress[char]) {
                total += minPress[char];
            } else {
                isValid = false;
                break;
            }
        }
        answer.push(isValid ? total : -1);
    }

    return answer;
}
