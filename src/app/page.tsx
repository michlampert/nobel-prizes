import data from "../data/data.json"
import { NobelPrize } from "../utils/model";
import Search from "../components/Search";

const nobelPrizes = data.nobelPrizes as NobelPrize[]

export default function Page() {

  return (
    <>
      <Search years={[...new Set(nobelPrizes.map(np => np.awardYear))]}/>
    </>
  )
}
