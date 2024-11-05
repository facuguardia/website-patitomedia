import Link from "next/link";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
} from "lucide-react";
import { AvatarTeam } from "../AvatarTeam";
import { CardTeamProps } from "./CardTeam.types";

export function CardTeam(props: CardTeamProps) {
  const {
    name,
    role,
    comment,
    image,
    facebook,
    github,
    instagram,
    linkedin,
    twitch,
    twitter,
  } = props;
  return (
    <div className="flex justify-evenly items-center">
      <div className="flex flex-col gap-4 items-center p-5 bg-muteds hadow-lg rounded-lg max-w-xs text-center">
        <AvatarTeam img={image} />
        <div className="mt-5">
          <h3 className="text-2xl font-semibold truncate">{name}</h3>
        </div>
        <div className="italic">
          <h4>{role}</h4>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400 break-words">
          <p>{comment}</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {instagram && (
            <Link href={instagram} target="_blank">
              <Instagram className="w-5 h-5 hover:text-slate-400 dark:hover:text-primary hover:scale-125  transition-all duration-300 ease-in-out" />
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank">
              <Github className="w-5 h-5 hover:text-slate-400 dark:hover:text-primary hover:scale-125  transition-all duration-300 ease-in-out" />
            </Link>
          )}
          {linkedin && (
            <Link href={linkedin} target="_blank">
              <Linkedin className="w-5 h-5 hover:text-slate-400 dark:hover:text-primary hover:scale-125  transition-all duration-300 ease-in-out" />
            </Link>
          )}
          {twitter && (
            <Link href={twitter} target="_blank">
              <Twitter className="w-5 h-5 hover:text-slate-400 dark:hover:text-primary hover:scale-125  transition-all duration-300 ease-in-out" />
            </Link>
          )}
          {facebook && (
            <Link href={facebook} target="_blank">
              <Facebook className="w-5 h-5 hover:text-slate-400 dark:hover:text-primary hover:scale-125  transition-all duration-300 ease-in-out" />
            </Link>
          )}
          {twitch && (
            <Link href={twitch} target="_blank">
              <Twitch className="w-5 h-5 hover:text-slate-400 dark:hover:text-primary hover:scale-125  transition-all duration-300 ease-in-out" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
