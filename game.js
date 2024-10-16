let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function reset(){
    val=[]
    for(i of box){
        i.innerText=""
    }
}
function checkWinner(){
    let x=[]
    let o=[]
    for(let i=0;i<val.length;i++){
        if(val[i]==1)
            x.push(i)
        else if (val[i]==2) o.push(i)
    }
    for (i of wins){
        let cx=0;
        let co=0;
        for(j of i){
            if(x.includes(j))
                cx++;
            
            if(o.includes(j))
                co++;
        }
        if(co==3){
            alert("O is winner")
            reset();
        }
        if(cx==3){
            alert("X is winner")
            reset();
        }
    }
    if(val.length==9){
        alert("Draw!!")
        reset()
    }
}
function onclk(eve){
    let e=eve.target
    i=0
    for(k of box){
        if(k==e)break;
        i++;
    }
    if(val[i]==2||val[i]==1){
        alert("Occupied Bro!!")
        return;
    }
    if(turn==0){
        e.innerText="X"
        val[i]=1
    }
    else {
        e.innerText="O"
        val[i]=2
    }
    turn=(turn+1)%2
    checkWinner()
}
let val=[]
let box=document.querySelectorAll(".cls")
turn=0
reset()

for(i of box){
    i.addEventListener("click",onclk)
}

let but=document.querySelector("#reset");
but.addEventListener("click",reset)