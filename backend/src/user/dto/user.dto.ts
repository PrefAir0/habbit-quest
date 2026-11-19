import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class UserDto{

    @IsString({message: 'Логин должен быть строкой'})
    @IsNotEmpty({message: 'Логин обязателен для заполнения'})
    @MaxLength(50, {message: 'Слишком длинный логин (более 50 символов)'})
    @MinLength(4, {message: 'Слишком короткий логин'})
    login: string

    @IsString({message: 'Пароль должен быть строкой'})
    @IsNotEmpty({message: 'Пароль обязателен для заполнения'})
    @MinLength(6, {message: 'Пароль должен содержать минимум 6 символов'})
    @MaxLength(100, {message: 'Пароль должен быть не более 100 символов'})
    password: string

    // TODO Добавить валидацию timezone
    timezone: string
}