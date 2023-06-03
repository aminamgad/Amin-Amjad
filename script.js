const showModel = document.querySelector(".show-model");
const bottomSheet = document.querySelector(".bottom_sheet");
const sheetOverlay = document.querySelector(".sheet-overlay");
const sheetContent = document.querySelector(".content");
const dragIcon = document.querySelector(".dtag-icon");
// const icon = document.querySelector(".fa-moon");
// const buttonI = document.querySelector("button.i");

let isDragging = false , startY , startHeight;

const showBottomsheet = () => {
    console.log("showed");
    bottomSheet.classList.add("show");
    updateSheetHeight(50)
}
const hideBottomsheet = () => {
    console.log("removed");
    bottomSheet.classList.remove("show");
}
const updateSheetHeight = (height) => {
    sheetContent.style.height =`${height}vh`;
    bottomSheet.classList.toggle("fullscreen" , height === 100)
}
const dragstart = (e) => {
    isDragging=true;
    startY = e.pageY;
    startHeight=parseInt(sheetContent.style.height);
    bottomSheet.classList.add("dragging")
}
const dragStop = () => {
    isDragging=false;
    bottomSheet.classList.remove("dragging");
    const shhetHeight = parseInt(sheetContent.style.height);
    shhetHeight < 25 ? hideBottomsheet() : shhetHeight > 75 ? updateSheetHeight(100) : updateSheetHeight(50);
}
const dragging = (e) => {
    if(!isDragging)return;
    const delta = startY - e.pageY;
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateSheetHeight(newHeight)
}
dragIcon.addEventListener("mousedown" ,dragstart )
document.addEventListener("mousemove" ,dragging )
document.addEventListener("mouseup" ,dragStop )


showModel.addEventListener("click" , showBottomsheet)
sheetOverlay.addEventListener("click" , hideBottomsheet)

// const darkMode = () => {
//     // document.body.style.background="black";
//     icon.classList.add("active");
//     // buttonI.style.background="black";
//     // showModel.style.background="#fff";
//     // showModel.style.fontWeight="bold";
//     // showModel.style.color="#4A98F7";
//     // sheetContent.style.background="#333";
//     // sheetContent.style.color="aqua";

//     // const lightMode = () => {
//     //     icon.classList.remove("active");
//     //     document.body.style.background="#E3F2FD";
//     //     buttonI.style.background="#E3F2FD";
//     //     showModel.style.background="#4A98F7";
//     //     showModel.style.fontWeight="bold";
//     //     showModel.style.color="#fff";
//     //     sheetContent.style.background="#fff";
//     //     sheetContent.style.color="#000";   
//     //     icon.addEventListener("click" , darkMode) 
//     // }
//     //   icon.addEventListener("click" , lightMode)


// }
// icon.addEventListener("click" , darkMode);