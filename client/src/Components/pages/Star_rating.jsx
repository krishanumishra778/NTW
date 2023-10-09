

import {AiOutlineStar} from 'react-icons'
export const Star_rating = () => {
  return (
    <>
        {[...Array(5)].map(star =>{
            return(
                <AiOutlineStar/>
            )
        })}
    </>
  )
}
