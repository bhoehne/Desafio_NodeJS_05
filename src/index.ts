/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";


dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	class Aluno {
		nome;
		idade;
		nota;

		constructor(nome: string, idade: number, nota: number) {
			this.nome = nome
			this.idade = idade
			this.nota = nota
		}
	}

	const aluno1 = new Aluno('Bruno', 34, 5)
	const aluno2 = new Aluno('Renato', 34, 8)
	const aluno3 = new Aluno('Élisson', 4, 10)

	const alunos: Array<Aluno> = []

	alunos.push(aluno1, aluno2, aluno3)

	let somaDasNotas = 0
	alunos.forEach(aluno => somaDasNotas += aluno.nota)
	let somaDasIdades = 0
	alunos.forEach(aluno => somaDasIdades += aluno.idade)

	const somaDosAlunos = new Aluno('Soma', somaDasIdades, somaDasNotas)

	alunos.push(somaDosAlunos)


	const ObjectsToCsv = require('objects-to-csv');

	(async () => {
		const csv = new ObjectsToCsv(alunos);

		await csv.toDisk('./alunos.csv');

	})();
});



