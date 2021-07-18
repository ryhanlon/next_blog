import { Fragment } from "react";
import Head from "next/head";

import ContactForm from "../components/contact/contact-form";

function ContactPage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          <title>Contact Me</title>
          <meta name="description" content="Send me your messages." />
        </title>
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
