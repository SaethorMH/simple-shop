import { IoIosPerson } from "react-icons/io";
import Ratings from "./Ratings";

export default function Reviews({reviews}){

return(
<div>
      <h3 className="ml-40">Reviews:</h3>
      <div className="flex justify-around mx-12 text-center">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="m-3 p-3 bg-white border-2 border-[#305A89]">
              <IoIosPerson className="mx-auto size-6" />
              <p>{review.reviewerName}</p>
              <p>"{review.comment}"</p>
              <p className="flex justify-center gap-3 m-3 "><Ratings value={review.rating} /></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );

}

