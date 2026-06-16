"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const database_js_1 = __importDefault(require("./database.js"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify = (0, fastify_1.default)();
fastify.register(cors_1.default);
fastify.get("/Film", (request, reply) => {
    try {
        const query = database_js_1.default.prepare("SELECT title FROM Film; ");
        const result = query.all();
        reply.code(200).send(result);
    }
    catch (error) {
        console.log(error);
        reply.code(500).send();
    }
});
fastify.post("/Film", (request, reply) => {
    try {
        const { title } = request.body;
        const query = database_js_1.default.prepare("INSERT INTO Film (title) VALUES (?); ");
        const result = query.run(title);
        reply.code(200).send(result);
    }
    catch (error) {
        console.log(error);
        reply.code(500).send();
    }
});
fastify.get("/Acteur", (request, reply) => {
    try {
        const query = database_js_1.default.prepare("SELECT nom FROM Acteur; ");
        const result = query.all();
        reply.code(200).send(result);
    }
    catch (error) {
        console.log(error);
        reply.code(500).send();
    }
});
fastify.post("/Acteur", (request, reply) => {
    try {
        const { nom } = request.body;
        const query = database_js_1.default.prepare("INSERT INTO Acteur (nom) VALUES (?); ");
        const result = query.run(nom);
        reply.code(200).send(result);
    }
    catch (error) {
        console.log(error);
        reply.code(500).send();
    }
});
fastify.listen({ port: 8080 });
