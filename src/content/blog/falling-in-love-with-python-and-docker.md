---
title: "Falling in Love with Python and Docker"
standfirst: "How a teacher's need for reproducible environments turned two tools into the backbone of every course I build."
pubDate: 2026-06-10
lang: "en"
tag: "DevOps"
home: "tdimnet"
banner: "/assets/small-lab.png"
bannerAlt: "A laboratory in pixel art"
draft: false
---

When I started teaching, the hardest part was never the code. It was the
fifteen minutes at the start of every session spent fixing someone's broken
environment — a missing interpreter, a clashing version, a path that worked on
my machine and nowhere else.

## The reproducibility problem

Teaching is, at its heart, about reproducibility. If a concept only works when I
demonstrate it, I haven't taught anything. The same is true of software. So I
went looking for a way to hand every student an identical, disposable workspace.

> A good environment is invisible. You only notice it when it breaks — and a
> teacher cannot afford for it to break.

## A container per student

Docker turned that idea into something concrete. One Dockerfile, one command,
and every learner is running the exact same Python — down to the patch version.
Here is the skeleton I reach for in nearly every course:

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "main.py"]
```

It is almost boring in its simplicity — and that is the point. Boring
infrastructure is reliable infrastructure.

## What I tell my students

- Pin your versions. "Latest" is a promise nobody keeps.
- If it isn't in the Dockerfile, it doesn't exist.
- Optimise for the next person who reads this — it is usually you.

Python gave my students a language they could think in. Docker gave them a world
that behaved the same way twice. Together, they let me teach the ideas instead
of debugging the setup.
