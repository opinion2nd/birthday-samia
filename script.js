const music = document.getElementById("music");

function unlock(){
  const ans = document.getElementById("ans").value;
  if(ans == 7){
    document.getElementById("puzzle").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
    music.play();
    floating();
  }else{
    alert("❌ Wrong! Try again");
  }
}

function goCake(){
  window.location.href = "cake.html";
}

function floating(){
  const items = ["🌸","🐶","🐱","🐰","🐻"];
  setInterval(()=>{
    const f = document.createElement("div");
    f.className = "float";
    f.innerText = items[Math.floor(Math.random()*items.length)];
    f.style.left = Math.random()*100+"vw";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),7000);
  },600);
}