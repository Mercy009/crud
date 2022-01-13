import { CreatePostDto } from "./create-post.dto";
import { PartialType } from '@nestjs/mapped-types';

//Todos los campos que antes eran obligatorios ahora son opcionales, para poder edirtarlos 
export class EditPostDto extends PartialType(CreatePostDto){}