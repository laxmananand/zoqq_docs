---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

Welcome to **Zoqq** — your all-in-one platform for digital payments, wallet services, and seamless API integrations.
This guide will walk you through the basic steps to start integrating Zoqq APIs into your application.

---

## 📦 1. Create a Zoqq Account

Sign up at [Sign up at Zoqq](https://zoqq.com) and log in to access your developer dashboard.

---

## 🔑 2. Get Your API Keys

Once logged in:

1. Navigate to **Developer Settings > API Keys**  
2. Copy your **public** and **secret** keys  
3. Keep them secure — never expose your secret key on the frontend

---

## ⚙️ 3. Make Your First API Call

Here’s how to make a basic authenticated request:

```bash
curl -X GET https://api.zoqq.com/v1/accounts \
  -H "Authorization: Bearer YOUR_SECRET_KEY"

