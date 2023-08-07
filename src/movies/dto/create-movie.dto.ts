import { IsNumber, IsString, IsOptional} from "class-validator";

export class CreateMovieDto{
    @IsNumber()
    readonly year: number;

    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString({each: true})
    readonly genres: string[];
}