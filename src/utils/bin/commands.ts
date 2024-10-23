// List of commands that do not require API calls
import * as bin from './index';  // Ensure that './index' properly exports the commands
import config from '../../../config.json';  // Check the structure of config.json

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  for (let i = 0; i < commands.length; i++) {
    c += commands[i] + (i % 7 === 6 ? '\n' : ' '); // Add a newline after every 7 commands
  }
  return `Welcome! Here are all the available commands:\n\n${c}\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\nType 'sumfetch' to display summary.`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Welcome to the USA 2024 Voting System!\nFollow us on x.com/terminal_of_votes`;
};

// Resume (Ensure `config.resume_url` is properly defined in config.json)
export const resume = async (args: string[]): Promise<string> => {
  if (config.resume_url) {
    window.open(config.resume_url);
    return 'Opening resume...';
  } else {
    return 'Error: Resume URL not defined in config.';
  }
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
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
