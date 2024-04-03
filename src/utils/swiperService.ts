import { useRecoilCallback } from "recoil";
import { swiperState, fetchDataToSwiper } from "../state";

export function useLoadSwiper() {
  return useRecoilCallback(({ snapshot, set }) => () => {
    const loadable = snapshot.getLoadable(fetchDataToSwiper);

    if (loadable.state === "hasValue") {
      set(swiperState, loadable.contents as any);
    }
  });
}
