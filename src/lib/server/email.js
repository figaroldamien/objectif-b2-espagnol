const DEFAULT_TO_EMAIL = "contact@objectif-b2-espagnol.fr";

export async function parseRequestBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  const contentType = req.headers["content-type"] ?? "";

  if (contentType.includes("application/json")) {
    return JSON.parse(rawBody || "{}");
  }

  return Object.fromEntries(new URLSearchParams(rawBody));
}

export function redirect(res, location, statusCode = 303) {
  res.writeHead(statusCode, { Location: location });
  res.end();
}

export function badRequest(res, message = "La demande est invalide.") {
  res.statusCode = 400;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(message);
}

export function methodNotAllowed(res) {
  res.statusCode = 405;
  res.setHeader("Allow", "POST");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Méthode non autorisée.");
}

export function hasHoneypotValue(data) {
  return typeof data.company === "string" && data.company.trim().length > 0;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendEmail({ subject, text, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing.");
  }

  if (!from) {
    throw new Error("RESEND_FROM_EMAIL is missing.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO_EMAIL,
      reply_to: replyTo,
      subject,
      text,
      html
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend rejected the email: ${response.status} ${detail}`);
  }
}
