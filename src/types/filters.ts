
export interface Filter {
    name: string;
    code: string;
    id: number;
    values: FilterValue[];
}

export interface FilterValue {
    code: string;
    name: string;
    id: number;
    groupId: number;
}
