When you run a command in the terminal, where does BASH look for that command?
=in the users ~/bin folder.
  
On a UNIX computer, how do you stop a running process?
= the control-c command to stop the running, or the command control-z for temporary stop.
What packages do you have installed via homebrew?

=gdbm		icu4c		openssl		postgresql	zsh
  hub		node		pcre		readline
  
On a UNIX computer, how do you find the process id of a running process?

=you run command ps ax | grep +  any program you are running. ex: command ps ax | grep google

In a terminal, what does control-c do?

=stops the current running process by sending SIGINT signal.

What would be the result of typing the following commands? 

The control-c command
=stops the current running process by sending SIGINT signal.

$ cd /Users/steve
=changes the current working directory to Steve's user directory.

$ mkdir foo
=creates a new directory within the current working directory.

$ touch bar
=creates a new file, of the name that follows the command, in the current working directory 

$ cd foo
=changes the working directory to the directory  foo.

$ touch bar
=creates a new file named 'bar' in the current working directory.

$ pwd
=prints the path to your current working directing to your terminal.

How do you set an environment variable in your shell?
=you run a command using the variable name and and the assignment operator ("=").

What keyboard shortcut do you use to split the screen in your editor?

= hold command+k, while pressing either left/right/up/down.

How do you create an alias in your shell?
=run the following command: alias [name]="[command]".

What does your ~/.gitconfig have in it? (paste the whole file here)
=[user] name = mehdiaminechant email = othercma@gmail.com

What is the difference between a relative and absolute path?
=A relative path is the path to a file within the current root directory, an absolute path is the path to the file within the entire file system.

Lets say you have the following file structure

~ └── Projects ├── pinterest-for-dogs │ └── package.json └── linkedin-for-dancers ├── README.md └── package.json And you were in the linkedin-for-dancers folder. 

What command would you use to copy the README.md file to the pinterest-for-dogs folder?
=cp README.md ../README.md command would successfully copy the README.md file to the pinterest-for-dogs folder.

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
= shift + command + f, which will search the entire project, but shift + f only searches the file that you are currently in.

What files or folders do you want all git repositories to ignore?

=the node_modules folder and all of it's contents as well as passwords, personal information...

What is the main difference between Array.map and Array.forEach in JavaScript?

=foreach: iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database)

=map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase).

