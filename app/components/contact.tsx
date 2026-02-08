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
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section ref={ref} id="contact" className="scroll-mt-24">
      <Header animateOpacity className="text-center">
        Get In Touch
      </Header>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-2xl mx-auto bg-midnight-800/60 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 md:p-10"
      >
        <p className="font-body text-center text-lg text-slate-300 mb-8">
          Thank you for checking out my website! If you have any questions or
          would like to collaborate, feel free to reach out.
        </p>
        <form
          id="contact-form"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
            }
            const form = document.getElementById(
              "contact-form",
            ) as HTMLFormElement;
            form.reset();
            toast.success(
              "Message sent successfully! I'll get back to you soon.",
            );
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <TextInput
              placeholder="Your Email"
              type="email"
              name="email"
              required
              max={100}
              className="bg-midnight-900/60 border border-slate-700/50 rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-teal/50 focus:bg-midnight-900/80 focus:ring-2 focus:ring-teal/10 transition-all"
            />
            <TextInput
              placeholder="Subject"
              name="subject"
              required
              min={3}
              max={200}
              className="bg-midnight-900/60 border border-slate-700/50 rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-teal/50 focus:bg-midnight-900/80 focus:ring-2 focus:ring-teal/10 transition-all"
            />
          </div>
          <TextArea
            placeholder="Your message..."
            className="mb-6 bg-midnight-900/60 border border-slate-700/50 rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-teal/50 focus:bg-midnight-900/80 focus:ring-2 focus:ring-teal/10 transition-all"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitButton className="group w-full">
            Send Message
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  );
}
