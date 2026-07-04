import { useLayoutEffect } from "react";
import WebDevApp from "@/WebDevApp";

export default function WebDevLandingPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return <WebDevApp />;
}
