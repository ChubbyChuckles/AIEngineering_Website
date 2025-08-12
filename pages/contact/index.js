/* eslint-disable */
// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.subject.trim()) newErrors.subject = "Subject required";
    if (form.message.trim().length < 10)
      newErrors.message = "Message too short";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setSent(false);
    setServerError("");
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.error || "Failed to send. Please try again.");
      }
    } catch (err) {
      setServerError("Network error. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      id="main-content"
      data-section="contact"
      className="h-full bg-primary/30"
    >
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            noValidate
            onSubmit={onSubmit}
            className="flex-1 flex flex-col gap-6 w-full mx-auto relative"
            aria-describedby="form-errors"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <div className="flex-1">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  type="text"
                  placeholder="name"
                  aria-invalid={!!errors.name}
                  className="input"
                />
                {errors.name && (
                  <p className="text-xs text-accent mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  placeholder="email"
                  aria-invalid={!!errors.email}
                  className="input"
                />
                {errors.email && (
                  <p className="text-xs text-accent mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                type="text"
                placeholder="subject"
                aria-invalid={!!errors.subject}
                className="input"
              />
              {errors.subject && (
                <p className="text-xs text-accent mt-1" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="message"
                aria-invalid={!!errors.message}
                className="textarea"
              ></textarea>
              {errors.message && (
                <p className="text-xs text-accent mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              className="btn rounded-full border border-white/50 max-w-[190px]
              px-8 transition-all duration-300 flex items-center justify-center gap-2
              overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={sending}
            >
              <span className="transition-all duration-500 flex items-center gap-2">
                {sending ? (
                  <>
                    <span className="animate-pulse">Sending</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-accent animate-bounce" />
                  </>
                ) : (
                  <>
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                      Let&apos;s talk
                    </span>
                    <BsArrowRight
                      className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
                duration-300 absolute text-[22px]"
                    />
                  </>
                )}
              </span>
            </button>
            <div aria-live="polite" id="form-errors" className="sr-only">
              {Object.values(errors).join(" ")}
            </div>
            {sent && (
              <div
                className="absolute -top-10 right-0 bg-green-600 text-white text-sm px-4 py-2 rounded shadow-lg animate-fade-in"
                role="status"
              >
                Message sent!
              </div>
            )}
            {serverError && !sent && (
              <div
                className="absolute -top-10 right-0 bg-red-600 text-white text-sm px-4 py-2 rounded shadow-lg animate-fade-in"
                role="alert"
              >
                {serverError}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
