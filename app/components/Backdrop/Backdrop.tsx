import { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";

const Backdrop = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop
      {... props}
      disappearsOnIndex={-1}
      appearsOnIndex={1}
      opacity={0.5}
      pressBehavior={"close"}
    />
  )
}

export default Backdrop;