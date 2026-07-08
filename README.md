# Shrink Rate Calculator

A simple static web app for calculating material shrink rate and scale compensation.

## What it calculates

- Shrink amount
- Shrink percentage
- Scale factor
- Scale percentage
- Compensated model size for a new part

## Formula

```text
Shrink % = ((Target - Measured) / Target) * 100
Scale factor = Target / Measured
Compensated size = New target size * Scale factor
```

## Use on GitHub Pages

1. Create a new GitHub repo.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md`.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/root`.
6. Save.

Your calculator will publish as a GitHub Pages site.

## Example

Target size: `100 mm`  
Measured final size: `99.35 mm`

Scale factor: `1.006543`

That means you would scale the model to about `100.6543%`.
