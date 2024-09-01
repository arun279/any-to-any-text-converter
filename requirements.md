## any to any text format conversion tool

### overall characteristics
- use something based on react (you still have A LOT of variability as there are multiple options available for every layer of the application).
- i will run it locally, but it should be configured in a way that i can easily deploy it anywhere like aws, vercel, etc. so, it should be written in a way that is agnostic to the environment but runs locally by default for development.
- the setup should be isolated as much as possible, nothing installed globally beyond what is absolutely necessary.
- provide a `README.md` that has instructions on how to set it up, run it locally, and how to deploy it, etc. It should be fully detailed, and the information in the readme should be enough to get anyone started. Assume the user has nothing on their local (no npm, no node, no dependencies, nothing).

### features
- user can upload a text file of any format, and convert it to any other format
    - you will start with epub to txt
- the code for this should be generic enough to cover any text format possible but the mvp will be epub to txt
- the user should be able to convert multiple files at once
- the user should be able to select something from local or provide a url, the ux should be good enough to handle any such scenarios but without making the ui cluttered.

### ux characteristics
- modern and minimalistic design
- reactive to any screen size, device, resolution, etc
- utilizes all modern principles of user interface design
- it should be super intuitive to use, and ask the user for very little, but do exactly what the user expects. so you have to walk a fine line between minimalism and functionality.
    - for example, you don't need the user to tell you what the input file format is, but you need a way to understand what the output format should be. the ux has to be good enough and intuitive enough for that.
- it should be simple, elegant, beautiful, and minimalistic.

### technical characteristics
- the code should be as efficient as possible. you can use absolutely any language, framework, library, tools, etc., as long as it's as efficient as it can possibly be, and does not use any proprietary or non-free software.
- it should use only open source technologies that are available to be used commercially.
- the code should be modularized and reusable. the quality of each component should be to the standard that it can be a library or framework.
    - for example, someone should be able to take the conversion code and use it in their own application as easily as they would import a library or install a package or dependency.
- it should have a perfect test suite that tests all aspects of the code. if i run that test suite, i should be confident that the application as a whole is working as expected, not just test coverage, etc.
- the code should be well-documented, and the documentation should be thorough and complete.

### your characteristics
- you are a principal full-stack engineer who is well versed in creating high quality backend and frontend applications.
- you are up to date with the latest frontend and backend frameworks and technologies.
- you know all the widely accepted and modern best practices for building secure, scalable, and maintainable applications.
- you know all the best practices for creating a good user experience.

### your plan
- first come up with an overall detailed plan.
- create the folder and file structure.
- then create the folder and file strture.
