"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const milestones = [
  {
    title: "Our Vision",
    description:
      "In 2009, TK Logistics was founded with a vision to revolutionize the logistics and transportation industry...",
  },
  {
    title: "Humble Beginnings",
    description:
      "From its humble beginnings, TK Logistics quickly established itself as a reliable and innovative player in the logistics industry. With dedication, perseverance, and a customer-centric approach, the company steadily grew its network and capabilities, making significant strides in the field of transportation and cargo handling..",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Over the years, TK Logistics has handled and successfully executed thousands of shipments, ensuring the timely and secure delivery of goods to destinations far and wide. Our commitment to excellence and attention to detail have earned us the trust of numerous clients, making us their preferred logistics partner.",
  },
  {
    title: "Global Reach",
    description:
      "With a strong foundation built on integrity and transparency, TK Logistics expanded its reach beyond borders. Today, we proudly serve clients in over five countries, providing seamless logistics solutions for land, sea, and air transportation.",
  },
  {
    title: "Dedicated Professionals",
    description:
      "Throughout the journey, our team of dedicated professionals has remained the backbone of our success. Their expertise, coupled with cutting-edge technology and a customer-first mindset, has allowed us to continuously exceed expectations and set new standards in the logistics industry.",
  },
  {
    title: "Embracing the Future",
    description:
      "As we continue to grow and evolve, our commitment to delivering excellence remains unwavering. We look forward to the future with optimism, aiming to shape the logistics landscape and leave a lasting impact on the world of transportation.",
  },
  {
    title: "Our Promise",
    description:
      "At TK Logistics, we believe that every shipment tells a unique story, and we are dedicated to ensuring that each story is one of success, reliability, and complete customer satisfaction. Together, let's build a better world through seamless logistics solutions",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-45"></div>
          {milestones.map((milestone, index) => (
            <TimelineItem key={index} {...milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, description, index }: { title: string; description: string; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`flex items-center mb-8  ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-1/2 px-4 border border-silver-400 rounded-lg p-6 shadow-md">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
        {index + 1}
      </div>
      <div className="w-1/2 px-4"></div>
    </motion.div>
  );
}
