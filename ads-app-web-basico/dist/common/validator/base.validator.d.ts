export declare class BaseValidator {
    #private;
    get isError(): boolean;
    get getErrors(): string[];
    get getData(): any;
    protected validator(data: object): Promise<this>;
}
