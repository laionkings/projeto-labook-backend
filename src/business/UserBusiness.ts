import { UserDatabase } from "../dataBase/UserDatabase";
import { SignupInputDTO, SignupOutputDTO } from "../dtos/user/signup.dto";
import { TokenPayload, USER_ROLES, User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { TokenManager } from "../services/TokenManager";
import { IdGenerator } from "../services/idGenerator";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ) {}

    public signup = async (
        input: SignupInputDTO
        ): Promise<SignupOutputDTO> => {
        const { name, email, password } = input;

        const id = this.idGenerator.generate()

        const hashPassword = await this.hashManager.hash(password)

    
       const user = new User(
        id,
        name,
        email,
        password,
        USER_ROLES.NORMAL,
        new Date().toDateString()
      )
      
      const userDB = user.toDBModel()
      await this.userDatabase.insertUser(userDB)

      const payload: TokenPayload = {
        id: user.getId(),
        name: user.getName(),
        role: user.getRole()
      }

      const output: SignupOutputDTO = {
        token: this.tokenManager.createToken(payload)
      }

      return output
    }
}
