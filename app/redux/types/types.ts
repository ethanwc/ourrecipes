export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';


interface IncreaseCountAction {
    type: typeof INCREASE_COUNT
}

interface DecreaseCountAction {
    type: typeof DECREASE_COUNT
}


export interface Counter {
    count: number
}

export type CountActionTypes = IncreaseCountAction | DecreaseCountAction;
