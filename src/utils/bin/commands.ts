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

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const recount = async (args: string[]): Promise<string> => {
  return `Sorry, we've tried counting this command three times, but it keeps coming up Trump. Try again, or maybe it's rigged.`;
};

export const riggedElection = async (args: string[]): Promise<string> => {
  return `This command has been flagged for suspicious activity, just like a Nevada vote. Better luck next time.`;
};

export const kamalaLaugh = async (args: string[]): Promise<string> => {
  return `*Kamala's cackle echoes in the terminal* — whatever you're trying, it ain't working.`;
};

export const trumpTweet = async (args: string[]): Promise<string> => {
  return `404 Error: Trump's Twitter account has been banned. You're on your own now!`;
};

export const fakeNews = async (args: string[]): Promise<string> => {
  return `This command has been blocked due to fake news allegations. Proceed with caution!`;
};

export const voterFraud = async (args: string[]): Promise<string> => {
  return `System error: Too many duplicate requests. Is this voter fraud?`;
};

export const electoralCollege = async (args: string[]): Promise<string> => {
  return `Congrats, you’ve won the popular vote... but the terminal is going with the electoral college. Try again.`;
};

export const stormTheCapitol = async (args: string[]): Promise<string> => {
  return `Access denied. You’re not authorized to storm this directory.`;
};


export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗              ██████╗ ███████╗   ██████╗ ██╗   ██╗ ██████╗ ███████╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║             ██╔═══██╗██╔════╝   ██╔══██╗██║   ██║██╔════╝ ██╔════╝
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║             ██║   ██║█████╗     ██████╔╝██║   ██║██║  ███╗███████╗
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║             ██║   ██║██╔══╝     ██╔══██╗██║   ██║██║   ██║╚════██║
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗███████╗╚██████╔╝██║███████╗██║  ██║╚██████╔╝╚██████╔╝███████║
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝
                                                                                                                               

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
