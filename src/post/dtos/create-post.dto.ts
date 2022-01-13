import { IsEnum, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToStrings";
import { PostUser } from "../enums";

export class CreatePostDto{

    @IsString()
    name: string;

    @IsString()
    phone_number: string;

    @IsString()
    address: string;

    @IsEnum(PostUser,{
        message:`Opcion invalida. las opciones correctas son ${ EnumToString(PostUser)}`
    } )
    user: PostUser;

}