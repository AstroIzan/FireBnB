"use strict";
// VARIABLES
// MENU
let icon_user = document.getElementById('icon_user');
let icon_menu = document.getElementById('icon_menu');
let user_menu = document.getElementById('user_menu');
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
function change_lenguage(lenguage) {
    // En funcion del lenguage seleccionado, cambiamos la pagina
    switch (lenguage) {
        case 'es':
            // Cambiamos el lenguage y volvemos a mostrar el menu
            window.location.href = '../html/index_es.html';
            /! dropdown(true); !/;
            break;
        case 'en':
            // Cambiamos el lenguage y volvemos a mostrar el menu
            window.location.href = '../html/index.html';
            dropdown(true);
            break;
        case 'cat':
            // Cambiamos el lenguage y volvemos a mostrar el menu
            window.location.href = '../html/index_cat.html';
            dropdown(true);
            break;
        default:
            // En caso de error lo mostramos por consola
            console.log('|ERROR| -- Lenguage not found');
            break;
    }
}