// VARIABLES
    // MENU
        let icon_user:any = document.getElementById('icon_user');
        let icon_menu:any = document.getElementById('icon_menu');
        let user_menu:any = document.getElementById('user_menu');

    // HABITACIONES
        let lowcost_rooms:any = document.getElementsByName('LowCost');
        let standard_rooms:any = document.getElementsByName('Normal');
        let luxury_rooms:any = document.getElementsByName('Vip');
        let suite_rooms:any = document.getElementsByName('Suite');

    // SECCIONES HABITACIONES
        let example_rooms:any = document.getElementById('example_rooms');
        let room_purchase:any = document.getElementById('room_purchase');
        let reservebutton:any = document.getElementById('reservebutton');

    // BOTONES OCUPACION
        let boton_ocupacion_one:any = document.getElementById('one');
        let boton_ocupacion_two:any = document.getElementById('two');
        let boton_ocupacion_three:any = document.getElementById('three');

    // TEXTOS DE LAS RESERVAS
        let add_username:any = document.getElementById('add_username');
        let add_days:any = document.getElementById('add_days');
        let add_price:any = document.getElementById('add_price');

    // METOOD DE RESERVA
        let username:string = localStorage.getItem('userloged')!;
        let ocupation_number:number = 1;
        let dias:number;
        let error_reserva:any = document.getElementById('error_reserva');
        let precio:number;
        let fechaEntrada:Date;
        let fechaSalida:Date;



    // OBJETO HABITACION
        class Room {
            constructor(
                public room_number:number,
                public name:string,
                public price:number,
                public room_class:number,
                public ocupation:number,
                public start_date:Date,
                public end_date:Date,
                public days:number,
            ) {}
        }

        let reservadas:Room;

// SETTINGS
    // MENU
        icon_menu.style.display = 'none';
        icon_menu.style.visibility = 'hidden';
        
        user_menu.style.display = 'none';
        user_menu.style.visibility = 'hidden';

    // TEXTOS RESERVAS

    window.onload = function() {
        clearButtons();
    }

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

        function skip() {
            // Eliminamos el usuario de la sesion
            localStorage.removeItem('userloged');
        }

        /**
         * Funcion que cambia el lenguahe de la pagina
         * @param lenguage variable string para cambiar el lenguage de la pagina
         */
        function change_lenguage( page:string ) {
            window.location.href = page;
        }

        /**
         * Metodo para mostrar unicamente las habitaciones de una clase en concreto
         * @param room_class variable string para mostrar las habitaciones de una clases
         */
        function show_list( room_class:string ) {
            switch ( room_class ) {
                case 'LowCost':
                    for ( let i = 0; i < lowcost_rooms.length; i++ ) {
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
                    for ( let i = 0; i < standard_rooms.length; i++ ) {
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
                    for ( let i = 0; i < luxury_rooms.length; i++ ) {
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
                    for ( let i = 0; i < suite_rooms.length; i++ ) {
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
                default:
                    console.log("!ERROR! Class not found");
                    break;
            }
        }

        function change_plane( plane:number ) {
            switch ( plane ) {
                case 1:
                    example_rooms.style.display = 'flex';
                    example_rooms.style.visibility = 'visible';
                    room_purchase.style.display = 'none';
                    room_purchase.style.visibility = 'hidden';   
                    clearButtons();         
                    break;
                case 2:
                    example_rooms.style.display = 'none';
                    example_rooms.style.visibility = 'hidden';
                    room_purchase.style.display = 'flex';
                    room_purchase.style.visibility = 'visible';            
                    break;
                default:
                    console.log("!ERROR! Plane not found");
                    break;
            }
        }
        function setOnPress( numButton:number, cateogory:number ) {
            for ( let i = 0; i < lowcost_rooms.length; i++ ) {
                if ( lowcost_rooms[i].className != 'ocuped' ) {
                    lowcost_rooms[i].className = 'free';
                }
                if ( standard_rooms[i].className != 'ocuped' ) {
                    standard_rooms[i].className = 'free';
                }
                if ( luxury_rooms[i].className != 'ocuped' ) {
                    luxury_rooms[i].className = 'free';
                }
                if ( suite_rooms[i].className != 'ocuped' ) {
                    suite_rooms[i].className = 'free';
                }
            }
            switch ( cateogory ) {
                case 1:
                    lowcost_rooms[numButton].className = 'selected';
                    break;
                case 2:
                    standard_rooms[numButton].className = 'selected';
                    break;
                case 3:
                    luxury_rooms[numButton].className = 'selected';
                    break;
                case 4:
                    suite_rooms[numButton].className = 'selected';
                    break;
                default:
                    console.log("!ERROR! Category not found");
                    break;
            }
        }

        function clearButtons() {
            let reservas = JSON.parse(localStorage.getItem('reservas')!);
                for ( let i = 0; i < reservas.length; i++ ) {
                    switch ( reservas[i].category ) {
                        case 1:
                            lowcost_rooms[reservas[i].numHab].className = 'ocuped';
                            break;
                        case 2:
                            standard_rooms[reservas[i].numHab].className = 'ocuped';
                            break;
                        case 3:
                            luxury_rooms[reservas[i].numHab].className = 'ocuped';
                            break;
                        case 4:
                            suite_rooms[reservas[i].numHab].className = 'ocuped';
                            break;
                        default:
                            console.log("!ERROR! Class not found");
                            break;
                    }
                
            }
        }

        function setButonPress( numButton:number, cateogory:number ) {
            setOnPress( numButton, cateogory );
            guardarDias(cateogory);
            switch ( cateogory ) {
                case 1:
                    lowcost_rooms[numButton].className = 'press';                    
                    break;
                case 2:
                    standard_rooms[numButton].className = 'press';
                    break;
                case 3:
                    luxury_rooms[numButton].className = 'press';
                    break;
                case 4:
                    suite_rooms[numButton].className = 'press';
                    break;
                default:
                    console.log("!ERROR! Class not found");
                    break;
            }
        }

        function reserve( numHab:number, cateogory:number ) {
            setButonPress(numHab, cateogory);
            reservebutton.innerHTML = ' <button id="setdays" onclick="guardarDias(' + cateogory + ')">Guardar Dias</button> <button type="submit" id="btnReserve" onclick="make_reserve(' + numHab + ',' + cateogory + ')">Reservar</button> ';
            change_plane(2);
            add_username.innerHTML = username;
        }

        function guardarDias( cateogory:number ) {
            let cFechaEntrada:any = document.getElementById('cFechaEntrada');
            let cFechaSalida:any = document.getElementById('cFechaSalida');

            // En caso de que el dia de salida sea antes que el de entrada
            if ( cFechaSalida.value < cFechaEntrada.value || cFechaSalida.value == cFechaEntrada.value) {
                error_reserva.innerHTML = 'La fecha de salida no puede ser antes o igual que la de entrada';
                return;
            } else {
                error_reserva.innerHTML = '';
                add_days.innerText = '';
                add_price.innerText = '';
            }

            fechaEntrada = new Date(cFechaEntrada.value);
            fechaSalida = new Date(cFechaSalida.value);
            let restaFechas = fechaSalida.getTime() - fechaEntrada.getTime();
            dias = Math.round(restaFechas / (1000 * 60 * 60 * 24));
            dias = dias + 1;

            switch ( cateogory ) {
                case 1:
                    precio = 20 * dias;
                    break;
                case 2:
                    precio = 35 * dias;
                    break;
                case 3:
                    precio = 50 * dias;
                    break;
                case 4:
                    precio = 100 * dias;
                    break;
                default:
                    console.log("!ERROR! Class not found");
                    break;
            }

            add_days.innerText = dias + ' dias';
            add_price.innerText = precio;
        }

        function setOcupation( persons:number ) {
            switch ( persons ) {
                case 1:
                    boton_ocupacion_one.className = 'press_occupancy';
                    boton_ocupacion_two.className = 'no_press_occupancy';
                    boton_ocupacion_three.className = 'no_press_occupancy';
                    ocupation_number = 1;
                    break;
                case 2:
                    boton_ocupacion_one.className = 'no_press_occupancy';
                    boton_ocupacion_two.className = 'press_occupancy';
                    boton_ocupacion_three.className = 'no_press_occupancy';
                    ocupation_number = 2;
                    break;
                case 3:
                    boton_ocupacion_one.className = 'no_press_occupancy';
                    boton_ocupacion_two.className = 'no_press_occupancy';
                    boton_ocupacion_three.className = 'press_occupancy';
                    ocupation_number = 3;
                    break;
                default:
                    console.log("!ERROR! Number of persons not found");
                    break;
            }
        }

        function make_reserve( numHab:number, category:number ) {
            switch ( category ) {
                case 1:
                    lowcost_rooms[numHab].className = 'ocuped';
                    break;
                case 2:
                    standard_rooms[numHab].className = 'ocuped';
                    break;
                case 3:
                    luxury_rooms[numHab].className = 'ocuped';
                    break;
                case 4:
                    suite_rooms[numHab].className = 'ocuped';
                    break;
                default:
                    console.log("!ERROR! Class not found");
                    break;
            }
            
            let reserva:Room = {
                room_number: numHab,
                room_class: category,
                start_date: fechaEntrada,
                end_date: fechaSalida,
                days: dias,
                price: precio,
                ocupation: ocupation_number,
                name: username }
            let reservas = JSON.parse(localStorage.getItem('reservas')!);
            if ( reservas == null ) { reservas = []; }
            reservas.push({numHab:numHab, category:category, reserva:reserva});
            localStorage.setItem('reservas', JSON.stringify(reservas));
            guardarDias( category );
        }
