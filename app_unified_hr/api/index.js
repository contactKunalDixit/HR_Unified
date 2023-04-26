import express from 'express';
import mysql from 'mysql2';

const app = express();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'HR_Unified',
});

app.use(express.json());

app.get('/', (req, res) => {
	res.json('Hello from BACKEND SERVER');
});

app.get('/hragency', (req, res) => {
	const q = 'SELECT * FROM  HR_Agencies';
	db.query(q, (err, data) => {
		if (err) {
			res.json(err + '//' + 'There is an ERROR :(');
		}
		return res.json(data);
	});
});

app.post('/hragency', (req, res) => {
	const q =
		'INSERT INTO HR_Agencies (`name`,`phone`,`unit_street_address`,`city_address`,`zip_code`,`state`,`country`) VALUES (?)';
	let values = [
		req.body.name,
		req.body.phone,
		req.body.unit_street_address,
		req.body.city_address,
		req.body.zip_code,
		req.body.state,
		req.body.country,
	];
	db.query(q, [values], (err, data) => {
		if (err) {
			return err + '// ERROR ENCOUNTERED :(';
		}
		return res.json('Book has been created succesfully');
	});
});

app.listen(8800, () => {
	console.log('The server is working! ');
});
