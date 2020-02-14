# Twitch Stream Clone

A streaming application that mimics Twitch.

## Tech Stack

- React
- Redux
- React-Router
- JSON Server
- Node-Media-Server

## Directories

- `client`: The React front-end
- `rtmp`: The Real Time Messaging Protocol (RTMP) Server
- `api`: The API server

## Getting started

In each directory (`client`, `rtmp`, `api`), run `npm start`. Navigate to `localhost:3000` to begin using the streaming app.

## To stream video

Use streaming software such as [OBS](https://obsproject.com/welcome). Cofigure your streaming software to stream to the RTMP server. Configuration can be found on [Node-Media-Server](https://github.com/illuspas/Node-Media-Server) for publishing live streams. Configuration should be to the id that you are trying to stream to.

## What this app demonstrates

- Navigating around to seperate pages in our SPA
- Ability for users login/logout using Google OAuth
- Handling forms in Redux
- CRUD Operations in React/Redux
- Error handling
