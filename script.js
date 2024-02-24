 
 let label = document.getElementById("label1");
let count = 0;
 label.style.color="white";
function inc(){
      console.log("+1")
       count++;
      label.textContent=count;
  if(count > 0)
  {
    label.style.color="black";
  }

     }
function dec(){
  console.log("-1")
   count--;
  label.textContent=count;
  if(count < 0)
  {
    label.style.color="red";
  }
}
function re(){
  console.log("CLEAR")
   count= 0;
  label.textContent=count;
  if(count == 0)
  {
    label.style.color="white";
  }
}
