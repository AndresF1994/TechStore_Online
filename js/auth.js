document.addEventListener('DOMContentLoaded',()=>{
    //Obtenemos referencias a los formularios de registro y login
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
//Función auxiliar para mostrar alertas
    const showAlert = (mensaje, type ='error') =>{
        alert(mensaje)
    };
//Función para generar una clave única para cada usuario basado en su email
    const getUserKey =(email)=>`user_${email.toLowerCase()}`;
//Guarda un objeto usuario en localStorage usando su correo como identificador
    const saveUser = (user) =>{
        localStorage.setItem(getUserKey(user.email), JSON.stringify(user));
    }
    //Recupera un usuario desde localStorage usando el correo electrónico
    const getUser=(email)=>{
        const data = localStorage.getItem(getUserKey(email));
        return data ? JSON.parse(data):null;
        // if (data) {
        //     return JSON.parse(data);
        // } else {
        // return null;
        // }
    };
//Guarda al usuario activo en localStorage para simular una sesión iniciada
    const setActiveUser = (user)=>{
        localStorage.setItem('activeUser',JSON.stringify(user));
    };
// implementacion y validacion del registro
    if(registerForm){
        registerForm.addEventListener('submit',(e) =>{
            e.preventDefa(); //Evita el comportamiento por defecto del formulario, que sería recargar la página.
            // Obtenemos los valores de los formularios
            const name= document.getElementById('name').ariaValueMax.trim();
            const username= document.getElementById('username').ariaValueMax.trim();
            const email= document.getElementById('email').ariaValueMax.trim();
            const phone= document.getElementById('phone').ariaValueMax.trim();
            const address = document.getElementById('address').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // validamos con un condicional
            if(!name || !username || !email || !phone || !address || !password || !confirmPassword){
                showAlert('Por favor completa todos los campos.');
                return;
            }

            //validacion de contraseña
            if (password !== confirmPassword) {
                showAlert('Las contraseñas no coinciden.');
                return;
            }
            //Verificaion de usuario existente con correo
            if (getUser(email)) {
            showAlert('Ya existe un usuario registrado con este correo.');
            return;
            }
            //creamos el objeto de usuario y lo almacenamos
            const user = { name, username, email, phone, address, password};
            saveUser(user);
            setActiveUser(user);
            // Confirmación y redirección. Volvemos a la ventana de inicio
            alert('Registro exitoso. ¡Bienvenido a TechStore!');
            window.location.href = 'index.html';
        });
    }

    //LOGICA DE INICIO DE SESION
    if (loginForm){
        loginForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim().toLowerCase();
            const password = document.getElementById('login-password').value;

            if (!email || !password) {
            showAlert('Por favor ingresa tu correo y contraseña.');
            return;
            }
            // Buscamos el usuario por email
            const user = getUser(email);

            if (!user) {
            showAlert('No se encontró una cuenta con este correo.');
            return;
            }
            // Verificamos si la contraseña coincide
            if (user.password !== password) {
            showAlert('Contraseña incorrecta.');
            return;
            }
            // Iniciamos sesión guardando al usuario activo y redirigimos
            setActiveUser(user);
            alert(`Bienvenido, ${user.name}`);
            window.location.href = 'index.html';
        }
    );
    }
}
);