## Meeting Transcriber

A simple web application that allows users to upload an audio recording of a meeting and generate a transcript using OpenAI’s whisper API.

## Project Overview

This project is a MVP builld to:

- Upload an audio file
- Transcribe speech to text
- Display the transcript
- Download transcript as a .txt file

The application is implemented using a full-stack Next.js architecture, where both frontend and backend logic live within the same project.

## Architecture Overview

## Tech Stack

- Framework: Next.js (Full-stack React framework)
- AI Service: OpenAI Whisper API
- Testing: Jest + React Testing Library

## Development setup

- ESLint
- Prettier
- Typescript for type safety

## Application Setup

- create .env.local file
- copy the content from .env.template
- replace the open ai key with your key

```bash
npm install

npm run dev

```

- Open [http://localhost:3000]

Further improvements

- Allow multiple file upload
- Allow user to edit the transcript and download
- Support translation
- Store transcripts in a database for allowing history view
- Show the upload progress
