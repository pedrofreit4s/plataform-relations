// import {
//   BadRequestException,
//   Body,
//   Controller,
//   Get,
//   HttpException,
//   InternalServerErrorException,
//   NotAcceptableException,
//   Param,
//   Post,
// } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
// import { JsonWebToken } from 'src/libs/jwt.lib';
// import { createResponse } from 'src/libs/response.lib';
// import { ActiveMail } from 'src/mailers/ActiveAccount/active';
// import { UserService } from 'src/services/user.service';

// @Controller()
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post('account/register')
//   async register(
//     @Body() { name, email, password },
//   ): Promise<createResponse | HttpException> {
//     if (!email || !password)
//       return new BadRequestException('Por favor, complete todos os campos!');

//     if (await this.userService.userRepo.count({ where: { email } }))
//       return new BadRequestException('Esse email já foi cadastrado!');

//     const user = await this.userService.userRepo.save({
//       name: name ? name : '',
//       email,
//       password: await bcrypt.hash(password, 12),
//     });

//     if (!this.userService.createAccountActionsToken(user))
//       return new InternalServerErrorException(
//         'Desculpe, tivemos um problema interno. Avise a nossa equipe!',
//       );

//     const { token } = new JsonWebToken(null, { ...user });
//     const mailer = new ActiveMail();

//     try {
//       const mail = await mailer.sendMail(
//         {
//           from: `Provider <provider@emailmarketingnow.com.br>`,
//           to: user.email,
//           subject: 'Contas | Ative a sua conta',
//         },
//         user.email,
//         token,
//       );
//       console.log(mail);
//     } catch (error) {
//       console.log(error);
//     }

//     return new createResponse(true, {
//       message:
//         'Sua conta foi criada com sucesso, enviamos um email para confirmação da conta!',
//       token,
//     });
//   }

//   @Post('account/auth')
//   async auth(
//     @Body() { email, password },
//   ): Promise<createResponse | HttpException> {
//     const user = await this.userService.userRepo.findOne({ where: { email } });
//     if (!user)
//       return new NotAcceptableException(
//         'Não conseguimos encontrar uma conta com esse email!',
//       );
//     if (!(await bcrypt.compare(password, user.password)))
//       return new BadRequestException(
//         'Você digitou a senha errada, verifique e tente novamente!',
//       );
//     if (!(await this.userService.verifyAccountActions(user)))
//       return new BadRequestException(
//         'Sua conta não foi ativada, enviamos um novo e-mail para você ativar!',
//       );

//     delete user.password;
//     const jwt = new JsonWebToken(null, { ...user });

//     return new createResponse(true, {
//       message: 'Logado com sucesso! Redirencionando..',
//       token: jwt.token,
//     });
//   }

//   @Get('account/activate/:token')
//   async activateAccount(
//     @Param() { token },
//   ): Promise<createResponse | HttpException> {
//     return await this.userService.activateAccount(token);
//   }

//   @Get('account/verify-session/:token')
//   async verifySessionAccount(
//     @Param() { token },
//   ): Promise<createResponse | HttpException> {
//     if (!token)
//       return new BadRequestException('Não foi possível encontrar a sua sessão');

//     try {
//       const { payLoad } = new JsonWebToken(token, null);
//       delete payLoad.iat;
//       const user = await this.userService.userRepo.findOne({
//         where: { id: payLoad.id },
//       });
//       if (user.active !== 0) {
//         return new BadRequestException(
//           'Seu usuário não foi mais encontrado, possivelmente deletado.',
//         );
//       }
//       return new createResponse(true, {
//         name: user.name,
//         email: user.email,
//         createdAt: user.createdAt,
//       });
//     } catch (error) {
//       return new BadRequestException('Sessão expirada, faça login novamente!');
//     }
//   }
// }
