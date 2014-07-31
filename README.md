Tictactoe
===========

This directory (jsx) assumes that the user pre-compiles their JSX to plain 
javascript using Facebook's command-line jsx tool. index.html then links to 
the pre-compiled files in the build file. Details on the pre-compiling step
are provided below. In order to run this project, navigate to the jsx directory
and run 
    
    jsx --watch src/ build/


[Productionizing: Precompiled JSX](http://facebook.github.io/react/docs/tooling-integration.html)
================================
If you have npm, you can simply run npm install -g react-tools to install 
Facebook's command-line jsx tool. Facebook's command-line jsx tool will 
translate files that use JSX syntax to plain JavaScript files that can run 
directly in the browser. It will also watch directories for you and 
automatically transform files when they are changed; 
for example: jsx --watch src/ build/. 


