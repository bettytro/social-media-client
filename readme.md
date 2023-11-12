# Project Name

Welcome to my social media client, built by Noroff, and a refurbished workflow by me.

## Workflow Status

- Main Workflow: [![Install dependencies, run Prettier and EsLint + build & deploy on merge main](https://github.com/bettytro/social-media-client/actions/workflows/main.yml/badge.svg?branch=workflow)](https://github.com/bettytro/social-media-client/actions/workflows/main.yml)

## Configuration

This project is set up to run Prettier and ESLint on merge with main. In the issues tab I have recorded the results of those tests on a different branch. --fix will probably fix those errors.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the application: `npm run start`.

## Testing

There are 2 unit tests, one for checking token correctly set in localStorage, and one for checking that logout works and removes it again.

To run: npm run test:unit

There are also cypress set up with three different e2e tests. These tests focuses on logging in and logging out. There could also be written more tests in the future for posting to the social network.

To run: npm run test:e2e

## Branching

### Introduction

In this project, we follow a specific versioning and branching convention to ensure a structured and organized development workflow. The primary branch for workflows is the `workflow` branch. This branch serves as the starting point for various features, bugfixes, and other additions.

### Workflow Branch Naming Convention

- The primary branch for workflows is named `workflow`.
- All additions, whether they are new features, bugfixes, or enhancements, should branch off from the `workflow` branch.

### Branch Naming Format

When creating branches for additions, follow a consistent naming format:

- workflow/feature/addition-name
- workflow/bugfix/fix-name
- workflow/enhancement/enhancement-name

 `workflow`: Indicates that the branch is related to the workflow.
- `feature`, `bugfix`, `enhancement`: Describes the type of addition.
- `addition-name`, `fix-name`, `enhancement-name`: Describes the specific feature, bugfix, or enhancement.



