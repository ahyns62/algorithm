function solution(users, emoticons) {
  const DISCOUNTS = [10, 20, 30, 40];
  const m = emoticons.length;
  let bestSubscribers = 0;
  let bestRevenue = 0;

  function evaluate(discountPick) {
    let subscribers = 0;
    let revenue = 0;

    const discounted = discountPick.map((d, idx) => {
      const p = emoticons[idx];
      return Math.floor(p * (100 - d) / 100);
    });

    for (const [needRate, limitPrice] of users) {
      let spend = 0;
      for (let i = 0; i < m; i++) {
        if (discountPick[i] >= needRate) spend += discounted[i];
      }

      if (spend >= limitPrice) {
        subscribers += 1;
      } else {
        revenue += spend;
      }
    }

    if (
      subscribers > bestSubscribers ||
      (subscribers === bestSubscribers && revenue > bestRevenue)
    ) {
      bestSubscribers = subscribers;
      bestRevenue = revenue;
    }
  }


  const pick = new Array(m).fill(10);
  function dfs(pos) {
    if (pos === m) {
      evaluate(pick);
      return;
    }
      
    for (const d of DISCOUNTS) {
      pick[pos] = d;
      dfs(pos + 1);
    }
  }

  dfs(0);
    
  return [bestSubscribers, bestRevenue];
}