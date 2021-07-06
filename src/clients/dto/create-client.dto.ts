import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender } from '../../enums/gender.enum';
import { Unique } from '../../custom-validators/unique-validator';
import { IsCPF } from '../../custom-validators/cpf-validator';

export class CreateClientDto {
  @MinLength(3)
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsCPF()
  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  @MinLength(11)
  cpf: string;

  @IsString()
  @IsEmail()
  @Unique({
    message: 'This email address is already in use',
  })
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: `gender must be a one of this options: [${Gender.FEMALE}, ${Gender.MALE}, ${Gender.OTHER}]`,
  })
  gender: Gender;
}
