package dog;

import org.json.JSONObject;

public class Adocao {
	private String nome;
	private String porte;
    private int id;
	
	
	public Adocao() {
		this.id = -1;
		this.nome = "";
		this.porte = "";

	}
	
	public Adocao(int id, String nome, String porte ) {
		this.id = id;
		this.nome = nome;
		this.porte = porte;
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

	public String getPorte() {
		return porte;
	}

	public void setPorte(String porte) {
		this.porte = porte;
	}

	@Override
	public String toString() {
		return "Adocao [id=" + id + ", nome=" + nome + ", porte=" + porte + "]";
	}
	
	public JSONObject toJson() 
	{
		
		JSONObject obj = new JSONObject();
	
		obj.put("id"   , id);
		obj.put("nome"   , nome);
		obj.put("porte" , porte);
		
		return obj;
	
}
	
}
