package tacs;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import model.Usuario;
import repos.RepoUsuarios;

@RestController
public class UserController {
	
	// Lista de Usuarios
	@RequestMapping(value="/usuarios", method = RequestMethod.GET)
	public List<Usuario> getActores() {
		return RepoUsuarios.getInstance().getAllUsuarios();
	}	
	@RequestMapping("/usuarios/{id}")
	public Usuario getActorById(@PathVariable("id") Long id) {
		return new Usuario(id, "alumnos-utn", "123456");
	}
	
}
