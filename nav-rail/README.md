# Playground

Live site: [https://AliAlkan.github.io/Playground/](https://AliAlkan.github.io/Playground/)

## GitHub Pages

This repository is configured to deploy to GitHub Pages from `main` with the workflow in `.github/workflows/deploy-pages.yml`.

GitHub still needs one-time repository setup before the first deployment will succeed:

1. Open `Settings -> Pages` in the `AliAlkan/Playground` repository.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.

After that, every push to `main` will publish the latest build to the live URL above.
