(function(){
let settings=[];
let selected=0;
let dragged=null;

const editor=document.getElementById("mediaEditor");
const gallery=document.getElementById("editorGallery");
const preview=document.getElementById("preview");
const selectedName=document.getElementById("selectedName");
const controls={
  x:document.getElementById("xRange"),
  y:document.getElementById("yRange"),
  zoom:document.getElementById("zoomRange")
};

const loginDialog=document.getElementById("adminLogin");
const loginForm=document.getElementById("adminLoginForm");
const passwordInput=document.getElementById("adminPassword");
const loginError=document.getElementById("adminLoginError");
const passwordHash="a1238fe5fb3c5596a4b3d87947e498d3267245ec742bda43960a8e851afd466c";

async function hashPassword(value){
  const data=new TextEncoder().encode(value);
  const digest=await crypto.subtle.digest("SHA-256",data);
  return Array.from(new Uint8Array(digest)).map(byte=>byte.toString(16).padStart(2,"0")).join("");
}

function openEditor(){
  loginDialog.close();
  passwordInput.value="";
  loginError.hidden=true;
  editor.hidden=false;
  editor.scrollIntoView({behavior:"smooth",block:"start"});
}

document.getElementById("openEditor").addEventListener("click",()=>{
  loginError.hidden=true;
  passwordInput.value="";
  loginDialog.showModal();
  setTimeout(()=>passwordInput.focus(),50);
});
document.getElementById("closeLogin").addEventListener("click",()=>loginDialog.close());
loginDialog.addEventListener("click",event=>{if(event.target===loginDialog)loginDialog.close()});
loginForm.addEventListener("submit",async event=>{
  event.preventDefault();
  if(await hashPassword(passwordInput.value)===passwordHash){
    openEditor();
  }else{
    loginError.hidden=false;
    passwordInput.select();
  }
});
document.getElementById("closeEditor").addEventListener("click",()=>{
  editor.hidden=true;
  document.querySelector(".footer").scrollIntoView({behavior:"smooth",block:"start"});
});

function defaultSettings(){
  return Array.from({length:9},(_,i)=>({file:`gallery-${String(i+1).padStart(2,"0")}.webp`,x:50,y:50,zoom:115}));
}

function validSettings(value){
  return Array.isArray(value)&&value.length>0&&value.every(item=>typeof item.file==="string"&&Number.isFinite(Number(item.x))&&Number.isFinite(Number(item.y))&&Number.isFinite(Number(item.zoom)));
}

function style(element,item){
  element.style.setProperty("--x",`${item.x}%`);
  element.style.setProperty("--y",`${item.y}%`);
  element.style.setProperty("--zoom",item.zoom/100);
}

function render(){
  gallery.innerHTML="";
  settings.forEach((item,index)=>{
    const card=document.createElement("button");
    card.className=`photo-card${index===selected?" selected":""}`;
    card.draggable=true;
    card.innerHTML=`<img src="./assets/${item.file}" alt=""><span>${index+1}</span>`;
    style(card,item);
    card.addEventListener("click",()=>{selected=index;render()});
    card.addEventListener("dragstart",()=>{dragged=index});
    card.addEventListener("dragover",event=>event.preventDefault());
    card.addEventListener("drop",event=>{
      event.preventDefault();
      if(dragged===null||dragged===index)return;
      const [moved]=settings.splice(dragged,1);
      settings.splice(index,0,moved);
      selected=index;dragged=null;render();
    });
    gallery.append(card);
  });
  updateControls();
}

function updateControls(){
  const item=settings[selected];
  if(!item)return;
  preview.src=`./assets/${item.file}`;
  preview.classList.add("ready");
  style(preview,item);
  selectedName.textContent=item.file;
  Object.entries(controls).forEach(([key,input])=>{
    input.value=item[key];
    document.getElementById(`${key}Value`).value=`${item[key]}%`;
  });
}

function updateValue(key,value){
  if(!settings[selected])return;
  settings[selected][key]=Math.max(Number(controls[key].min),Math.min(Number(controls[key].max),Number(value)));
  render();
}

Object.entries(controls).forEach(([key,input])=>input.addEventListener("input",()=>updateValue(key,input.value)));
document.querySelectorAll("[data-nudge]").forEach(button=>button.addEventListener("click",()=>{
  const command=button.dataset.nudge;
  if(command==="reset"){
    settings[selected]={...settings[selected],x:50,y:50,zoom:115};
  }else{
    const [key,amount]=command.split(":");
    settings[selected][key]=Math.max(0,Math.min(100,settings[selected][key]+Number(amount)));
  }
  render();
}));

document.getElementById("resetAll").addEventListener("click",()=>{settings=defaultSettings();selected=0;render()});
document.getElementById("downloadButton").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(settings,null,2)],{type:"application/json"});
  const link=document.createElement("a");
  link.href=URL.createObjectURL(blob);
  link.download="gallery-settings.json";
  link.click();
  URL.revokeObjectURL(link.href);
});
document.getElementById("importButton").addEventListener("click",()=>document.getElementById("importFile").click());
document.getElementById("importFile").addEventListener("change",async event=>{
  const file=event.target.files[0];
  if(!file)return;
  try{
    const imported=JSON.parse(await file.text());
    if(!validSettings(imported))throw new Error();
    settings=imported.map(item=>({file:item.file,x:Number(item.x),y:Number(item.y),zoom:Number(item.zoom)}));
    selected=0;render();
  }catch{
    alert("Не вдалося прочитати файл налаштувань.");
  }
});

fetch(`./gallery-settings.json?v=${Date.now()}`,{cache:"no-store"})
  .then(response=>response.ok?response.json():Promise.reject())
  .then(data=>{settings=validSettings(data)?data:defaultSettings();render()})
  .catch(()=>{settings=defaultSettings();render()});
})();
