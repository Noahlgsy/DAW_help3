import Fastify from "fastify";
import db from "./database.js";
import cors from "@fastify/cors";
import { Acteur, Film } from "./type.js";


const fastify = Fastify();
fastify.register(cors);

fastify.get("/Film", (request, reply) => {
  try { 
    const query = db.prepare("SELECT title FROM Film; "); 
    const result = query.all(); 
    reply.code(200).send(result); 
  } catch(error) { 
    console.log(error); 
    reply.code(500).send(); 
  }

});


fastify.post("/Film", (request, reply) => { 
  try {
    const { title } = request.body as Film; 
    const query = db.prepare("INSERT INTO Film (title) VALUES (?); ")
    const result = query.run(title); 
    reply.code(200).send(result); 
  } catch(error) {
    console.log(error); 
    reply.code(500).send(); 
  }

}); 

fastify.get("/Acteur", (request, reply) => {
  try { 
    const query = db.prepare("SELECT nom FROM Acteur; "); 
    const result = query.all(); 
    reply.code(200).send(result); 
  } catch(error) { 
    console.log(error); 
    reply.code(500).send(); 
  }

});


fastify.post("/Acteur", (request, reply) => { 
  try {
    const { nom } = request.body as Acteur; 
    const query = db.prepare("INSERT INTO Acteur (nom) VALUES (?); ")
    const result = query.run(nom); 
    reply.code(200).send(result); 
  } catch(error) {
    console.log(error); 
    reply.code(500).send(); 
  }

}); 

fastify.listen({ port: 8080 });