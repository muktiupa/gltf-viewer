# GLTF Viewer

This is a React application to render and display a GLTF model in browser using `three.js` and `@react-three/fiber`.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates how to load and display a GLTF 3D model in a React application using the `@react-three/fiber` library.

## Features

- Load and display GLTF models
- Interactive controls to orbit around the model
- Basic lighting setup

## Installation

Follow these steps to clone and run the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/gltf-viewer.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd gltf-viewer
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Start the development server**:

    ```bash
    npm start
    ```

2. **Open your browser** and go to `http://localhost:3000` to view the application.

### `@mediapipe/tasks-vision` Error

If you encounter an error related to the `vision_bundle_mjs.js.map` file in the `@mediapipe/tasks-vision` package, follow these steps:

1. **Create a `.env` file in the root directory** and add the following line:

    ```plaintext
    GENERATE_SOURCEMAP=false
    ```

2. **Ensure the `.env` file is listed in `.gitignore`** to prevent it from being committed.

