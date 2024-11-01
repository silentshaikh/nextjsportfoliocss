import { heroBtnList } from "@/utils/helper"
import HeroButton from "../HeroButton/HeroButton"


function ButtonList() {
  return (
    <div className="btnList">
      {
      heroBtnList.map((e) => {
        return <HeroButton value={e} key={e}/>
      })
    }
    </div>
  )
}

export default ButtonList
