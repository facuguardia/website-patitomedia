import { ToggleTheme } from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-5">
      <Button>Patito Media esta a full</Button>
      <ToggleTheme />
    </div>
  );
}
