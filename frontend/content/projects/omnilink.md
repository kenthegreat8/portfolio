---
title: OmniLink Downloader
summary: A self-hosted, lightweight, and memory-efficient media downloader that strips intrusive ads and trackers, supporting YouTube, TikTok, and Instagram downloads through a FastAPI backend and a browser extension companion.
stack:
  - Python
  - FastAPI
  - Docker
  - Vue 3
visibility: private
repoUrl: https://github.com/kenthegreat8/OmniLink
featured: false
date: '2026-03-10'
---

## Overview

OmniLink is a self-hosted, lightweight, and memory-efficient media downloader designed to strip away intrusive ads and trackers. It supports **YouTube**, **TikTok**, and **Instagram** video downloads through a clean Vuetify dashboard powered by a high-performance FastAPI streaming backend engine.

To bypass aggressive anti-scraping blocks sustainably without getting your IP banned, OmniLink employs an architecture that extracts and forwards ephemeral session strings directly via a companion browser extension—retaining total privacy with zero data storage.

## Core Features

- **Multi-Platform Support:** Downloader pipelines built cleanly for YouTube, TikTok, and Instagram Reels.
- **Async Threaded Pipe Streaming:** Offloads blocking read/write streams to background OS worker threads (`os.pipe`), protecting your backend API from 500 crashes and out-of-memory errors under heavy traffic.
- **Smart Dual-Environment Handling:** Automatically targets native desktop Chrome browser profiles while building locally, then shifts cleanly to client extension authentication when pushed live.
- **Privacy-Centric Architecture:** No cookies or session identifiers are ever preserved, tracked, or cached on the server.
- **Built-In Monetization:** Native UI placeholder integration directly wired to your Buy Me a Coffee page to fund future scaling.

## Project Structure

```text
OmniLink/
├── Backend/                 # FastAPI application
│   ├── routers/             # API stream route configurations
│   ├── services/            # Custom yt-dlp extraction service
│   └── main.py              # Application entry point
├── Frontend/                # Vue 3 / Vuetify SPA
└── omnilink-extension/      # Chromium Companion Bridge Extension
    ├── manifest.json        # Extension manifest mapping
    ├── background.js        # Background service worker token extractor
    └── content.js           # Secure webpage DOM event tunnel