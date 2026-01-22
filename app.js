let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
   let count = 0;
let turn0 = true;
 
let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
let resetGame = () =>
{
    turn0 = true;
    count = 0;
    ableBoxes();
    msgContainer.classList.add("hide");
}
  const disableBoxes = () =>
    {
        for( let bx of boxes)
        {
            bx.disabled = true;
        }
    }
   const ableBoxes = () =>
    {
        for( let bx of boxes)
        {
            bx.innerText = "";
            bx.disabled = false;
            
        }
    }
  const   showwinner = (winner) =>
    {  
        msg.innerText = `Congratulations ! Winner is ${winner} .`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
boxes.forEach((box) => {
    box.addEventListener("click", () =>
    {
        if(turn0)
        {
            box.innerText = "O";
            turn0 = false;
            
        }else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkwinner();
        
    })
});
 
let Draw = () =>
{
    msg.innerText = "Sorry Match was Draw Try Again";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
   const checkwinner = () => 
    {
        for (let pattern of winpatterns)
        {
            let pos1value = boxes[pattern[0]].innerText;
            let pos2value = boxes[pattern[1]].innerText;
            let pos3value = boxes[pattern[2]].innerText;
            if(pos1value != "" && pos2value != "" && pos3value != "")
            {
               
                if(pos1value == pos2value && pos2value == pos3value)
                {
                   
                    showwinner(pos1value);
                    return;
                }
               
                
            }
        }
         if(count === 9)
                {
                     Draw();
                }
    }
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

