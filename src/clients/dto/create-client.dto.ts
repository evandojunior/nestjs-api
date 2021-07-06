import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Gender } from '../../enums/Gender.enum';

export class CreateClientDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsEnum(Gender)
  gender: Gender;
}
