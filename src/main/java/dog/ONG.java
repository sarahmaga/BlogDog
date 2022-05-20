package dog;

import org.json.JSONObject;

public class ONG {
    private int id;
	private String telefone;
	private String nome;
	private String cidade;
	
	
	public ONG() {
		this.id = -1;
		this.nome = "";
		this.cidade = "";
		this.telefone = "";
	}
	
	public ONG(int id, String nome, String cidade ,String telefone) {
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
		this.telefone = telefone;
	}
	
	public ONG(String nome, String cidade ,String telefone) {
		this.nome = nome;
		this.cidade = cidade;
		this.telefone = telefone;
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

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	
	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	@Override
	public String toString() {
		return "ONG [id=" + id + ", nome=" + nome + ", cidade=" + cidade + ", telefone=" + telefone + "]";
	}
	
	public JSONObject toJson() 
	{
		
		JSONObject obj = new JSONObject();
	
		obj.put("id",id);
		obj.put("nome",nome);
		obj.put("cidade",cidade);
		obj.put("telefone",telefone);
		
		
		return obj;
	
}

}
