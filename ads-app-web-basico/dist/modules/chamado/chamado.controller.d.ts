import { Request, Response } from "express";
import { ChamadoService } from "./chamado.service";
export declare class ChamadoController {
    private readonly chamadoService;
    constructor(chamadoService: ChamadoService);
    consulta(): Promise<{
        listaChamados: import("./chamado.entity").Chamado[];
    }>;
    formularioCadastro(): {};
    formularioCadastroSalvar(dadosForm: any, req: Request, res: Response): Promise<void>;
}
