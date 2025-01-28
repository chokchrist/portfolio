import styles from "../../styles/Contact.module.css";
import backgroundImage from "../../assets/images/s-eychenne-les-routes-de-mon-enfance.jpeg";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Contact() {
  const title = "Let's work together!";
  const description =
    "Drop me a message, and let's turn your dreams into reality. Excited to collaborate on your next project!";
  const formData = ["Name", "Surname", "Email", "Phone Number"];

  const contact = useRef(null);
  const contactContainer = useRef(null);
  const contactImage = useRef(null);
  const contactForm = useRef(null);
  const contactFormTitle = useRef(null);
  const contactFormParagraph = useRef(null);
  const contactFormInputFields = useRef(null);
  const contactFormSubmitButton = useRef(null);

  useEffect(() => {
    const formTitle = new SplitType(contactFormTitle.current);
    const formParagraph = new SplitType(contactFormParagraph.current);
    const formInputFields = new SplitType(contactFormInputFields.current);

    const titleChars = contactFormTitle.current.querySelectorAll(".char");
    const paragraphWords =
      contactFormParagraph.current.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contact.current,
        start: "30% 30%",
        end: "150% 30%",
        scrub: true,
        markers: false,
      },
    });

    tl.set(contactImage.current, { visibility: "hidden" });
    tl.set(contactForm.current, { visibility: "hidden" });
    tl.set(contactFormInputFields.current, {
      visibility: "hidden",
      opacity: 0,
    });

    tl.fromTo(
      contact.current,
      { scaleX: 0.2, scaleY: 0.8 },
      { scale: 1, duration: 1 }
    );

    tl.fromTo(
      titleChars,
      { y: 100 },
      { y: 0, stagger: 0.02, visibility: "visible" },
      ">"
    );

    tl.fromTo(
      paragraphWords,
      { y: 100, opacity: 0 },
      { y: 0, stagger: 0.01, visibility: "visible", opacity: 1 },
      "<"
    );

    tl.fromTo(
      contactFormInputFields.current, //
      { y: 100, opacity: 0 },
      { y: 0, stagger: 0.5, visibility: "visible", opacity: 1 },
      ">"
    );

    tl.fromTo(
      contactFormSubmitButton.current,
      { opacity: 0 },
      { opacity: 1, visibility: "visible" }
    );

    tl.fromTo(
      contactImage.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, visibility: "visible" },
      ">"
    );

    return () => {
      formTitle.revert();
      formParagraph.revert();
      formInputFields.revert();
      tl.kill();
    };
  });

  return (
    <div className={styles["pin-spacer"]}>
      <div
        className="contact-container h-screen sticky top-0"
        ref={contactContainer}
      >
        <div
          ref={contact}
          className="px-2 pt-14 pb-10 h-full grid gap-8 sm:gap-0 sm:grid-cols-2 sm:px-5 sm:pt-14 sm:pb-6 m-auto bg-[#23161A] origin-center"
        >
          <div className="overflow-hidden">
            <div className="relative w-full h-[35vh] sm:h-full overflow-hidden ">
              <img
                ref={contactImage}
                src={backgroundImage}
                alt="placeholder"
                className="w-full object-cover h-full"
              />
            </div>
          </div>
          <div
            ref={contactForm}
            className="relative px-2 flex flex-col sm:justify-center sm:items-center sm:px-4 md:px-20"
          >
            <div className="w-fit">
              <div id="contact-header" className="mb-14">
                <h2
                  ref={contactFormTitle}
                  className="text-3xl font-bold mb-2 sm:text-4xl overflow-hidden"
                >
                  {title}
                </h2>
                <div
                  ref={contactFormParagraph}
                  className="font-thin leading-[110%]"
                >
                  {description}
                </div>
              </div>
              <form
                ref={contactFormInputFields}
                action="https://formspree.io/f/manqoyed"
                method="POST"
                className="sm:grid sm:grid-cols-2 sm:gap-4 sm:w-full"
              >
                {formData.map((data, index) => (
                  <div key={index} className="relative overflow-hidden">
                    <input
                      required
                      name={data}
                      type="text"
                      placeholder={data}
                      className="bg-transparent border-secondary-200 border-b-[0.5px] placeholder-secondary-600 w-full mb-2 px-2 py-2 appearance-none rounded-smd focus:outline-none "
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <textarea
                    required
                    name="message"
                    placeholder="Message"
                    className="bg-transparent border-secondary-200 border-b-[0.5px] placeholder-secondary-600 w-full mb-2 px-2 py-2 focus:outline-none resize-none"
                  />
                </div>
                <div className="mt-2 sm:col-span-2 sm:mt-6">
                  <div
                    ref={contactFormSubmitButton}
                    className="relative overflow-hidden inline-block border border-[#ebe9e5] rounded-lg"
                  >
                    <button className="relative my-2 mx-4">Get in touch</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
