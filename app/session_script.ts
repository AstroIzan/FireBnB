// VARIABLES
    // CONTROL DE ERRORES
        let n_empty_signup = 0;
        let passwords_match = true;
    // LOG-IN
        let iUserLogin:any = document.getElementById("iUserLogin");
        let mUserLogin:any = document.getElementById("mUserLogin");
        let mUserLoginEmpty:any = document.getElementById("mUserLoginEmpty");
        let iPassLogin:any = document.getElementById("iPassLogin");
        let mPassLogin:any = document.getElementById("mPassLogin");
        let mPassLoginEmpty:any = document.getElementById("mPassLoginEmpty");

    // SIGN-UP
        let iUserSignup:any = document.getElementById("iUserSignup");
        let mUserSignup:any = document.getElementById("mUserSignup");
        let mUserSignupEmpty:any = document.getElementById("mUserSignupEmpty");
        let iPassSignup1:any = document.getElementById("iPassSignup1");
        let mPassSignupEmpty1:any = document.getElementById("mPassSignupEmpty1");
        let iPassSignup2:any = document.getElementById("iPassSignup2");
        let mPassSignup:any = document.getElementById("mPassSignup");
        let mPassSignupEmpty2:any = document.getElementById("mPassSignupEmpty2");
        let mSignupError:any = document.getElementById("mSignupError");

    // DISPLAY
        let login:any = document.getElementById("login");
        let signup:any = document.getElementById("signup");

// SETTINGS
    // DISPLAYS
        login.style.display = 'flex';
        login.style.visibility = 'visible';
        signup.style.display = 'none';
        signup.style.visibility = 'hidden';

    // SPANS
        // LOGIN
            // USERNAME
                mUserLogin.style.display = 'none';
                mUserLogin.style.visibility = 'hidden';
                mUserLoginEmpty.style.display = 'none';
                mUserLoginEmpty.style.visibility = 'hidden';
            // PASSWORD
                mPassLogin.style.display = 'none';
                mPassLogin.style.visibility = 'hidden';
                mPassLoginEmpty.style.display = 'none';
                mPassLoginEmpty.style.visibility = 'hidden';
        
        // SIGNUP
            // USERNAME
                mUserSignup.style.display = 'none';
                mUserSignup.style.visibility = 'hidden';
                mUserSignupEmpty.style.display = 'none';
                mUserSignupEmpty.style.visibility = 'hidden';
            // PASSWORD 1
                mPassSignupEmpty1.style.display = 'none';
                mPassSignupEmpty1.style.visibility = 'hidden';
            // PASSWORD 2
                mPassSignupEmpty2.style.display = 'none';
                mPassSignupEmpty2.style.visibility = 'hidden';
            // PASSWORD NOT MATCH
                mPassSignup.style.display = 'none';
                mPassSignup.style.visibility = 'hidden';
            // ERROR
                mSignupError.style.display = 'none';
                mSignupError.style.visibility = 'hidden';

// FUNCTIONS
    /**
     * Funcion para cambiar entre el display de login y el de signup
     * @param func variable booleana para saber que display mostrar
     */
    function change_sesion( func:boolean ) {
        // Comprobamos que display mostrar
        if ( func ) {
            // Ocultamos el display de login
            login.style.display = 'none';
            login.style.visibility = 'hidden';
            // Hacemos visible el display de signup
            signup.style.display = 'flex';
            signup.style.visibility = 'visible';
        } else {
            // Hacemos visible el display de login
            login.style.display = 'flex';
            login.style.visibility = 'visible';
            // Ocultamos el display de signup
            signup.style.display = 'none';
            signup.style.visibility = 'hidden';
        }
    }

    /**
     * Funcion para registrar un usuario
     * @throws error si los campos estan vacios
     * @throws error si las contraseñas no coinciden
     * @throws error si el usuario ya existe
     * @throws error si detecta que algo no ha ido bien
     */
    function register_user() {
        // En caso de que los campos esten vacios mostramos el mensaje de error correspondiente
            if ( iUserSignup.value == '' ) {
                n_empty_signup++;
                mUserSignupEmpty.style.display = 'block';
                mUserSignupEmpty.style.visibility = 'visible'; 
            } else { 
                mUserSignupEmpty.style.display = 'none';
                mUserSignupEmpty.style.visibility = 'hidden'; }

            if ( iPassSignup1.value == '' ) {
                n_empty_signup++;
                mPassSignupEmpty1.style.display = 'block';
                mPassSignupEmpty1.style.visibility = 'visible'; 
            } else {
                mPassSignupEmpty1.style.display = 'none';
                mPassSignupEmpty1.style.visibility = 'hidden'; }

            if ( iPassSignup2.value == '' ) {
                n_empty_signup++;
                mPassSignupEmpty2.style.display = 'block';
                mPassSignupEmpty2.style.visibility = 'visible'; 
            } else {
                mPassSignupEmpty2.style.display = 'none';
                mPassSignupEmpty2.style.visibility = 'hidden'; }

        // Comprobamos que las contraseñas coincidan
            if ( iPassSignup1.value != iPassSignup2.value ) {
                passwords_match = false;
                mPassSignup.style.display = 'block';
                mPassSignup.style.visibility = 'visible'; 
            } else {
                passwords_match = true;
                mPassSignup.style.display = 'none';
                mPassSignup.style.visibility = 'hidden'; }

        // Si no hay campos vacios y las contraseñas coinciden
            if ( n_empty_signup == 0 && passwords_match == true ) {
                // Ocultamos los mensajes de error
                    mUserSignupEmpty.style.display = 'none';
                    mUserSignupEmpty.style.visibility = 'hidden';
                    mPassSignupEmpty1.style.display = 'none';
                    mPassSignupEmpty1.style.visibility = 'hidden';
                    mPassSignupEmpty2.style.display = 'none';
                    mPassSignupEmpty2.style.visibility = 'hidden';
                    mPassSignup.style.display = 'none';
                    mPassSignup.style.visibility = 'hidden';

                // Comprobamos que el usuario no exista
                    if ( localStorage.getItem( iUserSignup.value ) != null ) {
                        mUserSignup.style.display = 'block';
                        mUserSignup.style.visibility = 'visible';
                    } else {
                        mUserSignup.style.display = 'none';
                        mUserSignup.style.visibility = 'hidden';
                    }

                // Crea un array con el nombre de usuario y contraseña y lo guarda en el localStorage
                    let user = [ iUserSignup.value, iPassSignup1.value ];
                    localStorage.setItem( iUserSignup.value, JSON.stringify( user ) );

                // Cambiamos el display a login
                    change_sesion( false );
                // Reiniciamos las variables
                    n_empty_signup = 0;
                    passwords_match = true; 
                // Refrescamos la pagina
                    location.reload();
            } else {
                // Reiniciamos las variables
                    n_empty_signup = 0;
                    passwords_match = true;
                // Mostramos el mensaje de error
                    mSignupError.style.display = 'block';
                    mSignupError.style.visibility = 'visible';
            }

    }