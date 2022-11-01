import { IsInt, Min, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @Min(1)
  @IsPositive()
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
