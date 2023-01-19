"use strict";
// VARIABLES
// MENU
let icon_user = document.getElementById('icon_user');
let icon_menu = document.getElementById('icon_menu');
let user_menu = document.getElementById('user_menu');
// HABITACIONES
let lowcost_rooms = document.getElementsByName('LowCost');
let standard_rooms = document.getElementsByName('Normal');
let luxury_rooms = document.getElementsByName('Vip');
let suite_rooms = document.getElementsByName('Suite');
// SETTINGS
// MENU
icon_menu.style.display = 'none';
icon_menu.style.visibility = 'hidden';
user_menu.style.display = 'none';
user_menu.style.visibility = 'hidden';
// FUNCTIONS
// MENU
/**
 * Funcion para mostrar u ocultar el menu de usuario y cambiar su icono
 * @param func variable booleana para mostrar u ocultar el menu
 */
function dropdown(func) {
    if (func) {
        // Hacemos visible el icono de menu
        icon_menu.style.display = 'block';
        icon_menu.style.visibility = 'visible';
        // Hacemos visible el menu de usuario
        user_menu.style.display = 'flex';
        user_menu.style.visibility = 'visible';
        // Ocultamos el icono de usuario
        icon_user.style.display = 'none';
        icon_user.style.visibility = 'hidden';
    }
    else {
        // Ocultamos el icono de usuario
        icon_menu.style.display = 'none';
        icon_menu.style.visibility = 'hidden';
        // Ocultamos el menu de usuario
        user_menu.style.display = 'none';
        user_menu.style.visibility = 'hidden';
        // Hacemos visible el icono de menu
        icon_user.style.display = 'block';
        icon_user.style.visibility = 'visible';
    }
}
/**
 * Funcion que cambia el lenguahe de la pagina
 * @param lenguage variable string para cambiar el lenguage de la pagina
 * ! Error a la hora de desplegar el menu
 * ? No estoy seguro de que sea por la funcion del dropdown
 */
function change_lenguage(page) {
    window.location.href = page;
}
function show_list(room_class) {
    switch (room_class) {
        case 'LowCost':
            for (let i = 0; i < lowcost_rooms.length; i++) {
                lowcost_rooms[i].style.display = 'block';
                lowcost_rooms[i].style.visibility = 'visible';
                standard_rooms[i].style.display = 'none';
                standard_rooms[i].style.visibility = 'hidden';
                luxury_rooms[i].style.display = 'none';
                luxury_rooms[i].style.visibility = 'hidden';
                suite_rooms[i].style.display = 'none';
                suite_rooms[i].style.visibility = 'hidden';
            }
            break;
        case 'Normal':
            for (let i = 0; i < standard_rooms.length; i++) {
                lowcost_rooms[i].style.display = 'none';
                lowcost_rooms[i].style.visibility = 'hidden';
                standard_rooms[i].style.display = 'block';
                standard_rooms[i].style.visibility = 'visible';
                luxury_rooms[i].style.display = 'none';
                luxury_rooms[i].style.visibility = 'hidden';
                suite_rooms[i].style.display = 'none';
                suite_rooms[i].style.visibility = 'hidden';
            }
            break;
        case 'Vip':
            for (let i = 0; i < luxury_rooms.length; i++) {
                lowcost_rooms[i].style.display = 'none';
                lowcost_rooms[i].style.visibility = 'hidden';
                standard_rooms[i].style.display = 'none';
                standard_rooms[i].style.visibility = 'hidden';
                luxury_rooms[i].style.display = 'block';
                luxury_rooms[i].style.visibility = 'visible';
                suite_rooms[i].style.display = 'none';
                suite_rooms[i].style.visibility = 'hidden';
            }
            break;
        case 'Suite':
            for (let i = 0; i < suite_rooms.length; i++) {
                lowcost_rooms[i].style.display = 'none';
                lowcost_rooms[i].style.visibility = 'hidden';
                standard_rooms[i].style.display = 'none';
                standard_rooms[i].style.visibility = 'hidden';
                luxury_rooms[i].style.display = 'none';
                luxury_rooms[i].style.visibility = 'hidden';
                suite_rooms[i].style.display = 'block';
                suite_rooms[i].style.visibility = 'visible';
            }
            break;
    }
}
