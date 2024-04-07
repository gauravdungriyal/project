// for(let i=1; i<=4; i++){
//     let space='';
//     for(let j=1; j<=4-i; j++){
//         space=space+" ";
//         }
        
//     for(let k=i; k>=1; k--){
//         space+=k;
//     }
//     for(let l=2; l<=i; l++){
//         space+=l;
//     }
//     console.log(space);
// }

let temp1='';
let temp2='';
for(let i=1; i<7; i++){
    let row1='';
    let row2='';
    if(i%2==0){
        for(let j=1; j<=i/2; j++){
            row2+=j;
            temp2=row2;
        }
    }
    else {
        for(let k=1; k<=(i/2)+1;k++){
            row1+=k;
            temp1=row1;
        }
    }
    console.log(temp1+""+temp2);
}