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
        Contact Me!
      </Header>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.32,
          delay: 0.1,
          type: "spring",
          stiffness: 120,
        }}
        className="max-w-2xl mx-auto bg-black/80 border border-white/10 rounded-xl shadow-md shadow-black/50 p-8"
      >
        <p className="text-center text-lg text-gray-300 mb-8">
          Thank you for checking out my website! If you have any questions or
          would like to get in touch, feel free to reach out to me.
        </p>
        <form
          id="contact-form"
          className=""
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
            }
            const form = document.getElementById(
              "contact-form",
            ) as HTMLFormElement;
            form.reset();
            toast.success("Message sent. Thanks for reaching out!");
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <TextInput
              placeholder="E-mail"
              type="email"
              name="email"
              required
              max={100}
              className="bg-black/40 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:border-white/30 focus:bg-black/60 transition-all"
            />
            <TextInput
              placeholder="Subject"
              name="subject"
              required
              min={3}
              max={200}
              className="bg-black/40 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:border-white/30 focus:bg-black/60 transition-all"
            />
          </div>
          <TextArea
            placeholder="Message"
            className="mb-4 bg-black/40 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:border-white/30 focus:bg-black/60 transition-all"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitButton className="group w-full mt-2">
            Send Message{" "}
            <FaPaperPlane className="group-hover:translate-x-1 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  );
}
