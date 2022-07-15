const desktopSection = document.querySelector("#desktopSection");
const mobileSection = document.querySelector("#mobileSection");
let deviceType = screen.width;

console.log(deviceType);


chooseSection(deviceType);

function chooseSection(deviceType){
    detectDevice(deviceType);
    if(deviceType == "Desktop"){
        desktopSection.style.display = "initial";
    } else{
        desktopSection.style.display = "hidden";
    }
}

function detectDevice(deviceType){
    deviceType <= '375' ? deviceType = "Mobile" : deviceType = "Desktop";
}