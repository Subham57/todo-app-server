import { RegistrationRequest } from "../domain/authDomain";
import { EmailCheck, generateRandomString } from "../repository/authRepository";

export async function RegisterUsecase(request: RegistrationRequest) {
    console.log("Inside RegisterUsecase");
    let EmailCheckResponse = await EmailCheck(request.email);
    if (EmailCheckResponse == false) {
        console.log("Email Id is already present: ", request.email);
        return false;
    }else{
        // External id Generate
        let externalId = generateRandomString(10, "User")
        // Password Hash
        // Table insert
    }

}

