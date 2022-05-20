package dog;

import org.json.JSONObject;

public class Agressao {
    private int id;
	private String nome;
	private String telefone;
	private String email;
	private String cidade;
	private String animal;
	private String info;
	
	
	public Agressao() {
		this.id = -1;
		this.nome = "";
		this.telefone = "";
		this.email = "";
		this.cidade = "";
		this.animal = "";
		this.info = "";
	}
	
	public Agressao (int id, String nome, String telefone ,String email,String cidade,String animal,String info) {
		this.id = id;
		this.nome = nome;
		this.telefone = telefone;
		this.email = email;
		this.cidade = cidade;
		this.animal = animal;
		this.info = info;
	}
	
	public Agressao (String nome, String telefone ,String email,String cidade,String animal,String info) {
		this.nome = nome;
		this.telefone = telefone;
		this.email = email;
		this.cidade = cidade;
		this.animal = animal;
		this.info = info;
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

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getAnimal() {
		return animal;
	}

	public void setAnimal(String animal) {
		this.animal = animal;
	}
	
	public String getInfo() {
		return info;
	}

	public void setInfo (String info) {
		this.info = info;
	}
	
	@Override
	public String toString() {
		return "agressao [id=" + id + ", nome=" + nome + ", telefone=" + telefone + 
				 ", email=" + email +  ", cidade=" + cidade + ", animal=" + animal + ", info=" + info + "]";
	}
	
	public JSONObject toJson() 
	{
		
		JSONObject obj = new JSONObject();
	
		obj.put("id", id);
		obj.put("nome", nome);
		obj.put("telefone", telefone);
		obj.put("email", email);
		obj.put("cidade", cidade);
		obj.put("animal", animal);
		obj.put("info", info);
		
		return obj;
	
}

}
