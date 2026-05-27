class Usuario {
  constructor(
    public nombre: string,
    public email: string
  ) {}
}

class ValidadorEmail {
  validar(email: string): boolean {
    return email.includes("@");
  }
}

class UsuarioRepositorio {
  guardar(usuario: Usuario): void {
    console.log("Guardando " + usuario.nombre + " en BD");
  }

  cargar(id: number): void {
    // Lógica para cargar usuario
  }
}

class EmailService {
  enviarEmail(usuario: Usuario, mensaje: string): void {
    console.log("Enviando email a " + usuario.email + ": " + mensaje);
  }
}

// Uso
const usuario = new Usuario("Juan", "juan@email.com");

const validadorEmail = new ValidadorEmail();
const repositorio = new UsuarioRepositorio();
const emailService = new EmailService();

if (validadorEmail.validar(usuario.email)) {
  repositorio.guardar(usuario);
  emailService.enviarEmail(usuario, "Bienvenido!");
} else {
  console.log("Email inválido");
}