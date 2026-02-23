## Meeting Transcriber

A simple web application that allows users to upload an audio recording of a meeting and generate a transcript using OpenAI’s whisper API.

<img src="https://github.com/BhagyaPrasadSamarathunga/Assets/blob/main/Meeting-Transcribe.gif" width="600" />

## Live Demo

🔗 [Try the App](https://audio-transcriber-puce.vercel.app/)

## Project Overview

This project is a MVP builld to:

- Upload an audio file
- Transcribe speech to text
- Display the transcript
- Download transcript as a .txt file

The application is implemented using a full-stack Next.js architecture, where both frontend and backend logic live within the same project.

## Architecture Overview
<img src="https://github.com/BhagyaPrasadSamarathunga/Assets/blob/main/Meeting-Transcribe%20Architecture.png" width="600" />

## Tech Stack

- Framework: Next.js (Full-stack React framework)
- AI Service: OpenAI Whisper API
- Testing: Jest + React Testing Library

## Development setup

- ESLint
- Prettier
- Typescript for type safety

## Application Setup

- Create .env.local file
- Copy the content from .env.template
- Replace the open ai key with your key

```bash
npm install

npm run dev

```
- Open [http://localhost:3000]
  
## Running Tests

```bash
npm test

```


## Limitation

- File size limited to 25MB which supported by OpenAI Whisper API
- Number of language supports also dependent on OpenAI Whisper API guidelines. 

## Further improvements

- Allow multiple file upload
- Allow user to edit the transcript and download
- Support translation
- Store transcripts in a database for allowing history view
- Show the upload progress
- Increase unit test and E2E testing coverages.
- Improve error handling.
- Performance enhance by split long recordings into smaller segments for faster transcription. 
