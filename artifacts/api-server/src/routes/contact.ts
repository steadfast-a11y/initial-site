import { Router } from "express";
import { db, contactSubmissionsTable } from "@workspace/db";
import { SubmitContactFormBody } from "@workspace/api-zod";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const parseResult = SubmitContactFormBody.safeParse(req.body);

  if (!parseResult.success) {
    res.status(422).json({
      error: "Validation failed",
      details: parseResult.error.message,
    });
    return;
  }

  const { name, email, company, websiteUrl, budgetRange, timeline, message } =
    parseResult.data;

  try {
    await db.insert(contactSubmissionsTable).values({
      name,
      email,
      company: company ?? null,
      websiteUrl,
      budgetRange: budgetRange ?? null,
      timeline: timeline ?? null,
      message,
    });

    req.log.info({ email }, "Contact form submission stored");

    res.status(201).json({
      success: true,
      message:
        "Thanks — we'll be in touch within one business day.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to store contact submission");
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please email dan@steadfast-accessibility.com directly.",
    });
  }
});

export default contactRouter;
