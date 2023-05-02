//function ToggleMenu() {
//    const x = document.getElementById("#menu-list");
//    if (x.style.display === "block") {
//        x.style.display = "none";
//    } else {
//        x.style.display = "block";
//    }
//}

function toggleMenuIcon(NavList, NacIcon) {
    if (NavList.style.display === "block") {
        NavList.style.display = "none";
    } else {
        NavList.style.display = "block";
    }
}

//const menu_icon_button = document.querySelector("#menu-icon");

//menu_icon_button.onclick = () => {
//    ToggleMenu();
//};

// Only begin executing JavaScript after all DOM content is loaded
window.addEventListener("DOMContentLoaded", function () {
    // Get hamburger menu btns
    const hamburger1 = document.querySelector('.menu-icon');
    const list = document.querySelector('.menu');
    
//    if (hamburger1.style.display === "block") {
//        console.log("showing list");
//        list.style.display = "none";
//    } else {
//        list.style.display = "block";
//        console.log(hamburger1.style.display)
//        console.log("hiding list");
//    }

    // Toggle menu when clicked
    hamburger1.addEventListener('click', function() {
        const navIcon = document.querySelector('.menu-icon');
        const nav = document.querySelector('.menu');
        toggleMenuIcon(nav, navIcon);
    });
    
    const list_item = document.querySelectorAll(".menu ul li");
    
//    console.log(list_item);
    
    list_item.forEach(el => el.addEventListener('click', event => {
        console.log("Item clicked");
        console.log(hamburger1.style.display)
        if (list.style.display === "block") {
            list.style.display = "none";
        }
    }));
    
//    list_item.addEventListener('click', function() {
//        console.log("Item clicked");
//        if (list_item.style.display === "block") {
//            list_item.style.display = "none";
//        }
//    });
    
});