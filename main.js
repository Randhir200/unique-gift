let str = 'abadbc';
console.log(ug(str).join(""))

function ug(a) {
  let q = [];
  let ans = [];
  let ind;

  for (let i = 0; i < a.length; i++) {
    ind = q.indexOf(a[i]);
    if (ind == -1) {
      q.push(a[i]);
    } else {
      q.splice(ind, 1);
    }
    ans.push(q[0]);

    if (q.length == 0) {
      ans.push('#');
    }
  }

  return ans;
}
