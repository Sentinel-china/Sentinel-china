# Public Assets Directory

This directory contains static assets that are served directly by the web server.

## Logo Files

Place your logo files here:

- `logo.png` - Main logo for header and footer (recommended size: 64px height)
- `logo.svg` - Vector logo (optional, for better scalability)
- `favicon.ico` - Website favicon (16x16, 32x32 pixels)

## Usage

Files in this directory are accessible via root path:
- `/logo.png` → references `public/logo.png`
- `/favicon.ico` → references `public/favicon.ico`

## Logo Requirements

### Format
- **PNG**: For raster images with transparency support
- **SVG**: For vector graphics (recommended for scalability)

### Size Guidelines
- **Height**: 32-64px (to fit in navigation bar)
- **Width**: Maintain aspect ratio
- **Background**: Transparent or white/dark variants

### File Naming
- `logo.png` - Default logo
- `logo-light.png` - Light theme variant (optional)
- `logo-dark.png` - Dark theme variant (optional)