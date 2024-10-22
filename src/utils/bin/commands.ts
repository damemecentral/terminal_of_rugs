// List of commands that do not require API calls
import * as bin from './index';
import config from '../../../config.json';

// Help command
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  for (let i = 0; i < commands.length; i++) {
    c += (i % 7 === 6) ? `${commands[i]}\n` : `${commands[i]} `;
  }
  return `Welcome to the Political Terminal!
\nHere are all the available commands:\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display your campaign shenanigans.`;
};

// Redirection commands
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`, '_blank');
  return 'Opening Github repository... and no, it wasn’t hacked by Russia.';
};

export const about = async (args: string[]): Promise<string> => {
  return `Hi, I'm ${config.name}. 
Welcome to the politically rigged terminal!
More about me:
'sumfetch' - summary of suspicious activities.
'resume' - my latest campaign strategy.
'readme' - my crypto promises.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`, '_blank');
  return 'Opening resume... Warning: It’s full of lies, just like a campaign speech.';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`, '_blank');
  return 'Opening GitHub... just like opening Pandora’s box.';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`, '_blank');
  return 'Opening LinkedIn... and you’ll probably be spammed by “thought leaders.”';
};

// Voting system-related commands
export const recount = async (args: string[]): Promise<string> => {
  return `Recount initiated... but it still says Trump. Try again or blame the rigged system.`;
};

export const riggedElection = async (args: string[]): Promise<string> => {
  return `This command has been flagged for irregularities. Just like a Nevada voting machine.`;
};

export const kamalaLaugh = async (args: string[]): Promise<string> => {
  return `*Kamala Harris laughs uncontrollably* Whatever you’re doing won’t work.`;
};

export const trumpTweet = async (args: string[]): Promise<string> => {
  return `404 Error: Trump's Twitter account has been banned. It's a dark day for democracy!`;
};

export const fakeNews = async (args: string[]): Promise<string> => {
  return `Command not found. Are you sure this isn't fake news?`;
};

export const voterFraud = async (args: string[]): Promise<string> => {
  return `Error: Too many duplicate requests! Is this voter fraud or just bad code?`;
};

export const electoralCollege = async (args: string[]): Promise<string> => {
  return `Congrats, you won the popular vote... but the terminal chose the electoral college winner. Better luck next time.`;
};

export const stormTheCapitol = async (args: string[]): Promise<string> => {
  return `Access denied. You’re not authorized to storm this terminal.`;
};

// Sudo command (Rickroll)
export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // Rickroll
  return `Permission denied: You don't have the power to run this command... not even Trump did.`;
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
