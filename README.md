# Text Format Converter

A modern, minimalistic tool for converting text files between various formats.

## Features

- Convert EPUB files to TXT (MVP)
- Upload files locally or via URL
- Convert multiple files at once
- Responsive and intuitive user interface

## Prerequisites

Before you begin, you'll need to install the following on your system:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installing Prerequisites

1. Install Git:
   - Windows: Download and install from [git-scm.com](https://git-scm.com/)
   - macOS: Install using [Homebrew](https://brew.sh/): `brew install git`
   - Linux: Use your distribution's package manager, e.g., `sudo apt-get install git`

2. Install Node.js and npm:
   - Download and install from [nodejs.org](https://nodejs.org/)
   - This will install both Node.js and npm

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/text-format-converter.git
   cd text-format-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src`: Contains the source code
  - `/components`: React components
  - `/pages`: Next.js pages
  - `/lib`: Utility functions and modules
- `/public`: Static assets
- `/tests`: Test files

## Running Tests

- Run unit tests:
  ```bash
  npm test
  ```

- Run end-to-end tests:
  ```bash
  npm run test:e2e
  ```

## Deployment

This application is designed to be easily deployed to various platforms. Here are instructions for a few common options:

### Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the application:
   ```bash
   vercel
   ```

### AWS (using Elastic Beanstalk)

1. Install the AWS CLI and configure it with your credentials.

2. Install the Elastic Beanstalk CLI:
   ```bash
   pip install awsebcli
   ```

3. Initialize your EB application:
   ```bash
   eb init
   ```

4. Create an environment and deploy:
   ```bash
   eb create
   ```

## Troubleshooting

- If you encounter ENOENT errors, ensure you're in the correct directory.
- If you get permission errors when installing packages globally, try using `sudo` (on Unix-based systems) or running your command prompt as an administrator (on Windows).
- If the application fails to start, ensure all dependencies are installed correctly by running `npm install` again.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).