# Git Repo Analyzer

A simple Node.js CLI tool that analyzes any public GitHub repository and returns structured JSON containing repository information, language statistics, commit data, and issue counts. This is an open source project use it however you like.

## Features

- Fetch repository details (stars, forks, description)
- Fetch language breakdown
- Count total commits
- Count open and closed issues
- Output everything in clean JSON format
- Works with any public GitHub repo

## Installation

### 1. Clone or download the project

```bash
git clone https://github.com/xdevman1/git-repo-analyzer
cd git-repo-analyzer
```

### 2. Install dependencies

```bash
npm install
```

### 3. (Optional) Link globally to use as a CLI command

```bash
npm link
```

## Usage

### Option A — Run directly

```bash
node bin/cli.js facebook/react
```

### Option B — Use globally

```bash
git-repo-analyzer vercel/next.js
```

## Output Example

```json
{
  "info": {
    "name": "react",
    "description": "The library for web and native user interfaces",
    "stars": 223000,
    "forks": 45000
  },
  "langs": {
    "JavaScript": 1500000,
    "TypeScript": 500000
  },
  "commits": {
    "total": 14000
  },
  "issues": {
    "open": 1100,
    "closed": 32000
  }
}
```

## Project Structure

```
git-repo-analyzer/
├── bin/cli.js
├── src/
│   ├── api/github.js
│   ├── analysis/
│   │   ├── repoInfo.js
│   │   ├── languages.js
│   │   ├── commits.js
│   │   └── issues.js
│   ├── utils/request.js
│   └── index.js
├── package.json
└── README.md
```

## Requirements

- Node.js 16+
- Internet connection (uses GitHub API)

## License
MIT License
