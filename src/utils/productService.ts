import { useRecoilCallback } from "recoil";
import { productState, fetchDataToProduct } from "../state";

export function useLoadProduct() {
  return useRecoilCallback(({ snapshot, set }) => () => {
    const loadable = snapshot.getLoadable(fetchDataToProduct);

    if (loadable.state === "hasValue") {
      set(productState, loadable.contents as any);
    }
  });
}
