import { ApiProperty } from "@nestjs/swagger/dist"

export class UsuarioLogin {

    @ApiProperty()
    id: number
    
    @ApiProperty()
    usuario: string

    @ApiProperty()
    senha: string
    
    @ApiProperty()
    token: string

}
