const canvas = document.querySelector('canvas'),   
      toolBtn = document.querySelectorAll(".tool"),
      ctx = canvas .getContext("2d")

let isDrawing = false ,
    brushWidth=5

window.addEventListener("load",()=>{
  //setting canvas width/height ..offsetwidth /height returns viewable width/height of an element
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const startDraw = ()=>{
  isDrawing = true
  ctx.beginPath();// creating new path to drow 
  ctx.lineWidth = brushWidth  //passing brush size as line width
}

const drawing = (e) =>{
  if(!isDrawing) return //if isDrawing is false return from here
    ctx.lineTo(e.offsetX , e.offsetY)// creating line according to the mouse pointer
    ctx.stroke();//drawing /filling line with color 
}
const stopDraw=()=>{
  isDrawing=false
}


toolBtn.forEach((btn)=>{
  btn.addEventListener("click",()=>{ //adding click event to all tool option 
    // removing active class from the previous and adding on current clicked option
    document.querySelector(".options .active ").classList.remove("active")
    btn.classList.add("active")

    console.log(btn.id)
  })
})


canvas.addEventListener("mousedown" , startDraw);
canvas.addEventListener("mousemove" , drawing);
canvas.addEventListener("mouseup" , stopDraw);
