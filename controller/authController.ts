import { Request, Response } from "express";
import { RegistrationRequest } from "../domain/authDomain"
export async function Login(req, res) {
    console.log('Inside login controller');
    console.log('Got the request body for the api call', req.body);
    console.log('Got the request header for the api call', req.headers['content-type']);
    res.send(req.body);
}

export async function Register(req: Request, res: Response) {
    console.log('Inside Register controller');
    console.log('Got the request body for the api call', req.body.first_name);
    let request = {} as RegistrationRequest;
    request.firstName = req.body.first_name;
    request.lastName = req.body.last_name;
    request.mobNumber = req.body.mob_number;
    request.email = req.body.email;
    request.password = req.body.password;
    console.log("after mapping to the user request", request)
    res.send(req.body);
}