import { BaseEntity } from "typeorm";
export declare enum Prioridade {
    BAIXA = "Baixa",
    MEDIA = "M\u00E9dia",
    ALTA = "Alta",
    CRITICA = "Cr\u00EDtica"
}
export declare enum Situacao {
    Aberto = "Aberto",
    EmAndamento = "Em andamento",
    Testando = "Testando",
    Finalizado = "Finalizado"
}
export declare class Chamado extends BaseEntity {
    id: number;
    titulo: string;
    descricao: string;
    situacao: string;
    prioridade: Prioridade;
    criadoEm: Date;
    atualizadoEm: Date;
}
