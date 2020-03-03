var checkValidString = function(s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    if (s[i] == '*') {
      dp[i][i] = true;
    }
    if ((s[i] == '*' || s[i] == '(') && (s[i + 1] == '*' || s[i + 1] == ')')) {
      dp[i][i + 1] = true;
    }
  }
  for (let len = 2; len < n; len++) {
    for (let start = 0; start < n - len; start++) {
      if (s[start] == '*' && dp[start + 1][start + len]) {
        dp[start][start + len] = true;
      } else if (s[start] == '(' || s[start] == '*') {
        for (let i = start + 1; i <= start + len; i++) {
          if ((s[i] == ')' || s[i] == '*') && (i == start + 1 || dp[start + 1][i - 1]) &&
          (i == start + len || dp[i + 1][start + len])) {
            dp[start][start + len] = true;
          }
        }
      }
    }
  }

  return dp[0][n - 1];
}

function check(str, start, finish, dp) {
  if (finish < str.length && dp[start][finish]) {
    return dp[start][finish];
  }

  if (finish - start == 1) {
    dp[start][finish] = str[start] === '*';
    return dp[start][finish];
  }
  if (finish === start) {
    return true;
  }

  for (let i = start + 1; i < finish; i++) {
    if (checkPair(str[start], str[i])) {
      if (check(str, start + 1, i, dp) && check(str, i + 1, finish, dp)) {
        dp[start][finish] = true;
        return true
      }
    }
  }
  return false
}

function checkPair(a, b) {
  const open = a === '(' && b === ')' || b === '*'
  const close = a === '*' && b === ')' || b === '*'

  return open || close
}

console.log(checkValidString("(*()"))
// console.log(checkValidString('()(()(*(())()*)(*)))()))*)((()(*(((()())()))()()*)((*)))()))(*)(()()(((()*()()((()))((*((*)()'))