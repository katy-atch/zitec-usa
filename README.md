# Zitec USA Commercial Site

This is a static website for showing the main contact info and products for Zitec, Inc.

As of 2025, the main tech stack for this site consists of:
- React.js 19 with TypeScript
- Node.js 22
- Bootstrap 5 for styling
- ESLint and Prettier for code formating
- Vite for local React development

This project is configured for VSCode development and includes some recommended extensions for automatic code formatting:
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) aka Prettier
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) aka ESLint
- [rvest.vs-code-prettier-eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) for reconciling differences between Prettier and ESLint configs

## Setting up Local Development

### Using the correct Node.js version
You can either install Node 22 globally on your machine, or you can use `nvm` to use the Node version specified in the `.nvmrc` of this project while developing in this repo.

If you want to use `nvm`, you can do so on Mac by running `brew install nvm`.

Then add the following lines to your `~/.bash_profile` or `~/.zshrc`

```bash
export NVM_DIR="HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh"
```

Run `nvm -v` to verify that the installation was successful (you made need `source` your bash/zsh profile first).

Then run `nvm use` - you should see some output, either confirming that Node 22 is being used, or prompting you to install it.

### Running locally
Once you have verified you are using Node 22 for this project, run:
- `npm i` to install all dependencies in the `package.json`
-  `npm run dev` to start a local vite server.

You should see your local development site running at http://localhost:5173/ in the browser.

### Commiting changes
This project uses `husky` to ensure linting as a `pre-commit` hook. You may need to install `husky` for this to work. 

Be sure to install the recommended VSCode extensions listed above, so that your code will be formatted on save in accordance with the lint rules.
