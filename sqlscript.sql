-- CREATE DATABASE ex_der
-- USE DATABASE ex_der

-- criei um atributo id_autor como PK pois nome pode ocorrer de pessoas com nomes ''iguais''.
CREATE TABLE tb_autor(
id_autor VARCHAR(60) PRIMARY KEY AUTO_INCREMENT
nome_autor VARCHAR(60) NOT NULL,
endereco VARCHAR(70),
URL VARCHAR(200) NOT NULL,
nome_editora VARCHAR(60) NOT NULL,
CONSTRAINT FK_autor_editora FOREIGN KEY (nome_editora) REFERENCES tb_editora(nome_editora)
)DEFAULT CHARSET = utf-8;

-- ISBN assim como CPF, é algo único, não sendo necessário se preocupar com valores duplicados.
CREATE TABLE tb_livro(
ISBN INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(60) NOT NULL,
ano DATE,
preço FLOAT(8) NOT NULL,
nome_autor VARCHAR(60) NOT NULL,
CONSTRAINT FK_livro_autor FOREIGN KEY (nome_autor) REFERENCES tb_autor(nome_autor) ON DELETE CASCADE ON UPDATE CASCADE ,
nome_editora VARCHAR(60) NOT NULL,
CONSTRAINT FK_livro_editora FOREIGN KEY (nome_editora) REFERENCES tb_editora(nome_editora) ON DELETE CASCADE ON UPDATE CASCADE 
)DEFAULT CHARSET = utf-8;

-- usar nome como PK faz sentido aqui pois nome de empresas são únicos
CREATE TABLE tb_editora(
nome_editora VARCHAR(200) PRIMARY KEY,
endereco VARCHAR(60) NOT NULL,
telefone IVARCHAR(20) NOT NULL,
URL VARCHAR(60) NOT NULL
)DEFAULT CHARSET = utf-8;

CREATE TABLE tb_deposito(
cod_deposito INT PRIMARY KEY,
endereco VARCHAR(200) NOT NULL,
telefone INT NOT NULL,
ISBN INT NOT NULL,
CONSTRAINT FK_deposito_livro FOREIGN KEY (ISBN) REFERENCES tb_livro(ISBN_livro) ON DELETE CASCADE ON UPDATE CASCADE 
)DEFAULT CHARSET = utf-8;

-- usei CPF como FK para distinguir as compras de cada cliente
CREATE TABLE tb_carrinho(
id_carrinho INT NOT NULL,
CPF VARCHAR(60) NOT NULL,
CONSTRAINT FK_carrinho_cpf FOREIGN KEY (CPF) REFERENCES tb_cliente(CPF) ON DELETE CASCADE ON UPDATE CASCADE 
)DEFAULT CHARSET = utf-8;

-- criei o atributo CPF e coloquei como PK pois todas as pessoas possuem apenas um CPF, fazendo assim ele único.
CREATE TABLE tb_cliente(
CPF VARCHAR(60)PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(60) NOT NULL,
nome_cliente VARCHAR(60) NOT NULL,
endereco VARCHAR(60),
telefone VARCHAR(20)
)DEFAULT CHARSET = utf-8;