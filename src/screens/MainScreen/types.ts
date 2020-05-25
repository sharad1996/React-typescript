export interface IEducationState {
    readonly data: IEducation[];
    readonly errors: object;
    readonly universities: [];
}

export interface IEducation {
    university: string,
    startYear: string,
    endYear: string,
    degree: string,
    field: string,
    grade: string
}
