import { IsInt, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from 'class-validator'

export class TemplateDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(50, {message: 'Название слишком длинное'})
    title: string
    
    @MaxLength(1000, {message: 'Описание слишком длинное'})
    description: string

    @IsInt()
    @IsNotEmpty()
    @Max(30, {message: 'Интервал может быть до 30 дней'})
    @Min(1, {message: 'Интервал не может быть отрицательным'})
    interval: number

    @IsString()
    @IsNotEmpty()
    userID: string 
}