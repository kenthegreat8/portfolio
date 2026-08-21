---
title: TGEBot2 Integration Suite
summary: A high-performance synchronization and automation suite for Star Wars Coruscant Roleplay, bridging in-game Roblox data, Discord interactions, and a Nuxt 4 web dashboard through a FastAPI and Python backend.
stack:
  - Python 3.14
  - FastAPI
  - Pymongo Async
  - Discord.py
  - Nuxt 4
  - NuxtUI
  - TypeScript
  - Pendulum
  - Anyio
  - Custom Asynchronous Scheduler built for this project
  - Custom Webhook System built for this project
visibility: private
repoUrl: https://github.com/kenthegreat8/TGEBot2
featured: true
date: '2026-06-01'
screenshots:
  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451049616187432/image.png?ex=6a8a0056&is=6a88aed6&hm=1c7efb3fd3df1c06bad0d4eac454c0c98f416f5df5ef90c3d69c2350535d9e5e&=&format=webp&quality=lossless
    caption: Discord Bot Image showing a ban system logs

  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451050656636938/image.png?ex=6a8a0056&is=6a88aed6&hm=0640fd50315fd6e34b72fe3fd0979a2e7baabe43273fd1f657736e8669d68032&=&format=webp&quality=lossless
    caption: Discord Bot showing Automatic API error logger for auditing

  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451051411476500/image.png?ex=6a8a0056&is=6a88aed6&hm=1cadde11436dce1209e12d615353cd8849d6483774c4683cb78fafab37703df3&=&format=webp&quality=lossless
    caption: Discord Bot showing a verification workflow with our custom webhook systen

  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451052283895938/image.png?ex=6a8a0057&is=6a88aed7&hm=8aa41526ff3af5b635403af836e1318501f9e3ff83220021c9de8937e1cb4402&=&format=webp&quality=lossless&width=1024&height=905
    caption: Verification Instructions for users including in-game verification panel
  
  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451053018021978/image.png?ex=6a8a0057&is=6a88aed7&hm=6939607110865623dfc795263c96f67bce95bb58bc7e14bda6ca494fad4eec78&=&format=webp&quality=lossless
    caption: Visual Studio Code File Structure

  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451054087307285/image.png?ex=6a8a0057&is=6a88aed7&hm=268d5016c6f4a3779d11ad3d6f24ada2d309fcab56cdb7adaca60e8efa75b3aa&=&format=webp&quality=lossless
    caption: Roblox Studio Scripts used to make this project possible with MainModule being the most important followed by SessionsManager
  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451055597396028/image.png?ex=6a8a0057&is=6a88aed7&hm=6cd2e1f0bba580ad3f05fea0c1a87b4c1612336e1402941cab0b5ad459380b30&=&format=webp&quality=lossless
    caption: FastAPI automtic docs

  - src: https://media.discordapp.net/attachments/1324114397786013708/1540451056226537502/image.png?ex=6a8a0058&is=6a88aed8&hm=ffc8786e301419e770a54091071500c2805ab09697cacd4f1088d1afe6754b92&=&format=webp&quality=lossless
    caption: Picture of API documentation showing specific routers
---

## Overview

TGEBot2 is an enterprise-grade integration suite built for the [Star Wars: Coruscant Roleplay](https://www.roblox.com/games/9388793159/Star-Wars-Coruscant-Roleplay) Roblox ecosystem. This project modernizes community infrastructure by transitioning from a legacy JavaScript monolith to a high-performance asynchronous Python microservices architecture.

## Architecture Evolution

This system replaces legacy ExpressJS/Discord.js implementations with a modern, modular stack optimized for speed and concurrency:

| Feature | Legacy (API / Bot) | Current (API2 / Bot2) |
| :--- | :--- | :--- |
| **Language** | JavaScript | **Python 3.14+** |
| **Framework** | ExpressJS | **FastAPI** (High Performance) |
| **Library** | Discord.js (Outdated) | **Discord.py** |
| **Database** | Motor (Legacy) | **Pymongo Async** |

## Core Components & Structure

### ⚡ API2 & Bot2 (Backend Core)
- **API2:** A RESTful backend powered by **FastAPI**, handling real-time data exchange and webhooks directly from the Roblox game engine.
- **Bot2:** An asynchronous **Discord.py** bot implementation providing administrative oversight, verification pipelines, and community engagement features.

### 🖥️ Dashboard (Nuxt 4) *(Currently Down for Maintenance)*
- **Frontend Stack:** A modern web interface built with **Nuxt 4**, **TypeScript**, and **NuxtUI** designed for a game-themed administrative control panel.
- **Status:** The dashboard frontend is currently offline undergoing scheduled maintenance and architecture upgrades.

### 🛠️ Utility Toolkit (`misc/`)
A collection of reusable, modular Python utilities designed for asynchronous scalability:
- **Custom Scheduler:** Priority-based task execution utilizing `anyio`, `pendulum`, and `heapq`.
- **Webhook Queue:** Manages high-traffic Discord webhooks safely to prevent rate-limiting.
- **Pymongo Async Wrapper:** Modernized asynchronous MongoDB database interactions optimized for Python 3.14 performance.