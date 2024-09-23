import { DeviceType, WindowTypeBreakpoints } from "@/utils/enums";
import { useEffect, useState } from "react";

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < WindowTypeBreakpoints.MOBILE) {
        setDeviceType(DeviceType.MOBILE);
      } else if (window.innerWidth < WindowTypeBreakpoints.TABLET) {
        setDeviceType(DeviceType.TABLET);
      } else {
        setDeviceType(DeviceType.DESKTOP);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}
