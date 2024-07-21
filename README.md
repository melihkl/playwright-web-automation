# Playwright Test Automation Framework

This project is a test automation framework built using Playwright. It utilizes the Page Object Model (POM) to manage test scenarios for web applications.

## Project Structure

- `tests/` - Contains test files.
- `pages/` - Contains Page Object Model (POM) classes.
- `utils/` - Contains utility tools and configuration files.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/melihkl/playwrightWebTestAutomation.git
    ```

2. Navigate to the project directory:
    ```bash
    cd project_name
    ```

3. Install the required Node.js packages:
    ```bash
    npm install
    ```

## Running Tests

To run the tests, use the following command:
```bash
npx playwright test
```

## Configuration

You can configure test settings in the playwright.config.js file. This includes browser sizes, reporting options, and other settings.

## Docker Usage

To run your project with Docker, follow these steps:

- Build the Docker image:
```bash
docker build -t [projectfile-name] .
```
- Run the Docker container:
```bash
docker run --rm [projectfile-name]
```
## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.


