// solved in class
let str = 'abadbc';
console.log(ug(str).join(""))

function ug(a){
    let ans = [];
    let count_obj = {};
    let q = [];

    for(let i=0;i<a.length;i++){
        let gift = a[i];
        if(count_obj[gift] == undefined){
            count_obj[gift] = 1;
        }else{
            count_obj[gift]++
        }
    q.push(gift);
    while(q.length!=0){
        if(count_obj[q[0]]>1){
            q.shift()
        }else{
            ans.push(q[0])
            break
        }
    }

    if(q.length==0){
        ans.push('#')
    }
    }
    return ans
  }