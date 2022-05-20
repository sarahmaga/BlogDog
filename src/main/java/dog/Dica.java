package dog;

import org.json.JSONObject;

public class Dica {
	private String titulo;
	private String nome;
	private String conteudo;
	private int id;
	
	
	public Dica() {
		this.id = -1;
		this.nome = "";
		this.titulo =  "";
		this.conteudo = "";
		
	}
	
	public Dica(int id, String nome, String conteudo ,String titulo) {
		this.id = id;
		this.nome = nome;
		this.titulo = titulo;
		this.conteudo = conteudo;
		
	}
	
	public Dica(String nome, String conteudo ,String titulo) {
		this.nome = nome;
		this.titulo = titulo;
		this.conteudo = conteudo;
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

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	
	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	@Override
	public String toString() {
		return "Dica [id=" + id + ", nome=" + nome + ", conteudo=" + conteudo + ", titulo=" + titulo + "]";
	}
	
	public JSONObject toJson() 
	{
		
		JSONObject obj = new JSONObject();
	
		obj.put("id",id);
		obj.put("nome",nome);
		obj.put("titulo",titulo);
		obj.put("conteudo",conteudo);
		
		
		return obj;
	
}
	
}
