import {
  badRequest,
  escapeHtml,
  hasHoneypotValue,
  isValidEmail,
  methodNotAllowed,
  parseRequestBody,
  redirect,
  sendEmail
} from "../src/lib/server/email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    methodNotAllowed(res);
    return;
  }

  try {
    const data = await parseRequestBody(req);

    if (hasHoneypotValue(data)) {
      redirect(res, "/merci/guide-b2");
      return;
    }

    const email = String(data.email ?? "").trim();
    const source = String(data.source ?? "site").trim();

    if (!email || !isValidEmail(email)) {
      badRequest(res, "Merci de renseigner une adresse email valide.");
      return;
    }

    await sendEmail({
      subject: `Nouvelle demande de guide B2 - ${source}`,
      replyTo: email,
      text: [
        "Nouvelle demande de guide B2 depuis le site Objectif B2 Espagnol.",
        "",
        `Email : ${email}`,
        `Source : ${source}`
      ].join("\n"),
      html: `
        <h1>Nouvelle demande de guide B2</h1>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Source :</strong> ${escapeHtml(source)}</p>
      `
    });

    redirect(res, "/merci/guide-b2");
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("La demande n’a pas pu être envoyée. Vous pouvez écrire directement à contact@objectif-b2-espagnol.fr.");
  }
}
