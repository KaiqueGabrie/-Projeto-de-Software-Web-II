export declare const helpers: {
    dateFormat: (date: string) => string;
    inc: (value: string) => number;
    json: (context: any) => string;
    'selected-option': (id: any, compareId: any, oldId?: any) => "" | "selected";
    isString: (value: any) => value is string;
    year: () => number;
    getError: (errors: any[], key: string) => any;
    getValue: (old: string, defaultValue: string) => string;
};
