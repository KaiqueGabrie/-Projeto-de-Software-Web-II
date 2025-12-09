import { Chamado } from "./chamado.entity";
export declare class ChamadoService {
    getAll(): Promise<Chamado[]>;
    create(data: any): Promise<any>;
}
