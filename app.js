const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASS}@cluster0.zzqbq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, 
	{useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log('Base de datos conectada'))
	.catch(e => console.log(e));


// motor de pantillas 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routing/Rutas'))
app.use('/mascotas', require('./routing/Mascotas'))


app.use((req,res, next) => {
	res.status(404).render("404", {
		titulo: "404", 
		descripcion: "Título de la descripción"
	});
})

app.listen(port, () => {
	console.log('servidor a su servicio en el puerto', port);
})