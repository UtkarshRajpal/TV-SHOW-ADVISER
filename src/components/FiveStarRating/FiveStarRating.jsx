import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  //declare star icon array
  const starList = [];
  //store the number of filled stars
  const starFillCount = Math.floor(rating);
  // is there a need for half star (yes/no)
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  //store the number of empty star
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);
  // push the filled star icons
  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  // push an half star icon accordingly
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  //push the empty star icons
  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
}
