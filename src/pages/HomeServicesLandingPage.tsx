import { useLayoutEffect } from "react";
import HomeServicesApp from "@/HomeServicesApp";

export default function HomeServicesLandingPage() {
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, []);
  return <HomeServicesApp />;
}
