import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/api", (req, res) => res.send("Express API on Vercel"));

app.get("/health", (req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

// Export the Express API
export default app;
