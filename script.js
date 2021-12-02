let main=document.getElementsByClassName("table")[0]
let u1=document.createElement("ul")
u1.classList.add("user-1")
u1.style.marginLeft="-3"

function ajax(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var resp=JSON.parse(this.response)
            for(let i=0;i<20;i++){
                // console.log(resp[i])
                         let l=document.createElement("li")
                         let p=document.createElement("p")
                         let div=document.createElement("div")
                         l.style.display="flex"
                         l.style.marginLeft="-2.5rem"
                         
                         l.style.alignItems="center"
                         l.style.flexDirection="row"
                         l.style.marginBottom="2rem"
                         l.style.justifyContent="space-between"
                         l.style.border="2px solid purple"
                        
                         let checkbox=document.createElement("input")
                         checkbox.setAttribute("type","checkbox")
                         checkbox.classList.add("chkbox")
                        resp[i]["completed"]?checkbox.checked=true:checkbox.checked=false      
                        p.innerHTML=`<b>ID:</b> ${resp[i]["id"]} <br> <b>Title:</b> ${resp[i]["title"]}`
                        p.style.textAlign="left"
                        let markTxt=document.createTextNode("Mark as Completed: ")
                         div.appendChild(markTxt)
                         div.appendChild(checkbox)                          
                         l.appendChild(p)
                         l.appendChild(div)
                         u1.appendChild(l)  
                    }
                    main.appendChild(u1)
                }
            }
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true)
    xhr.send()
}

//ajax is fetched but not displayed initially for button to have a trigger display function 
var btn=document.getElementById("btn")
var shown=false
ajax()
u1.style.display="none";

btn.addEventListener("click",()=>{
    if(shown){
    shown=false
    u1.style.display="none"
    btn.innerText="Fetch Tasks Data"
    btn.style.background="purple"
    console.log(shown) 
}
else{
    u1.style.display="block"
    shown=true
    btn.innerText="Hide Table"
    btn.style.background="red"
    console.log(shown)
}

var checkboxLimit = 5;
var numberTickedBoxes =  document.querySelectorAll("input[type=checkbox]:checked").length;
let text=document.getElementById("text")
text.innerHTML=`${numberTickedBoxes}`
//       if(numberTickedBoxes>=checkboxLimit){
//           setTimeout(()=>{alert(""+numberTickedBoxes+" to-Do's in this list are already completed by default, modify to get final output")},500)  
//       }
const promise=new Promise(function(resolve,reject){
    document.querySelectorAll("input[type=checkbox]").forEach(
  input => input.addEventListener('change', function(event) {
    let newTicked=document.querySelectorAll("input[type=checkbox]:checked").length;
    // let completed=document.getElementById("completed")
    
    text.innerHTML=`${newTicked}`
    
    console.log(checkboxLimit)
  
    if(checkboxLimit == newTicked){
        console.log(222222)
        resolve()
    }
   
  })
);

})   
promise.then(()=>{alert("Congrats, 5 tasks have been successfully completed");})      
})
















