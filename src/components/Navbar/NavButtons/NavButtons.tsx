import { PagePaths } from "@/models/pagePaths";
import Link from "next/link";

export const HomeLink = () => {
  return <Link href={PagePaths.Home}>Home</Link>;
};

export const TwitchViewerLink = () => {
  return <Link href={PagePaths.TwitchViewer}>Twitch Viewer</Link>;
};

export const TrovoViewerLink = () => {
  return <Link href={PagePaths.TrovoViewer}>Trovo Viewer</Link>;
};

export const KickViewerLink = () => {
  return <Link href={PagePaths.KickViewer}>Kick Viewer</Link>;
};

export const YoutubeViewerLink = () => {
  return <Link href={PagePaths.YoutubeViewer}>Youtube Viewer</Link>;
};

export const TwitchFollowerLink = () => {
  return <Link href={PagePaths.TwitchFollower}>Twitch Follower</Link>;
};
