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
      redirect(res, "/merci/contact");
      return;
    }

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (!name || !email || !message) {
      badRequest(res, "Merci de renseigner votre prénom, votre email et votre message.");
      return;
    }

    if (!isValidEmail(email)) {
      badRequest(res, "Merci de renseigner une adresse email valide.");
      return;
    }

    await sendEmail({
      subject: "Nouveau message - page contact",
      replyTo: email,
      text: [
        "Nouveau message depuis le site Objectif B2 Espagnol.",
        "",
        `Prénom : ${name}`,
        `Email : ${email}`,
        "",
        "Message :",
        message
      ].join("\n"),
      html: `
        <h1>Nouveau message - page contact</h1>
        <p><strong>Prénom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `
    });

    redirect(res, "/merci/contact");
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Le message n’a pas pu être envoyé. Vous pouvez écrire directement à contact@objectif-b2-espagnol.fr.");
  }
}
