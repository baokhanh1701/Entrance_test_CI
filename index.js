function primeBetween() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let res = "Primes between a and b: \n";
  console.log("Primes between a and b: ");
  if (b < a) alert("This is not a valid input");
  for (let i = a; i <= b; i++) {
    if (i == 1 || i == 0) continue;
    let flag = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      res += i + " ";
    }
  }
  document.getElementById("output_prime").innerHTML = res;
  console.log(res);
}

// void numberOneTriangle(int num){
//     for(int i = 0; i<num; i++){
//         for(int j = 0; j<i+1; j++){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
// }

function numberOneTriangle() {
    let res = "";
    let num = Number(document.getElementById("num").value);
    for (let i = 0; i < num; i++) {
        for(let j = 0; j < i+1; j++) {
            res += "*";
        }
        res += "\n";
    }
    document.getElementById("output_triangle").innerHTML = res;
}