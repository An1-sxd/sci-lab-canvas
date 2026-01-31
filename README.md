# Sci-Lab Canvas

A virtual laboratory canvas for scientific experiments.

## 🚀 Deployment

This project is configured to deploy automatically to **GitHub Pages** using GitHub Actions.

### Steps to Host on GitHub:

1.  **Create a New Repository** on GitHub named `sci-lab-canvas`.
2.  **Add the Remote** to your local project:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/sci-lab-canvas.git
    ```
3.  **Push the Code**:
    ```bash
    git push -u origin main
    ```
4.  **Enable GitHub Actions for Pages**:
    -   Go to your repository on GitHub.
    -   Click on **Settings** > **Pages**.
    -   Under **Build and deployment > Source**, select **GitHub Actions**.

The site will be available at `https://YOUR_USERNAME.github.io/sci-lab-canvas/`.

## 🛠️ Development

-   **Install dependencies**: `pnpm install`
-   **Run locally**: `npm run dev`
-   **Build**: `npm run build`
