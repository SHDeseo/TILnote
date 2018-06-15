// 구구단 1~ 9단까지 (세로)
for(var n = 1; n <= 9; n++){
  console.log(n+"단");
  for(var m = 1; m <= 9; m++){
    console.log(n + "x" + m + "=" + n*m);
  }
  console.log();
}
// 구구단 1~9단 (가로)
for(var n = 1; n <= 9; n++){
  console.log();
  console.log(n+"단");
  for(var m = 1; m <= 9; m++){
    process.stdout.write(n + "x" + m + "=" + n*m+"\t");
  }
  console.log();
}
