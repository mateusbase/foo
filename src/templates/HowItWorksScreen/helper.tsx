import Committees from "./components/Committees";
import HowItWorks from "./components/HowItWorks";

type MenuContent = {
  [key: number]: JSX.Element;
};

export const menuContent: MenuContent = {
  1: <HowItWorks />,
  2: <Committees />,
  3: <div>testee</div>,
  4: <div>testee</div>,
  5: <div>testee</div>,
  6: <div>testee</div>,
  7: <div>testee</div>,
};
