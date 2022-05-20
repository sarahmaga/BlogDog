package dog;

import java.sql.*;

public class DAO {
	private Connection conexao;
	
	public DAO() {
		conexao = null;
	}
	
	//Conexao com o bando de dados
	public boolean conectar() {
		String driverName = "org.postgresql.Driver";                    
		String serverName = "localhost";
		String mydatabase = "Blogdog";
		int porta = 5432;
		String url = "jdbc:postgresql://" + serverName + ":" + porta +"/" + mydatabase;
		String username = "postgres";
		String password = "fellipe123";
		boolean status = false;

		try {
			Class.forName(driverName);
			conexao = DriverManager.getConnection(url, username, password);
			status = (conexao == null);
			System.out.println("Conexao efetuada com o postgres!");
		} catch (ClassNotFoundException e) { 
			System.err.println("Conexao nao efetuada com o postgres -- Driver nao encontrado -- " + e.getMessage());
		} catch (SQLException e) {
			System.err.println("Conexao nao efetuada com o postgres -- " + e.getMessage());
		}

		return status;
	}
	
	public boolean close() {
		boolean status = false;
		
		try {
			conexao.close();
			status = true;
		} catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		return status;
	}
	
	//Inserir todas as informacoes na tabela Usuario
	public boolean inserirUsuario(Usuario usuario) {
		boolean status = false;
		try {  
			Statement st = conexao.createStatement();
			st.executeUpdate("INSERT INTO Usuario (login, nome, senha, email, id) "
					       + "VALUES ("+usuario.getLogin()+ ", '" + usuario.getNome() + "', '"  
					       + usuario.getSenha() + "', '" + usuario.getEmail() + "', '" + usuario.getId() + "');");
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	//Atualizar um dado de um Usuario
	public boolean atualizarUsuario(Usuario usuario) {
		boolean status = false;
		try {  
			Statement st = conexao.createStatement();
			String sql = "UPDATE Usuario SET login = '" + usuario.getLogin() + "', nome = '"  
				       + usuario.getNome() + "', senha = '" + usuario.getSenha() + "',email = '" + usuario.getEmail() + "'"
					   + " WHERE id = " + usuario.getId();
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
    //Remover o usuario da tabela	
	public boolean excluirUsuario(int id) {
		boolean status = false;
		try {  
			Statement st = conexao.createStatement();
			st.executeUpdate("DELETE FROM usuario WHERE id = " + id);
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	
	//Pegando os dados do Usuario na tabela
	public Usuario[] getUsuarios() {
		Usuario[] usuarios = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM usuario");		
	         if(rs.next()){
	             rs.last();
	             usuarios = new Usuario[rs.getRow()];
	             rs.beforeFirst();

	             for(int i = 0; rs.next(); i++) {
	                usuarios[i] = new Usuario (rs.getInt("id"),rs.getString("login"), rs.getString("nome"), 
	                		                  rs.getString("senha"), rs.getString("email"));
	             }
	          }
	          st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return usuarios;
	}

	//---------------------------------------------------------------------------------------------------------------------------------------
	//Ongs
	
	//Inserir todas as informacoes na tabela ONGS
		public boolean inserirOng(ONG ong) {
			boolean status = false;
			try {  
				Statement st = conexao.createStatement();
				st.executeUpdate("INSERT INTO ongs (nome, cidade, telefone) "
						       + "VALUES ( '" 
						                   + ong.getNome() + "', '"  
						                   + ong.getCidade() + "', '" 
						                   + ong.getTelefone() + "');");
				st.close();

				status = true;
			} catch (SQLException u) { 
				System.out.println(u);
				throw new RuntimeException(u);
			}
			return status;
		}
		
		//Atualizar um dado de uma Ong
		public boolean atualizarOng(ONG ong) {
			boolean status = false;
			try {  
				Statement st = conexao.createStatement();
				String sql = "UPDATE ongs SET id = '" + ong.getId() + "', nome = '"  
					       + ong.getNome() + "', cidade = '" + ong.getCidade() + "',email = '" + ong.getTelefone() + "'"
						   + " WHERE id = " + ong.getId();
				st.executeUpdate(sql);
				st.close();
				status = true;
			} catch (SQLException u) {  
				throw new RuntimeException(u);
			}
			return status;
		}
		
	    //Remover uma ONG da tabela	
		public boolean excluirOng(int id) {
			boolean status = false;
			try {  
				Statement st = conexao.createStatement();
				st.executeUpdate("DELETE FROM ongs WHERE id = " + id);
				st.close();
				status = true;
			} catch (SQLException u) {  
				throw new RuntimeException(u);
			}
			return status;
		}
		
		
		//Pegando os dados do Usuario na tabela
		public ONG[] getOngs() {
			ONG[] ong = null;
			
			try {
				Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
				ResultSet rs = st.executeQuery("SELECT * FROM ongs");		
		         if(rs.next()){
		             rs.last();
		             ong = new ONG[rs.getRow()];
		             rs.beforeFirst();

		             for(int i = 0; rs.next(); i++) {
		            	 ong[i] = new ONG (rs.getInt("id"), 
		            			           rs.getString("nome"), 
		                		           rs.getString("cidade"),
		                		           rs.getString("telefone"));
		             }
		          }
		          st.close();
			} catch (Exception e) {
				System.err.println(e.getMessage());
			}
			return ong;
		}
		
		//---------------------------------------------------------------------------------------------------------------------------------------
		//Dica
		
		//Inserir todas as informacoes na tabela Dica
			public boolean inserirDica(Dica dica) {
				boolean status = false;
				try {  
					Statement st = conexao.createStatement();
					st.executeUpdate("INSERT INTO dica (nome, titulo, conteudo) "
						       + "VALUES ( '" 
						                   + dica.getNome() + "', '"  
						                   + dica.getTitulo() + "', '" 
						                   + dica.getConteudo() + "');");
					st.close();
					status = true;
				} catch (SQLException u) {  
					throw new RuntimeException(u);
				}
				return status;
			}
			
			//Atualizar um dado de uma Dica
			public boolean atualizarDica(Dica dica) {
				boolean status = false;
				try {  
					Statement st = conexao.createStatement();
					String sql = "UPDATE dica SET nome = '" + dica.getNome() + "', id = '"  
						       + dica.getId() + "', titulo = '" + dica.getTitulo() + "',conteudo = '" + dica.getConteudo() + "'"
							   + " WHERE id = " + dica.getId();
					st.executeUpdate(sql);
					st.close();
					status = true;
				} catch (SQLException u) {  
					throw new RuntimeException(u);
				}
				return status;
			}
			
		    //Remover uma Dica da tabela	
			public boolean excluirDica(int id) {
				boolean status = false;
				try {  
					Statement st = conexao.createStatement();
					st.executeUpdate("DELETE FROM dica WHERE id = " + id);
					st.close();
					status = true;
				} catch (SQLException u) {  
					throw new RuntimeException(u);
				}
				return status;
			}
			
			
			//Pegando os dados da Dica na tabela
			public Dica[] getDicas() {
				Dica[] dica = null;
				
				try {
					Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
					ResultSet rs = st.executeQuery("SELECT * FROM dica");		
			         if(rs.next()){
			             rs.last();
			             dica = new Dica[rs.getRow()];
			             rs.beforeFirst();

			             for(int i = 0; rs.next(); i++) {
			            	 dica[i] = new Dica (rs.getInt("id"), rs.getString("nome"), 
			                		                  rs.getString("conteudo"),rs.getString("titulo"));
			             }
			          }
			          st.close();
				} catch (Exception e) {
					System.err.println(e.getMessage());
				}
				return dica;
			}
			
			//---------------------------------------------------------------------------------------------------------------------------------------
			//Agressao
			
			//Inserir todas as informacoes na tabela Agressao
				public boolean inserirAgressao(Agressao agressao) {
					boolean status = false;
					try {  
						Statement st = conexao.createStatement();
						st.executeUpdate("INSERT INTO agressao (nome, telefone, email, cidade, animal, info) "
							       + "VALUES ( '" 
				                   + agressao.getNome() + "', '"  
				                   + agressao.getTelefone() + "', '" 
				                   + agressao.getEmail() + "', '" 
				                   + agressao.getCidade() + "', '"
				                   + agressao.getAnimal() + "', '"
				                   + agressao.getInfo() + "');");
						st.close();
						status = true;
					} catch (SQLException u) {  
						throw new RuntimeException(u);
					}
					return status;
				}
				
				
				
				//Pegando os dados da Agressao na tabela
				public Agressao[] getAgressao() {
					Agressao[] agressao = null;
					
					try {
						Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
						ResultSet rs = st.executeQuery("SELECT * FROM agressao");		
				         if(rs.next()){
				             rs.last();
				             agressao = new Agressao[rs.getRow()];
				             rs.beforeFirst();

				             for(int i = 0; rs.next(); i++) {
				            	 agressao[i] = new Agressao (rs.getInt("id"), rs.getString("nome"), 
				                 rs.getString("telefone"),rs.getString("email"),rs.getString("cidade"),
				                 rs.getString("animal"),rs.getString("info"));
				             }
				          }
				          st.close();
					} catch (Exception e) {
						System.err.println(e.getMessage());
					}
					return agressao;
				}
	
	
	
}