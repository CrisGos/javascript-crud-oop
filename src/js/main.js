class Persona {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    crearUsuario() {


    }


    registrarse() {

    }


    crearReserva() {

    }
}


class UsuarioRegular extends Persona {
    constructor(nombre, email) {
        super(nombre, email);
    }
    registrarComoUsuario() {
        super.registrarse();
    }
}


class Administrador extends Persona {
    constructor(nombre, email) {
        super(nombre, email);
    }


}


class Display {
    static register() {
        const form = document.getElementById('form');
        document.getElementById('reg-bott').addEventListener('click', function(event) {
            event.preventDefault();
            form.innerHTML = `
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="password-reg" class="form-label">Password</label>
                <input type="password" class="form-control" id="password-reg">
            </div>

            <select class="form-select" aria-label="Default select example">
                <option selected>Select a role</option>
                <option value="true">Admin</option>
                <option value="false">User</option>
            </select>

            <button type="submit" class="btn btn-primary">Register</button>

            `
        });
        
        document.getElementById('register-b').addEventListener('submit', function(event) {
            location.reload();
        })

    };

    static async userDisplay() {
        const response = await fetch(`http://localhost:3000/lists?avaliability=true`);
        const data = await response.json();
        let options = '<option selected>Select a reservation</option>';
        data.forEach(room => {
            options += `<option value="${room.id}">${room.id}</option>`;
        });
        
        const form = document.getElementById('form');
        document.getElementById('reg-bott').addEventListener('click', function(event) {
            event.preventDefault();
            form.innerHTML = `
            <div class="mb-3">
                <label for="username-res" class="form-label">Username</label>
                <input type="text" class="form-control" id="username-res" aria-describedby="emailHelp">
            </div>

            <select class="form-select" aria-label="Default select example">
                ${options}
            </select>

            <button type="submit" id="register-b" class="btn btn-primary">Register</button>

            `
        });
        
    }
}


Display.register()
