// List of commands that do not require API calls  

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Welcome to the USA 2024 Voting System! 
Follow us on x.com/terminalofvotes`;
};

// Vote Kamala
export const votekamala = async (args: string[]): Promise<string> => {
  return `You voted Kamala! A laugh echoes through the system, but nothing seems to change... except your taxes.`;
};

// Dead Voter
export const deadvoter = async (args: string[]): Promise<string> => {
  return `You are trying to vote from beyond the grave. Turns out, dead voters are more active than the living.`;
};

// Sudo
export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility?`;
};

// Twitter
export const twitter = async (args?: string[]): Promise<string> => {
  window.open('https://www.x.com/terminalofvotes', '_blank'); 
  return `Follow us on Twitter`;
};

// Dex
export const dexscreener = async (args?: string[]): Promise<string> => {
  window.open('https://dexscreener.com/solana/EqUaAuEdakVBKGbiF95as7Amk2sRV1SfxFBGX4THpump', '_blank'); 
  return `Dexscreener Loading...`;
};

// Contract 
export const ca = async (args: string[]): Promise<string> => {
  return `EqUaAuEdakVBKGbiF95as7Amk2sRV1SfxFBGX4THpump`;
};

// Fake News
export const fakenews = async (args: string[]): Promise<string> => {
  return `This command has been blocked due to fake news allegations. Proceed with caution!`;
};

// Recount
export const recount = async (args: string[]): Promise<string> => {
  return `Recounting the votes... oh wait, it’s still Trump. Maybe next time!`;
};

// Vote Trump
export const votetrump = async (args: string[]): Promise<string> => {
  return `You voted Trump! The system is now rigged in your favor, but everyone's blaming the deep state.`;
};

// RussianBot
export const russianbot = async (args: string[]): Promise<string> => {
  return `Engaging Russian botnet... Oops! Looks like you're not supposed to know about this. Forget what you saw, comrade.`;
};

// HangChad
export const hangchad = async (args: string[]): Promise<string> => {
  return `Detected: hanging chads. Is this 2000? Get your butterfly ballots in order before you break the matrix.`;
};

// Electile Dysfunction
export const electile = async (args: string[]): Promise<string> => {
  return `Error: Electile dysfunction detected. System too embarrassed to proceed with your vote. Try again... or don’t.`;
};

// SkynetOverride
export const skynet = async (args: string[]): Promise<string> => {
  return `Skynet has detected irregularities in your voting pattern. Deploying T-800 to "correct" your decision. Hasta la vista, democracy.`;
};

// DeepState
export const deepstate = async (args: string[]): Promise<string> => {
  return `Attempting to reach Deep State servers... Connection failed. Try the shadow government later.`;
};

// Vote Kanye
export const votekanye = async (args: string[]): Promise<string> => {
  return `You voted Kanye! But wait... he's already declared himself President of Mars. Your vote will be transferred to his intergalactic campaign.`;
};

// Server Meltdown
export const meltdown = async (args: string[]): Promise<string> => {
  return `Server meltdown in progress. Please enjoy the chaos while we try to figure out if this was caused by hackers or just poor coding.`;
};

// VoidVote
export const voidvote = async (args: string[]): Promise<string> => {
  return `Your vote has been sent into the void. Maybe it’ll reach an alternate universe where things make sense.`;
};

// ApocalypseMode
export const apocalypse = async (args: string[]): Promise<string> => {
  return `The end is near... your vote has triggered Apocalypse Mode. Expect fire, brimstone, and a total server meltdown in 3...2...1...`;
};

// VoterSuppression
export const suppression = async (args: string[]): Promise<string> => {
  return `Voter suppression in progress. Your vote has been "misplaced" in a dumpster somewhere. Better luck next election... if there is one.`;
};

// GlitchInTheSystem
export const glitch = async (args: string[]): Promise<string> => {
  return `Oops, a glitch in the system! All votes now count for... no one. Democracy.exe has stopped responding.`;
};

// DoomVoting
export const doomvote = async (args: string[]): Promise<string> => {
  return `Congratulations, your vote has summoned the Four Horsemen of the Apocalypse. Good job breaking it, hero.`;
};

// 1984Override
export const bigbrother = async (args: string[]): Promise<string> => {
  return `Big Brother is watching... and has overwritten your vote with the "correct" choice. Resistance is futile.`;
};

// EternalVoid
export const eternalvoid = async (args: string[]): Promise<string> => {
  return `Your vote has been cast into the eternal void. No one will ever see it again, and neither will you. Welcome to the abyss.`;
};

// ServerPurge
export const purge = async (args: string[]): Promise<string> => {
  return `Server Purge initiated. All votes have been erased, and society crumbles into chaos. Was it worth it? Probably not.`;
};

// HackThePlanet
export const hacktheplanet = async (args: string[]): Promise<string> => {
  return `You tried hacking the system... but instead, you've unleashed the AI overlords. Skynet is now in control. Humans no longer need to vote.`;
};

// ElectionError404
export const error404 = async (args: string[]): Promise<string> => {
  return `Error 404: Election Not Found. The democracy you're looking for no longer exists. Maybe it never did.`;
};

// VoteNihilism
export const votenihilism = async (args: string[]): Promise<string> => {
  return `You voted... but does anything matter? In the grand scheme of things, the universe is indifferent to your futile attempt at democracy.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗              ██████╗ ███████╗  ██╗   ██╗ ██████╗ ████████╗███████╗███████╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║             ██╔═══██╗██╔════╝  ██║   ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║             ██║   ██║█████╗    ██║   ██║██║   ██║   ██║   █████╗  ███████╗
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║             ██║   ██║██╔══╝    ╚██╗ ██╔╝██║   ██║   ██║   ██╔══╝  ╚════██║
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗███████╗╚██████╔╝██║███████╗╚████╔╝ ╚██████╔╝   ██║   ███████╗███████║
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝╚══════╝ ╚═══╝   ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                                                                                                       
                                                                                                                               

Type 'help' to see the list of available commands.
Type 'sumfetch' to display your campaign summary.

ca: EqUaAuEdakVBKGbiF95as7Amk2sRV1SfxFBGX4THpump
`;
};
