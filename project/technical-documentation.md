# 🛠 Technical Documentation — Virtual CM

---

## 🔧 Tech Stack Overview (Open Source First)

| Layer | Technology |
|:---|:---|
| **Frontend** | Next.js 14 + TailwindCSS + Shadcn/UI |
| **Backend** | Supabase (Database, API, Auth, Storage) |
| **Authentication** | Clerk.dev initially ➔ plan to migrate to an Open Source alternative (e.g., Lucia, NextAuth.js, Supabase Auth) |
| **AI Content Generation** | Open Source LLMs (LLaMA, Mistral, Dolphin, etc.) + optional fallback to OpenAI |
| **Automation** | n8n.io + Trae AI IDE agents and flows |
| **Payments** | Flutterwave, KKiaPay, Qosic, Crypto (Polygon/Matic/USDC) |
| **Deployment** | Vercel (could migrate to Railway or self-hosted if necessary) |

**Note:**
- All technologies are selected with a **free-tier/open-source first** logic.
- Future migrations toward more independent, scalable hosting are anticipated.

---

## 📝 Frontend Architecture

- **Framework**: Next.js 14 App Router (`/app` directory)
- **Styling**: TailwindCSS (utility-first CSS)
- **Components**: Shadcn/UI (reusable React components)
- **Form Management**: React Hook Form + Zod validation
- **State Management**: Built-in React Context or lightweight libraries (Zustand if necessary)

**Structure Example:**
```plaintext
/app
  /dashboard
  /auth
  /profile
  /posts
/components
/lib
/utils
/public
```

---

## 📥 Backend & Database

- **Database**: PostgreSQL (managed by Supabase)
- **Auth & Security**: Supabase Auth (fallback plan), OAuth integration for social sign-ins
- **APIs**: Supabase Edge Functions and Serverless API routes via Next.js
- **Storage**: Supabase Storage for media (logos, images)
- **CRON Jobs**: Supabase scheduled functions or Vercel CRON triggers

**Main Tables:**
- `users`
- `profiles`
- `posts`
- `subscriptions`
- `schedules`

---

## 🧠 AI Integration

| Task | Technology |
|:---|:---|
| Text generation | Open Source LLMs (LLaMA 3, Mistral 7B, Dolphin, etc.) |
| Image generation | Stable Diffusion (SDXL, 1.5) via HuggingFace or Replicate API |
| Automation | n8n.io workflows, Trae AI IDE agents |

**Strategy:**
- Use open models locally or via free hosting (Replicate/HuggingFace)
- Only fallback to commercial APIs (OpenAI, Anthropic) if absolutely necessary

**Extended AI Content Management:**
- Images generated must be **editable** via an internal **editor**: change fonts, font sizes, reposition logos, edit text overlays.
- A custom lightweight **AI-powered editor** (similar to Canva) will be developed for visual post editing.
- Future scaling will allow editing of **generated videos** similarly.
- Inputs from external content sources (e.g., blog articles, Spotify stats for artists) will be supported to automatically create promotional visuals.
- Users will be able to **upload their own images and videos** instead of relying only on AI generation.
- Contact links, personal branding elements, and CTAs will be editable and added easily.

---

## 🌐 Social Media API Integrations

- **Meta Graph API**: Facebook Pages + Instagram Business posting
- **WhatsApp Business API**: (future)
- **Planned Integrations**: LinkedIn, TikTok, X (Twitter)

---

## 💳 Payments System

| Provider | Purpose |
|:---|:---|
| Flutterwave | Card and Mobile Money payments |
| KKiaPay | Alternative Mobile Money platform |
| Qosic Pay | Micro-transactions and Mobile Money |
| Crypto | Accept MATIC, USDC on Polygon network |

**Future proof**: Modular payment provider integration (easily switch or add new providers)

---

## 📚 Git Workflow Standards

| Type | Branch naming |
|:---|:---|
| Production | `main` |
| Development | `develop` |
| Features | `feature/feature-name` |
| Bugfixes | `bugfix/bug-name` |

**Commit Message Format (Conventional Commits)**:
```bash
feat: Add user profile creation
fix: Resolve auth error on login page
chore: Clean up old components
docs: Update API usage guide
```

**Rules:**
- 1 Pull Request (PR) per feature.
- No direct commits to `main` or `develop`.
- PR reviews are mandatory.

---

## 🛠 CI/CD and Deployment

- **Platform**: Vercel (default for fast deployment)
- **Branch Deploys**: Preview deployments on all PRs
- **Production Deploy**: Triggered from `main` branch merge

---

## 🌟 Future Technical Enhancements

- **Authentication Migration**: Move to Lucia or NextAuth.js if needed for full control
- **Self-Hosting Options**: Railway, Fly.io, or VPS if scaling requires it
- **Custom AI Agent Hosting**: Local inference of LLaMA/Mistral models to reduce costs
- **Dedicated n8n Server**: Full control on workflow execution without 3rd party limitations
- **Advanced Content Inputs**: Drop blog articles, Spotify stats, custom data for auto-promotion post generation

---

# ✅ End of Technical Documentation

---
