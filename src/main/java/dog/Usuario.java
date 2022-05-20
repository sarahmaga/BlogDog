package dog;

import org.json.JSONObject;

public class Usuario {
	private String login;
	private String nome;
	private String senha;
	private String email;
	private int id;
	
	
	public Usuario() {
		this.id = -1;
		this.nome = "";
		this.senha = "";
		this.email = "";
		this.login =  "";
	}
	
	public Usuario(int id,String login, String nome, String senha, String email) {
		this.login = login;
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nome=" + nome + ", senha=" + senha + ", email=" + email + ", login=" + login + "]";
	}
	
	public JSONObject toJson() 
	{
		
		JSONObject obj = new JSONObject();
	
		obj.put("id"   , id);
		obj.put("nome"   , nome);
		obj.put("senha" , senha);
		obj.put("email"  , email);
		obj.put("login" , login);
		
		
		return obj;
	
}
	
}
