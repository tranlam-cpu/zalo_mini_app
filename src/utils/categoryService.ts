import { useRecoilCallback } from "recoil";
import { categoryState, fetchDataToCategory } from "../state";

export function useLoadCateogry() {
  return useRecoilCallback(({ snapshot, set }) => () => {
    const loadable = snapshot.getLoadable(fetchDataToCategory);

    if (loadable.state === "hasValue") {
      set(categoryState, loadable.contents as any);
    }
  });
}
