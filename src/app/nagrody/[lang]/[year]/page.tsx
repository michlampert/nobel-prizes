import { NobelPrize } from "@/utils/model";
import data from "@/data/data.json";
import Table from "@/components/Table"

const nobelPrizes = data.nobelPrizes as NobelPrize[]

export default function Page({ params }: { params: { year: string, lang: 'en' | 'no' | 'se' } }) {

    const nobelPrizesFiltered = nobelPrizes
        .filter(np => np.awardYear == params.year)

    return <Table nobelPrizes={nobelPrizesFiltered} lang={params.lang}></Table>
}