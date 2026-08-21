---
title: OSF Admin
summary: A comprehensive Discord bot and administrative backend built to manage group operations, automated recruitment postings, server start-up systems (SSU), and community suggestions for large-scale roleplay communities.
stack:
  - Python
  - FastAPI
  - MongoDB (PyMongo Async)
  - Discord.py
visibility: private
repoUrl: https://github.com/kenthegreat8/OSF-Admin
featured: true
date: '2025-10-15'
screenshots:
  - src: https://media.discordapp.net/attachments/588978698347216910/1540438437986046042/image.png?ex=6a89f497&is=6a88a317&hm=248dff93fb06139b80a02bf11c24bbae36aeb5260eb68417265355b6f5463f8e&=&format=webp&quality=lossless
    caption: Discord Bot Image of a recruitment shout via OSF Admin(istrator)

  - src: https://media.discordapp.net/attachments/588978698347216910/1540438438472458280/image.png?ex=6a89f497&is=6a88a317&hm=700c3b2a3bdc5be455056836cd769c1b069805ee94d02c7dc0bf60ab584ad282&=&format=webp&quality=lossless
    caption: Discord Bot showing events/Server Start Up System

  - src: https://media.discordapp.net/attachments/588978698347216910/1540438439097270332/image.png?ex=6a89f497&is=6a88a317&hm=188a8301bff62a0691c1613a4f6e2a71d5d03ab0285242dfaa0fd9115f417995&=&format=webp&quality=lossless
    caption: Discord Bot showing a presidential shout (roleplay)

  - src: https://media.discordapp.net/attachments/588978698347216910/1540438439521165413/image.png?ex=6a89f497&is=6a88a317&hm=664aabf74280be346a76de3fda53e977c4efd7a3f5741f4a49d417147036011e&=&format=webp&quality=lossless
    caption: Discord Bot suggestions with its own events system once a certain amount of reactions is reached and automatic suggestion number count
---

## Overview

OSF Admin is a centralized management and automation system designed to streamline communication, recruitment, and event scheduling for structured group environments. It replaces manual administrative overhead with robust Discord embeds, dynamic button states, and automated lifecycle tracking.

## Core Features & Architecture

- **Shout & Recruitment System:** Automates department-specific recruitment announcements (Government, Business, and Criminal paths) and manages shout types with conditional button controls (e.g., dynamically disabling Tryout & Ping actions based on post structure).
- **Server Start-Up (SSU) Integration:** Manages official community event alerts, ping routing (`@here`), and direct Roblox connection triggers to coordinate high-population server sessions.
- **Suggestion Board Automation:** Tracks community-driven proposals with interactive voting mechanisms, real-time upvote/downvote tallies, and structured approval tracking.
- **Asynchronous Data Handling:** Built using Python and asynchronous database operations to ensure zero latency during high-traffic community events and administrative actions.