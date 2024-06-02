# Full-stack-application
This project is a system of registration of points for employees, developed with Node.js, Express and Sequelize, and using MySQL as a database. It allows you to record and view users' clock-in and clock-out times through a web interface and RESTful endpoints.
##Used-applications
### Node.js
We used the Express and Sequelize frameworks for server configuration and database interaction.

### HTML and CSS
We used basic HTML and CSS to structure and style the application interface.
</br>

## Framework Installation

### Step 1: Install Node.js

To use the frameworks, we first need to install Node.js.

1. **Download Node.js**:
   - Go to the official Node.js website: [Node.js](https://nodejs.org/)
   - Click the "LTS" (Long Term Support) button to download the recommended version.

2. **Install Node.js**:
   - Run the downloaded installer and follow the installation instructions.
   - Make sure the "Add to PATH" option is selected during the installation.

3. **Verify the Installation**:
   - Open the terminal (CMD) and type the following command to check if Node.js was installed correctly:
     ```sh
     node -v
     ```
   - Next, verify the npm (Node Package Manager) installation:
     ```sh
     npm -v
     ```

### Step 2: Install Express and Sequelize Packages

Now we need the Express and Sequelize packages in our project folder.

1. **Create the Project Directory**:
   - Navigate to the location where you want to create your project and run the command:
     ```sh
     mkdir project-name
     cd project-name
     ```

2. **Initialize the Node.js Project**:
   - In the project directory, initialize a new Node.js project with the command:
     ```sh
     npm init -y
     ```

3. **Install Express**:
   - In the terminal, install Express with the command:
     ```sh
     npm install express
     ```

4. **Install Sequelize and MySQL2**:
   - Still in the terminal, install Sequelize and the MySQL2 driver with the command:
     ```sh
     npm install sequelize mysql2
     ```

### Step 3: Project Structure

After installing the packages, your project structure should look similar to this:
</br>
</br>
project-name/
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
</br>
</br>
With this, the necessary frameworks and packages are installed and configured for use in the project.


## Node.js and Express

The `main.js` file initializes the Express server and sets up the routes for handling HTTP requests. Here's a breakdown of what each part of the `main.js` file does:

1. **Import Modules**: Import the necessary modules such as Express, Sequelize, body-parser, and path.

2. **Initialize Express and Middleware**: Set up Express and middleware for parsing JSON requests and serving static files.

3. **Sequelize Models**: Define the Sequelize models for `User` and `RegistroPonto`.

4. **Routes**: Define the routes for creating and viewing time logs.

5. **Database Connection**: Authenticate and synchronize the Sequelize models with the MySQL database.

6. **Start Server**: Start the Express server on the specified port.

## Sequelize ORM

Sequelize is used to interact with the MySQL database. It allows us to define models for our database tables and perform CRUD operations. In this project, we have two models: `User` and `RegistroPonto`.

### User Model

The `User` model represents the users of the system. It includes the following fields:

- `id`: Primary key, auto-incremented.
- `nome`: User's name.
- `email`: User's email, must be unique.
- `senha`: User's password.
- `cargo`: User's position or role.
- `creating_in`: Timestamp of when the user was created.
- `ataulized_in`: Timestamp of when the user was last updated.

### Time Log Model

The `RegistroPonto` model represents the time logs. It includes the following fields:

- `id`: Primary key, auto-incremented.
- `user_id`: Foreign key referencing the `User` model.
- `entrada`: Check-in time.
- `saída`: Check-out time.
- `creating_in`: Timestamp of when the log was created.

## HTML and CSS

The front-end of the application is built using basic HTML and CSS. It provides a simple form for users to input their check-in and check-out times.

## Functionality

### User Model

The user model is defined in the `main.js` file and is used to store user information.

### Time Log Model

The time log model is also defined in the `main.js` file and is used to store the check-in and check-out times of users.

### Endpoints

The application provides the following endpoints for interacting with the time logs:

- `POST /registro_ponto`: Create a new time log.
- `GET /registro_ponto`: Retrieve all time logs.
- `GET /registro_ponto/:id`: Retrieve a specific time log by ID.

## Running the Project

To run the project, follow these steps:

1. Make sure MySQL is running and properly configured.
2. Navigate to the project directory and iniciate the server.
   ```sh
   node main.js
    ```
3. Open your browser and go to http://localhost:8081 to see the front-end interface.
