import { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Dropdown icons

function FAQ() {
  const faqs = [
    { question: 'What courses are available on this platform?', answer: 'We offer a wide range of courses, including Web Development, Data Science, Machine Learning, Digital Marketing, UI/UX Design, and many more.' },
    { question: 'Are the certificates provided recognized by companies?', answer: 'Yes, all our certificates are recognized by top companies and universities, helping you enhance your resume.' },
    { question: 'Can I learn at my own pace?', answer: 'Absolutely! Our courses are designed to be flexible, allowing you to learn anytime, anywhere, at your convenience.' },
    { question: 'Are the instructors experienced?', answer: 'Yes, all our instructors are industry experts and professionals with years of experience in their respective fields.' },
    { question: 'Do I have lifetime access to the courses?', answer: 'Yes, once you enroll in a course, you get lifetime access to the content, including future updates.' },
    { question: 'Are the courses free or paid?', answer: 'We offer both free and paid courses. You can explore our course catalog to find the one that suits your needs.' },
    { question: 'How can I get support if I face any issues?', answer: 'You can reach out to our support team through the “Contact Us” section. We are available 24/7 to assist you.' },
    { question: 'Will I get practical, hands-on projects?', answer: 'Yes, many of our courses include hands-on projects and real-world case studies to ensure practical learning.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question-row">
            <p className="faq-question">{faq.question}</p>
            <div className="faq-icon" onClick={() => toggleFAQ(index)}>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
