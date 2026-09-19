function showHats() {
    const hatMenu = document.getElementById("hat-menu");
    const topMenu = document.getElementById("top-menu");
    const bottomMenu = document.getElementById("bottom-menu");
    const dressesMenu = document.getElementById("dresses-menu");
    const shoesMenu = document.getElementById("shoes-menu");
    const accessoryMenu = document.getElementById("accessory-menu");

    topMenu.style.display = "none";
    bottomMenu.style.display = "none";
    dressesMenu.style.display = "none";
    shoesMenu.style.display = "none";
    accessoryMenu.style.display = "none";

    if (hatMenu.style.display === "flex") {
        hatMenu.style.display = "none";
    } else {
        hatMenu.style.display = "grid";;
    }
}


function showTops() {
    const topMenu = document.getElementById("top-menu");
    const hatMenu = document.getElementById("hat-menu");
    const bottomMenu = document.getElementById("bottom-menu");
    const dressesMenu = document.getElementById("dresses-menu");
    const shoesMenu = document.getElementById("shoes-menu");
    const accessoryMenu = document.getElementById("accessory-menu");

    hatMenu.style.display = "none";
    bottomMenu.style.display = "none";
    dressesMenu.style.display = "none";
    shoesMenu.style.display = "none";
    accessoryMenu.style.display = "none";

    if (topMenu.style.display === "flex") {
        topMenu.style.display = "none";
    } else {
        topMenu.style.display = "grid";
    }
}

function showBottoms() {
    const bottomMenu = document.getElementById("bottom-menu");
    const hatMenu = document.getElementById("hat-menu");
    const topMenu = document.getElementById("top-menu")
    const dressesMenu = document.getElementById("dresses-menu");
    const shoesMenu = document.getElementById("shoes-menu");
    const accessoryMenu = document.getElementById("accessory-menu");

    hatMenu.style.display = "none";
    topMenu.style.display = "none";
    dressesMenu.style.display = "none";
    shoesMenu.style.display = "none";
    accessoryMenu.style.display = "none";

    if (bottomMenu.style.display === "flex") {
        bottomMenu.style.display = "none";
    } else {
        bottomMenu.style.display = "grid";
    }
}

function showDresses() {
    const dressesMenu = document.getElementById("dresses-menu");
    const hatMenu = document.getElementById("hat-menu");
    const topMenu = document.getElementById("top-menu");
    const bottomMenu = document.getElementById("bottom-menu");
    const shoesMenu = document.getElementById("shoes-menu");
    const accessoryMenu = document.getElementById("accessory-menu");

    hatMenu.style.display = "none";
    topMenu.style.display = "none";
    bottomMenu.style.display = "none";
    shoesMenu.style.display = "none";
    accessoryMenu.style.display = "none";

    if (dressesMenu.style.display === "flex") {
        dressesMenu.style.display = "none";
    } else {
        dressesMenu.style.display = "grid";
    }
}

function showShoes() {
    const shoesMenu = document.getElementById("shoes-menu");
    const hatMenu = document.getElementById("hat-menu");
    const topMenu = document.getElementById("top-menu");
    const bottomMenu = document.getElementById("bottom-menu");
    const dressesMenu = document.getElementById("dresses-menu");
    const accessoryMenu = document.getElementById("accessory-menu");

    hatMenu.style.display = "none";
    topMenu.style.display = "none";
    bottomMenu.style.display = "none";
    dressesMenu.style.display = "none";
    accessoryMenu.style.display = "none";  

    if (shoesMenu.style.display === "flex") {
        shoesMenu.style.display = "none";
    } else {
        shoesMenu.style.display = "grid";
    }   
}

function showAccessories() {
    const accessoryMenu = document.getElementById("accessory-menu");
    const hatMenu = document.getElementById("hat-menu");
    const topMenu = document.getElementById("top-menu");
    const bottomMenu = document.getElementById("bottom-menu");
    const dressesMenu = document.getElementById("dresses-menu");
    const shoesMenu = document.getElementById("shoes-menu");

    hatMenu.style.display = "none";
    topMenu.style.display = "none";
    bottomMenu.style.display = "none";
    dressesMenu.style.display = "none";
    shoesMenu.style.display = "none";

    if (accessoryMenu.style.display === "flex") {
        accessoryMenu.style.display = "none";
    } else {
        accessoryMenu.style.display = "grid";
    }   
}
    
function wearHat(hatImage) {
    const hat = document.getElementById("hat");

    if (hat.dataset.current === hatImage) {
        hat.style.display = "none";
        hat.dataset.current = "";
    } else {
        hat.src = hatImage;
        hat.style.display = "block";
        hat.dataset.current = hatImage;
    }
}


function wearTop(topImage) {
    const top = document.getElementById("top");

    if (top.dataset.current === topImage) {
        top.style.display = "none";
        top.dataset.current = "";
    } else {
        top.src = topImage;
        top.style.display = "block";
        top.dataset.current = topImage;
    }
}

function wearBottom(bottomImage) {
    const bottom = document.getElementById("bottom");
    if (bottom.dataset.current === bottomImage) {
        bottom.style.display = "none";
        bottom.dataset.current = "";
    } else {
        bottom.src = bottomImage;
        bottom.style.display = "block";
        bottom.dataset.current = bottomImage;
    }   
}

function wearDress(dressImage) {
    const dress = document.getElementById("dresses");
    if (dress.dataset.current === dressImage) {
        dress.style.display = "none";
        dress.dataset.current = "";
    } else {
        dress.src = dressImage;
        dress.style.display = "block";
        dress.dataset.current = dressImage;
    } 
}

function wearShoes(shoesImage) {
    const shoes = document.getElementById("shoes");
    if (shoes.dataset.current === shoesImage) {
        shoes.style.display = "none"; 
        shoes.dataset.current = "";
    } else {
        shoes.src = shoesImage;
        shoes.style.display = "block";
        shoes.dataset.current = shoesImage;
    }
}

function wearAccessory(accessoryImage) {
    const accessoriesWorn = document.getElementById("accessories-worn");

    const existing = accessoriesWorn.querySelector(
        `img[data-accessory="${accessoryImage}"]`
    );

    if (existing) {
        existing.remove();
        return;
    }

    const accessory = document.createElement("img");
    accessory.src = accessoryImage;
    accessory.dataset.accessory = accessoryImage;
    accessory.classList.add("worn-accessory");

    accessoriesWorn.appendChild(accessory);
}


function saveDress() {
    const area = document.querySelector(".character-area");

    html2canvas(area, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#00C9FF",

        onclone: function (doc) {
            const cloneArea = doc.querySelector(".character-area");

            // เอาโลโก้ออก
            const logo = cloneArea.querySelector("h1");
            if (logo) {
                logo.style.display = "none";
            }
        }
    }).then(function (canvas) {

        const finalCanvas = document.createElement("canvas");
        finalCanvas.width = 1080;
        finalCanvas.height = 1920;

        const ctx = finalCanvas.getContext("2d");

        // พื้นหลังฟ้า
        ctx.fillStyle = "#b4efff";
        ctx.fillRect(0, 0, 1080, 1920);

        // รักษาสัดส่วนภาพเดิม 100%
        const scale = Math.min(
            1080 / canvas.width,
            1920 / canvas.height
        );

        const newWidth = 1200;
        const newHeight = 1200

        ctx.drawImage(
         canvas,
        (1080 - newWidth) / 2,
        (1920 - newHeight) / 2,
         newWidth,
        newHeight
);
        const link = document.createElement("a");
        link.download = "Dress-for-FuFu.png";
        link.href = finalCanvas.toDataURL("image/png");
        link.click();
    });
}


