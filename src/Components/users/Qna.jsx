import { useState } from "react";

const Qna = () => {
  const [isOpen, setIsOpen] = useState(Array(5).fill(false));

  const toggleAnswer = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  return (
    <div className="max-w-screen-xl my-32 mx-auto px-5 bg-white">
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
      <p className="text-neutral-500 text-xl mt-3">Frequently asked questions</p>
    </div>
    <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none" onClick={() => toggleAnswer(0)}>
            <span>What payment methods do you accept?</span>
            <span className={isOpen[0] ? "transition rotate-180" : "transition"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <p className={isOpen[0] ? "text-neutral-600 mt-3 animate-fadeIn" : "hidden"}>We accept payments via credit/debit cards, PayPal, and other secure online payment methods.</p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none" onClick={() => toggleAnswer(1)}>
            <span>What is your return policy?</span>
            <span className={isOpen[1] ? "transition rotate-180" : "transition"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <p className={isOpen[1] ? "text-neutral-600 mt-3 animate-fadeIn" : "hidden"}>We offer a 30-day return policy for all products. Items must be unused and in their original packaging.</p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none" onClick={() => toggleAnswer(2)}>
            <span>How can I track my order?</span>
            <span className={isOpen[2] ? "transition rotate-180" : "transition"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <p className={isOpen[2] ? "text-neutral-600 mt-3 animate-fadeIn" : "hidden"}>You can track your order using the tracking number provided in your order confirmation email.</p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none" onClick={() => toggleAnswer(3)}>
            <span>Do you offer international shipping?</span>
            <span className={isOpen[3] ? "transition rotate-180" : "transition"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <p className={isOpen[3] ? "text-neutral-600 mt-3 animate-fadeIn" : "hidden"}>Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary.</p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none" onClick={() => toggleAnswer(4)}>
            <span>Can I change or cancel my order?</span>
            <span className={isOpen[4] ? "transition rotate-180" : "transition"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <p className={isOpen[4] ? "text-neutral-600 mt-3 animate-fadeIn" : "hidden"}>Orders can be changed or canceled before they are processed for shipping. Please contact us as soon as possible if you need to make changes to your order.</p>
        </details>
      </div>
    </div>
  </div>
  );
};

export default Qna;
