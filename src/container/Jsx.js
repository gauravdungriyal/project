let name='mohan';
function CheckEvenOrOdd(num){
   if(num%2 === 0) {
  return <div>Even</div>
}
else {
  return <div>Odd</div>
}
}
function vowelCheck(ch){
  switch(ch){
    case 'a':
    case 'e': 
    case 'o': 
    case 'i': 
    case 'u': 
    case 'A':   
    case 'E': 
    case 'O': 
    case 'i': 
    case 'U': 
    return <div>vowel</div>
    default: return <div>consonant</div>
  }
}

let num=5;
let ch='o';
const users=[
  {name:'Mohan', age:25},
  {name:'Ram', age:24},
  {name:'Rohit', age:21}
]
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <div>
        {
          CheckEvenOrOdd(4)
        }
        {
        
        num%2===0?<div>Even number</div>:<div>Odd number</div>

        }
        <h3>If Statement</h3>
        {
        
        num%2===0&&<div>Even number</div>

        }
        
      </div>
      <h3>Loop</h3>
      {
        users.map((item,index)=>{
          return <div key={index}>
            {item.name} - {item.age}</div>
        })
      }
      {
        vowelCheck(ch)
      }
      
    </div>
    
  );
}


 
export default Jsx;