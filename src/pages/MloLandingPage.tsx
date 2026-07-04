import { useLayoutEffect } from "react";
import MloApp from "@/MloApp";

export default function MloLandingPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, []);
  return <MloApp />;
}
