// VARIABLES
    // MENU
        let icon_user:any = document.getElementById('icon_user');
        let icon_menu:any = document.getElementById('icon_menu');
        let user_menu:any = document.getElementById('user_menu');



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
        function dropdown( func:boolean ) {
            if ( func ) {
                // Hacemos visible el icono de menu
                icon_menu.style.display = 'block';
                icon_menu.style.visibility = 'visible';
                
                // Hacemos visible el menu de usuario
                user_menu.style.display = 'flex';
                user_menu.style.visibility = 'visible';

                // Ocultamos el icono de usuario
                icon_user.style.display = 'none';
                icon_user.style.visibility = 'hidden';
            } else {
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
        
        function change_lenguage( page:string ) {
            window.location.href = page;
        }


        function hello() {
            console.log('Hello');
        }