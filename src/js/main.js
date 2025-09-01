const Ani_button= document.getElementById("Ani_button")
    Ani_button.addEventListener("click", () => { console.log("動畫按鈕測試") });

//#region  使用描述
const Discripts= document.getElementById("Discripts")
Discripts.addEventListener("click",()=>{Discripts.style.display="none"; console.log("關閉操作描述")})
Discripts.addEventListener("touchstart",()=>{Discripts.style.display="none"; console.log("關閉操作描述")})
window.addEventListener("targetfound-global-event",()=>{Discripts.style.display="block"})
//#endregion


//#region 網格資訊區

const info_button= document.getElementById("info_button")
const info_Panel= document.getElementById("info_Panel")
const info_1= document.getElementById("info_1")
const info_2= document.getElementById("info_2")
const info_3= document.getElementById("info_3")
const info_4= document.getElementById("info_4")
const info_5= document.getElementById("info_5")
const info_6= document.getElementById("info_6")

info_button.addEventListener("click",()=>{info_Panel.style.display="none"; console.log("關閉info_Panel")})
info_button.addEventListener("click",()=>{info_1.style.display="none"; console.log("關閉物件資訊_info_1")})
info_button.addEventListener("click",()=>{info_2.style.display="none"; console.log("關閉物件資訊_info_2")})
info_button.addEventListener("click",()=>{info_3.style.display="none"; console.log("關閉物件資訊_info_3")})
info_button.addEventListener("click",()=>{info_4.style.display="none"; console.log("關閉物件資訊_info_4")})
info_button.addEventListener("click",()=>{info_5.style.display="none"; console.log("關閉物件資訊_info_5")})
info_button.addEventListener("click",()=>{info_6.style.display="none"; console.log("關閉物件資訊_info_6")})
//#endregion