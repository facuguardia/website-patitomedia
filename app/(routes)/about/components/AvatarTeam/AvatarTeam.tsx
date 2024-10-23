import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarTeamProps } from "./AvatarTeam.types";

export function AvatarTeam(props: AvatarTeamProps) {
  const { img } = props;

  return (
    <div>
      <Avatar>
        <AvatarImage src={img} />
        <AvatarFallback>
          <User className="w-32 h-32" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
