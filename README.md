# Portfolio Website

This is my personal portfolio website, developed using Next.js, Tailwind CSS, and Typescript. The website is hosted on Vercel and Firebase, and the deployment is automated through GitHub Actions. Additionally, there is a secondary deployment available at [btkcodes.vercel.app](https://btkcodes.vercel.app).

## Live Demos
- Primary Deployment - Firebase: [btkcodes.web.app](https://btkcodes.web.app)
- Secondary Deployment - Vercel: [btkcodes.vercel.app](https://btkcodes.vercel.app)

## Technologies Used
- Next.js
- Tailwind CSS
- Typescript
- Vercel
- Firebase
- GitHub Actions

## Features
- Responsive design
- Interactive components
- Dynamic bento grid styling
- Automated deployment
- Continuous integration

## Usage
1. Clone the repository: `git clone https://github.com/your-username/portfolio.git`
2. Use Node.js from `.nvmrc` and npm 12.2.2. Install dependencies with `npm ci`.
3. Run the development server: `npm run dev`
4. Visit `http://localhost:3000` in your browser to view the website locally.

Run `npm run lint` to check the source. `npm run build` checks the project with TypeScript 7 and writes the static site to `out`. TypeScript 6 also stays installed for the Next.js ESLint preset, whose parser still uses the TypeScript 6 compiler API. Serve the export locally with `npm start` or use `./run_app start` with Docker Compose.

## Deployment
- The website is automatically deployed to Vercel and Firebase when changes are pushed to the `main` branch on GitHub.
- For secondary deployment, visit [btkcodes.vercel.app](https://btkcodes.vercel.app).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
