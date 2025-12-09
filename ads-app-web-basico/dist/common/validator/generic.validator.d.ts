import { ClassConstructor } from 'class-transformer';
import { BaseValidator } from './base.validator';
import { IValidator } from './interface.validator';
export declare class GenericValidator<T extends object> extends BaseValidator implements IValidator {
    private readonly dtoClass;
    constructor(dtoClass: ClassConstructor<T>);
    validate(data: any): Promise<this>;
}
export declare function validate<T extends object>(dtoClass: ClassConstructor<T>, data: any): Promise<BaseValidator>;
