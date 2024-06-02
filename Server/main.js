const express = require('express'); // Importando o módulo express
const bodyParser = require('body-parser'); // Importando o módulo body-parser para parsear requisições
const Sequelize = require('sequelize'); // Importando o módulo Sequelize para ORM com MySQL
const path = require('path'); // Importando o módulo path para manipulação de caminhos

// Declarações

const sequelize = new Sequelize('ponto', 'root', 'senha', { // Conexão com o banco de dados MySQL
    host: "localhost", // Endereço do servidor MySQL, neste caso, o host local
    dialect: 'mysql' // Dialeto a ser usado pelo Sequelize, neste caso, MySQL
});

const app = express(); // Inicializando o express
app.use(bodyParser.json()); // Configurando o body-parser para parsear JSON

const port = 8081; // Porta que o servidor vai escutar

// Servir arquivos estáticos da pasta "HTML"
app.use(express.static(path.join(__dirname, 'HTML')));

// Definindo o modelo para a tabela registro_ponto
const RegistroPonto = sequelize.define('registro_ponto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    entrada: {
        type: Sequelize.DATE,
        allowNull: false
    },
    saída: {
        type: Sequelize.DATE
    },
    creating_in: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false // Desabilita a criação automática de timestamps `createdAt` e `updatedAt`
});

// Sincronizando o modelo com o banco de dados
sequelize.sync().then(() => {
    console.log("Tables created");
}).catch((error) => {
    console.error("Error creating table:", error);
});

// Rota para inserir os dados de ponto
app.post('/registro_ponto', async (req, res) => {
    const { user_id, entrada, saída } = req.body;

    try {
        const newRegistroPonto = await RegistroPonto.create({
            user_id: user_id,
            entrada: entrada,
            saída: saída
        });
        res.status(201).json(newRegistroPonto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para visualizar todos os registros de ponto
app.get('/registro_ponto', async (req, res) => {
    try {
        const registros = await RegistroPonto.findAll();
        res.status(200).json(registros);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para visualizar um registro específico de ponto pelo ID
app.get('/registro_ponto/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await RegistroPonto.findByPk(id);
        if (registro) {
            res.status(200).json(registro);
        } else {
            res.status(404).json({ error: 'Registro não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para servir o arquivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});

// Autenticação com o banco de dados MySQL usando Sequelize
sequelize.authenticate().then(() => {
    console.log("Connected"); // Mensagem de sucesso na conexão
}).catch(erro => {
    console.log("Error connecting to the database:", erro.message); // Mensagem de erro na conexão
});

// Inicialização do servidor Express
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`); // Mensagem de confirmação que o servidor está rodando
});
