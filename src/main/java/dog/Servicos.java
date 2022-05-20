package dog;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.servlet.MultipartConfigElement;

import org.json.JSONArray;
import org.json.JSONObject;
import spark.Request;
import spark.Response;


public class Servicos {
	
	
    private DAO BD;
    private ONG ONGs;
    private Dica Dica;
    private Adocao Adocao;
	
	//Conexï¿½o com o BD
    
	public Servicos ()  
	{	
			BD = new DAO();
			if(BD.conectar())
				System.out.println("Erro na conxao");
			else
				System.out.println("Sucesso na conexao");
	}
	

	//---------------------------------------------------------------------------------------------------------------------------------------
		//Usuario
		
		//Adicionar no Banco de Dados um Usuario
			public Object addUsuario(Request request, Response response) {
				response.header("Access-Control-Allow-Origin", "*");
			    response.header("Content-Type", "application/json");
			    
			    JSONObject execute = new JSONObject(request.body());
			    Usuario usuario = new Usuario(1,
		                                   execute.getString("login"),
		                                   execute.getString("nome"),
			    		                   execute.getString("senha"),
			    		                   execute.getString("email"));

			    return BD.inserirUsuario(usuario);
			}//end cadastroUsuario
			
			
			//Buscar no Banco de Dados Usuario
			public Object getUsuario (Request request, Response response) 
			{
				response.header("Access-Control-Allow-Origin", "*");
			    response.header("Content-Type", "application/json");
			    
			    JSONArray resp = new JSONArray();
			    Usuario[] D = BD.getUsuarios();
			    
			    for(int i = 0; i < D.length ; i++) 
			    	resp.put(D[i].toJson());
			    
			 return resp;   
			}//end getUsuario
	
	
	
	
	//---------------------------------------------------------------------------------------------------------------------------------------
	//ONG
	
	//Inserindo no Banco de Dados as informações referente a ONG
	public Object addONG2(Request request, Response response) 
	{
		response.header("Access-Control-Allow-Origin", "*");
	    response.header("Content-Type", "application/json");
	    request.attribute("org.eclipse.jetty.multipartConfig", new MultipartConfigElement("/temp"));
		String nome = request.queryParams("nome");
		String cidade = request.queryParams("cidade");
		String telefone = (request.queryParams("telefone"));	
		ONG ong = new ONG(nome, cidade, telefone);
		
		BD.inserirOng(ong);
		
		response.status(201); // 201 Created
		response.redirect("http://localhost:5500/src/main/resource/ongs.html");
		return 0;
	}
	
	//Buscar no Banco de Dados as informacoes sobre as ONGS
	public Object getONG (Request request, Response response) 
	{
		response.header("Access-Control-Allow-Origin", "*");
	    response.header("Content-Type", "application/json");
	    
	    JSONArray resp = new JSONArray();
	    ONG[] D = BD.getOngs();
	    
	    for(int i = 0; i < D.length ; i++) 
	    	resp.put(D[i].toJson());
	    
	 return resp;   
	}//end getONG
	
	


	//---------------------------------------------------------------------------------------------------------------------------------------
	//Dica
	
	//Pegar a informação no formulario e enviar pro inserirDica
	public Object addDicas(Request request, Response response) 
	{
		response.header("Access-Control-Allow-Origin", "*");
	    response.header("Content-Type", "application/json");
	    request.attribute("org.eclipse.jetty.multipartConfig", new MultipartConfigElement("/temp"));
		String nome_dica = request.queryParams("nome_dica");
		String titulo_dica = request.queryParams("titulo_dica");
		String conteudo_dica = (request.queryParams("conteudo_dica"));	
		Dica dica = new Dica(nome_dica, titulo_dica, conteudo_dica);
		
		BD.inserirDica(dica);
		
		response.status(201); // 201 Created
		response.redirect("http://localhost:5500/src/main/resource/dicas.html");
		return 0;
	}
	
	
	//Solicitar as informações pega no nosso banco de dados sobre Dicas
	public Object getDicas (Request request, Response response) 
	{
		response.header("Access-Control-Allow-Origin", "*");
	    response.header("Content-Type", "application/json");
	    
	    JSONArray resp = new JSONArray();
	    Dica[] D = BD.getDicas();
	    
	    for(int i = 0; i < D.length ; i++) 
	    	resp.put(D[i].toJson());
	    
	 return resp;   
	}//end getDicas
	

	//---------------------------------------------------------------------------------------------------------------------------------------
		//Agressao
		
		//Adicionar no Banco de Dados as Dicas
		public Object addAgressao(Request request, Response response) 
		{
			response.header("Access-Control-Allow-Origin", "*");
		    response.header("Content-Type", "application/json");
		    request.attribute("org.eclipse.jetty.multipartConfig", new MultipartConfigElement("/temp"));
			String nome_agressao = request.queryParams("nome_agressao");
			String telefone_agressao = request.queryParams("telefone_agressao");
			String email_agressao = request.queryParams("email_agressao");
			String cidade_agressao = request.queryParams("cidade_agressao");
			String animal_agressao = request.queryParams("animal_agressao");
			String info_agressao = (request.queryParams("info_agressao"));	
			

			Agressao agressao = new Agressao (nome_agressao, telefone_agressao, email_agressao, cidade_agressao,
			animal_agressao,info_agressao);
			
			BD.inserirAgressao(agressao);
			
			response.status(201); // 201 Created
			response.redirect("http://localhost:5500/src/main/resource/relatos.html");
			return 0;
		}
		
		
		//Buscar no Banco de Dados as Dicas
		public Object getAgressao (Request request, Response response) 
		{
			response.header("Access-Control-Allow-Origin", "*");
		    response.header("Content-Type", "application/json");
		    
		    JSONArray resp = new JSONArray();
		    Agressao[] D = BD.getAgressao();
		    for(int i = 0; i < D.length ; i++)
		    {
		    	resp.put(D[i].toJson());
		    }
		    
		 return resp;   
		}//end getDicas
	
	
	
        

	}
	
	

