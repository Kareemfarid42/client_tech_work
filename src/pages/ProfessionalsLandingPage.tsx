import { useLayoutEffect } from "react";
import ProfessionalsApp from "@/ProfessionalsApp";

export default function ProfessionalsLandingPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, []);
  return <ProfessionalsApp />;
}
