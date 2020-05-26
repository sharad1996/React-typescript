export interface IEducationState {
    readonly data: IEducation[];
    readonly errors: object;
    readonly universities: [];
}

export interface IEducation {
    university: string,
    startYear: Date | null,
    endYear: Date | null,
    degree: string,
    field: string,
    grade: string,
    description: string
}
