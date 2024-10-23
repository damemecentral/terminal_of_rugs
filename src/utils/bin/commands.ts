import { typeText } from '../utils/typing';

export const help = async (args) => {
  const commands = Object.keys(bin).sort().join(', ');
  let c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }

  const helpText = `Welcome! Here are all the available commands:\n\n${c}\n\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\nType 'sumfetch' to display summary.\n`;
  await typeText(helpText);
  return '';
};

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

// Contract 
export const ca = async (args: string[]): Promise<string> => {
  return `ca tba`;
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
`;
};
