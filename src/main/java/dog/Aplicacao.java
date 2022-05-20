package dog;

import static spark.Spark.*;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletException;
import javax.servlet.http.Part;


import spark.Request;

public class Aplicacao {
	
	private static Servicos serv = new Servicos();
	
	public static void main (String[] args) {
		
		port(4567);
		
		//pastas do frontEnd
		staticFiles.location("/dog");
        //ONG
		post("/cadastrar", (request, response) -> serv.addONG2(request, response));
		get("/ong", (request, response) -> serv.getONG(request, response));
		
		//Dica
		post("/cadastrardica", (request, response) -> serv.addDicas(request, response));
		get("/dicas", (request, response) -> serv.getDicas(request, response));
		
		//Agressao
		post("/cadastraragressao", (request, response) -> serv.addAgressao(request, response));
		get("/agressao", (request, response) -> serv.getAgressao(request, response));
		
		
		
		

	}//end main
}//end Back end
