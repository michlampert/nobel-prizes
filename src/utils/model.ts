export interface NobelPrize {
    awardYear: string,
    category: {
        en: string,
        no: string,
        se: string
    },
    dateAwarded: string,
    prizeAmount: number,
}