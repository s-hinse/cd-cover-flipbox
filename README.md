# CD Cover Flipbox

A WordPress Gutenberg block plugin that displays an image which transforms on hover (or tap on mobile) to show scrollable info text, with multiple animation options and customizable effects.

## Description

CD Cover Flipbox is a simple yet powerful Gutenberg block that allows you to create an interactive flipbox element. The front side displays an image (like a CD cover), and when a user hovers over it (or taps on mobile), it transforms to reveal a scrollable text area on the back side. Choose from multiple animation styles (horizontal flip, vertical flip, grow from middle, or no animation) and customize the appearance with optional shadow effects.

## Features

- Square format image display
- Multiple animation options:
  - Horizontal flip (default)
  - Flip from top
  - Grow from middle
  - Fade in / fade out
- Optional shadow effect
- Scrollable text area on the back side
- Customizable size
- Customizable background and text colors for the back side
- Works on both desktop and mobile devices


## Installation

1. Upload the zipped folder on the "Add plugins" page in WordPress backend or upload the `cd-cover-flipbox` folder to the `/wp-content/plugins/` directory 
2. Activate the plugin through the 'Plugins' menu in WordPress
3. The block will be available in the Gutenberg editor under the 'Media' category

## Usage

1. Add the "CD Cover Flipbox" block to your page or post
2. In the sidebar settings panel, upload an image by clicking the "Select Image" button
3. Enter your info text on the back side of the flipbox in the main editor area
   - Select text to format it as bold or italic using the toolbar that appears
   - Select text to change its color using the text color option in the toolbar
4. Adjust the box size and background/default text colors in the sidebar settings panel
5. Choose your preferred animation type from the dropdown menu
6. Toggle the shadow effect on or off as desired
7. Save your page or post

## Customization Options

- **Image**: Select or remove the image displayed on the front side (in the sidebar)
- **Box Size**: Adjust the width and height of the flipbox (100px to 600px)
- **Background Color**: Change the background color of the back side
- **Text Color**: Change the default text color of the back side
- **Animation Type**: Choose from four different animation styles:
  - **Horizontal Flip**: Traditional side-to-side flip animation (default)
  - **Flip from Top**: Vertical flip animation from top to bottom
  - **Grow from Middle**: Back side grows from the center while front side fades out
  - **No Animation**: Directly shows the back side without any animation effect
- **Show Shadow**: Toggle the shadow effect on or off
- **Info Text**: Enter the text that will be displayed on the back side (in the main editor)
  - **Text Formatting**: Apply bold or italic styling to your text
  - **Text Colors**: Apply custom colors to specific parts of your text

## Development

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Setup

1. Clone the repository
2. Navigate to the plugin directory
3. Run `npm run setup` to install dependencies and build the project

Alternatively, you can run the steps manually:
```
npm install
npm run build
```

### Available Scripts

- `npm run setup`: Installs dependencies and builds the project (useful for initial setup)
- `npm start`: Starts the development server with hot reloading
- `npm run build`: Builds the plugin for production
- `npm run format`: Formats code according to WordPress coding standards
- `npm run lint:css`: Lints CSS files
- `npm run lint:js`: Lints JavaScript files
- `npm run packages-update`: Updates WordPress packages to their latest versions

### Building for Production

To build the plugin for production, run:

```
npm run build
```

This will create optimized files in the `build` directory.

## Requirements

- WordPress 5.8 or higher
- A theme that supports Gutenberg blocks
- Node.js and npm (for development only)

## Changelog

### 1.3.0
- Added multiple animation options (horizontal flip, flip from top, grow from middle, no animation)
- Added option to toggle shadow effect on/off

### 1.2.0
- Improved UI: Moved image selection/removal to the sidebar
- Simplified editing: Removed redundant info text entry from the sidebar

### 1.1.1
- Fixed editor styling to match frontend appearance

### 1.1.0
- Added text formatting options (bold, italic, and custom colors) for the info text

### 1.0.0
- Initial release

## License

This plugin is licensed under the GPL v2 or later.
