---
title: OSF Jarvis
summary: Our Standing Father Jarvis was created for a Roblox group to manage part of its roleplay such as background checking, advanced metrics, activity tracking to give the feel of actual Intelligence Community Tools.
stack:
  - Python
  - FastAPI
  - MongoDB (PyMongo Async)
  - Discord.py
  - ro.py
visibility: private
repoUrl: https://github.com/kenthegreat8/OSF-JARVIS
featured: true
date: '2025-11-02'
screenshots:
  - src: https://media.discordapp.net/attachments/885655974239674398/1540442649188901074/image.png?ex=6a89f883&is=6a88a703&hm=2b37bb1e86ae0cd5da31913cca8a12d6bc8e292d5e1538de839039d767b8df72&=&format=webp&quality=lossless&width=1280&height=917
    caption: Discord Bot Image showing background check logs

  - src: https://media.discordapp.net/attachments/885655974239674398/1540442649561927702/image.png?ex=6a89f883&is=6a88a703&hm=ad5c5497a60fa02a947b70bd6c4e8aca823bf6ebe5bb3277fd19a13e5b45b5cc&=&format=webp&quality=lossless
    caption: Discord Bot showing users information with primary key being Discord ID through mongodb

---

## Overview

OSF Jarvis is a robust, asynchronous operations bot designed for high-level simulation roleplay environments. It bridges Discord automation with Roblox group APIs and external task management to simulate authentic Intelligence Community (IC) workflows.

## Architecture & Features

- **Asynchronous Data Layer:** Built using Python and asynchronous MongoDB operations via PyMongo/Motor to handle rapid concurrent database lookups, clearance checks, and metric logs without blocking.
- **Roblox & Discord Integration:** Leverages libraries like `discord.py` and `ro.py` to seamlessly sync user clearances, track activity, and automate background-checking protocols.
- **Error Handling & Logging:** Equipped with comprehensive structural error-catching to cleanly trace exceptions across API boundaries, ensuring high uptime during active roleplay operations.
- **Trello Sync:** Integrates with the Trello API to manage internal task assignment and status tracking directly through automated command flows.