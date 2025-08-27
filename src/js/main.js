
//#region  使用描述
const Discripts= document.getElementById("Discripts")
Discripts.addEventListener("click",()=>{Discripts.style.display="none"; console.log("關閉操作描述")})
Discripts.addEventListener("touchstart",()=>{Discripts.style.display="none"; console.log("關閉操作描述")})
window.addEventListener("targetfound-global-event",()=>{Discripts.style.display="block"})
//#endregion



//#region 網格資訊區

const info_1= document.getElementById("info_1")
info_1.addEventListener("click",()=>{info_1.style.display="none"; console.log("關閉物件資訊_info_1")})
info_1.addEventListener("touchstart",()=>{info_1.style.display="none"; console.log("關閉物件資訊_info_1")})


const info_2= document.getElementById("info_2")
info_2.addEventListener("click",()=>{info_2.style.display="none"; console.log("關閉物件資訊_info_2")})
info_2.addEventListener("touchstart",()=>{info_2.style.display="none"; console.log("關閉物件資訊_info_2")})
//#endregion
