"use client";

import Header from "./ui/header";
import TextInput from "./ui/text-input";
import TextArea from "./ui/textarea";
import toast from "react-hot-toast";
import { sendEmail } from "../functions/send-email";
import { FaPaperPlane } from "react-icons/fa6";
import SubmitButton from "./ui/submit-button";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <section ref={ref} id="contact" className="scroll-mt-24">
      <Header>Contact</Header>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="max-w-xl"
      >
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          Want to discuss a project, collaboration, or just say hi? Send me a
          message.
        </p>
        <form
          id="contact-form"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            const form = document.getElementById(
              "contact-form",
            ) as HTMLFormElement;
            form.reset();
            toast.success("Message sent. I'll get back to you soon.");
          }}
          className="space-y-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              placeholder="Email"
              type="email"
              name="email"
              required
              max={100}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-50 placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
            />
            <TextInput
              placeholder="Subject"
              name="subject"
              required
              min={3}
              max={200}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-50 placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
            />
          </div>
          <TextArea
            placeholder="Your message..."
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-50 placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 transition-all"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitButton className="group w-full md:w-auto px-6 py-2.5 bg-zinc-50 text-zinc-950 font-medium rounded-lg hover:bg-zinc-200 transition-colors duration-150">
            Send Message
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  );
}
