import { Helmet } from "react-helmet-async";

export default function Accessibility() {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement | Let Everyone In</title>
        <meta name="description" content="Let Everyone In is committed to WCAG 2.1 AA standards. Learn how to report accessibility issues and our commitment to ongoing improvement." />
        <meta property="og:title" content="Accessibility Statement | Let Everyone In" />
        <meta property="og:description" content="This website is built to WCAG 2.1 AA standards. Learn how to report accessibility issues." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leteveryonein.com/accessibility" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Accessibility Statement | Let Everyone In" />
        <meta name="twitter:description" content="This website is built to WCAG 2.1 AA standards. Learn how to report accessibility issues." />
      </Helmet>

      <section className="py-20 px-4 bg-background min-h-screen">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-serif font-bold mb-8">Accessibility Statement</h1>

          <div className="prose prose-lg dark:prose-invert">
            <p>
              Let Everyone In (a service of Steadfast Accessibility LLC) is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>

            <h3>Conformance status</h3>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p>
              This website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard, though we strive for full conformance.
            </p>

            <h3>Feedback</h3>
            <p>
              We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers on our site:
            </p>
            <ul>
              <li>E-mail: dan@leteveryonein.com</li>
            </ul>
            <p>
              We try to respond to feedback within 1 business day.
            </p>

            <h3>Assessment approach</h3>
            <p>
              Steadfast Accessibility LLC assessed the accessibility of this website by the following approaches:
            </p>
            <ul>
              <li>Self-evaluation using manual testing and assistive technologies.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
