
-- criei um atributo id_autor como PK pois nome pode ocorrer de pessoas com nomes ''iguais''.
CREATE TABLE tb_autor(
id_autor INT PRIMARY KEY AUTO_INCREMENT,
nome_autor VARCHAR(60) NOT NULL,
endereco VARCHAR(70) NOT NULL,
URL VARCHAR(200) NOT NULL,
id_editora INT NOT NULL,
CONSTRAINT FK_autor_editora FOREIGN KEY (id_editora) REFERENCES tb_editora(id_editora)
);

-- ISBN assim como CPF, é algo único, não sendo necessário se preocupar com valores duplicados.
-- fiz a mudança de ISBN PK para id_livro PK
CREATE TABLE tb_livro(
id_livro INT PRIMARY KEY,
ISBN VARCHAR(20)  NOT NULL,
titulo VARCHAR(60) NOT NULL,
ano DATE NOT NULL,
preço FLOAT(8) NOT NULL,
id_autor INT NOT NULL,
CONSTRAINT FK_livro_autor FOREIGN KEY (id_autor) REFERENCES tb_autor(id_autor) ON DELETE CASCADE ON UPDATE CASCADE ,
id_editora INT NOT NULL,
CONSTRAINT FK_livro_editora FOREIGN KEY (id_editora) REFERENCES tb_editora(id_editora) ON DELETE CASCADE ON UPDATE CASCADE 
);

-- necessario pois um livro pode ser escrito por mais de um autor, essa tabela serve para resolver esse problema
CREATE TABLE tb_escrito_por(
id_livro INT NOT NULL,
id_autor INT NOT NULL,
CONSTRAINT id_autor_livro_PK PRIMARY KEY(id_livro, id_autor),
CONSTRAINT FK_id_livro FOREIGN KEY (id_livro) REFERENCES tb_livro(id_livro) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT FK_id_autor FOREIGN KEY (id_autor) REFERENCES tb_autor(id_autor) ON DELETE CASCADE ON UPDATE CASCADE 
);

-- usar nome como PK faz sentido aqui pois nome de empresas são únicos.
-- fiz a mudança de nome_editora para id_editora.
CREATE TABLE tb_editora(
id_editora INT PRIMARY KEY,
endereco VARCHAR(60) NOT NULL,
telefone VARCHAR(20) NOT NULL,
URL VARCHAR(60) NOT NULL
);

-- usado para mostrar o id_livro no deposito.
CREATE TABLE tb_armazenamento(
id_deposito INT NOT NULL,
id_livro INT NOT NULL,
CONSTRAINT FK_id_deposito_livro PRIMARY KEY (id_deposito, id_livro),
CONSTRAINT FK_armazena1 FOREIGN KEY (id_deposito) REFERENCES tb_deposito(id_deposito) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT FK_armazena2 FOREIGN KEY (id_livro) REFERENCES tb_livro(id_livro) ON DELETE CASCADE ON UPDATE CASCADE 
);


CREATE TABLE tb_deposito(
id_deposito INT PRIMARY KEY,
endereco VARCHAR(200) NOT NULL,
telefone INT NOT NULL,
id_livro INT NOT NULL,
CONSTRAINT FK_deposito_livro FOREIGN KEY (id_livro) REFERENCES tb_livro(id_livro) ON DELETE CASCADE ON UPDATE CASCADE 
);

-- uso de PK dupla para relacionamento entre as tabelas livro e carrinho
CREATE TABLE tb_contem(
id_carrinho INT NOT NULL,
id_livro INT NOT NULL,
quantidade INT NOT NULL,
CONSTRAINT carrinho_livro_PK PRIMARY KEY (id_carrinho, id_livro),
CONSTRAINT FK_contem1 FOREIGN KEY (id_carrinho) REFERENCES tb_carrinho(id_carrinho) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT FK_contem2 FOREIGN KEY (id_livro) REFERENCES tb_livro(id_livro) ON DELETE CASCADE ON UPDATE CASCADE 
);

-- usei CPF como FK para distinguir as compras de cada cliente.
CREATE TABLE tb_carrinho(
id_carrinho INT PRIMARY KEY,
id_cliente INT NOT NULL,
CONSTRAINT FK_carrinho_idcliente FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente) ON DELETE CASCADE ON UPDATE CASCADE 
);

-- criei o atributo CPF e coloquei como PK pois todas as pessoas possuem apenas um CPF, fazendo assim ele único.
-- fiz a mudança de cpf para id_cliente.
CREATE TABLE tb_cliente(
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(60) NOT NULL,
nome_cliente VARCHAR(60) NOT NULL,
endereco VARCHAR(60) NOT NULL,
telefone VARCHAR(20) NOT NULL
);