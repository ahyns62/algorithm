def make_table(friends, gifts):
    num = len(friends)
    table_gifts = [[0 for _ in range(num + 1)] for _ in range(num)]
    for gift in gifts:
        sender, receiver = gift.split()
        table_gifts[friends.index(sender)][friends.index(receiver)] += 1
        
    # 선물 지수 계산
    for i, data in enumerate(table_gifts):
        table_gifts[i][num] = sum(data) - sum([row[i] for row in table_gifts])
    return table_gifts


def solution(friends, gifts):
    answer = 0
    num = len(friends)
    table_gifts = make_table(friends, gifts)
    
    # 다음 달 받을 선물 수
    list_gifts = [0 for _ in range(num)]
    for i in range(num):
        for j in range(i + 1, num):
            if (table_gifts[i][j] != 0 or table_gifts[j][i] != 0) and (table_gifts[i][j] != table_gifts[j][i]):
                list_gifts[i if table_gifts[i][j] > table_gifts[j][i] else j] += 1
            else:
                # 선물 지수 값 비교
                if table_gifts[i][num] > table_gifts[j][num]:
                    list_gifts[i] += 1
                elif table_gifts[i][num] < table_gifts[j][num]:
                    list_gifts[j] += 1
    return max(list_gifts)