const messages = [
  "Hmm… you clicked “No.” 😅 But I know your heart’s still weighing a secret YES!",
  "No is just the warm‑up. Are you saving that ‘Yes’ for something special?",
  "Every time you say ‘No,’ I smile—even that means you’re listening. 💖",
  "No? Oh, you’re just playing hard to get—classic move! 😜",
  "Even a ‘No’ from you sounds sweet. I’ll wait. Maybe you’ll change your mind?",
  "My heart skipped when you hit ‘No’—but it’s still beating for your YES.",
  "If ‘No’ were final, I’d stop. But since it’s not… will you consider YES?",
  "You clicked “No,” yet here we are. Could it be you’re curious about ‘Yes’?",
  "I may juggle buttons, but my heart never wavers. Your ‘Yes’ is worth every bounce.",
  "Behind every ‘No’ there’s a chance—for allowing me to try again. 💫"
];
console.log(messages[0]);

let no = document.getElementById("no");
let yes = document.getElementById("yes");
let title =document.getElementById("title");
no.addEventListener('click',async(event)=>{
    let a=messages.length-1
    let rendomIndex = Math.round(Math.random() * a);
    title.innerText = messages[rendomIndex];
    no.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
    no.style.transition = "all 0.5s ease-in-out";

// no.style.position = "relative";
// no.style.top = Math.random() * 80 + "%";
// no.style.left = Math.random() * 80 + "%";
  
  let responce = await fetch('gif.json');
  let data = await responce.json();
  let gif = document.getElementById("gif");
  // console.log(date[0].gif);
  gif_length = data.length-1;
  gif.src= data[Math.floor(Math.random() * gif_length)].gif;
    console.log(gif.src);
})
yes.addEventListener('click',()=>{
    title.innerText = "Yay! I knew you would say yes! 🥰";
    no.style.display = "none";
    yes.style.display = "none";
    let gif = document.getElementById("gif");
    gif.src = "https://media.tenor.com/qhDi2eEsxHEAAAAx/baby-kid.webp";
    gif.style.width = "200px";
    gif.style.height = "200px";
    gif.style.objectFit = "cover";
    gif.style.borderRadius = "0.25rem";

    confetti({
  particleCount: 500,
  spread: 200,
  origin: { x: 0, y:0.9 },
});
confetti({
  particleCount: 500,
  spread: 200,
  origin: { x:1,y: 0.9 },
});
});