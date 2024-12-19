import { setActive } from "../states/navbar";
import { useDispatch, useSelector } from "react-redux";

export const useTheme = () => {
  const active = useSelector((state: any) => state.navbar.active);
  const dispatch = useDispatch();
  const setActiveFn = (i: number) => dispatch(setActive(i));

  return { active, setActive: setActiveFn };
};

export default useTheme;
