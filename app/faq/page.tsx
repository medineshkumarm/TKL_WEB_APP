import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What services does T.K. LOGISTICS offer?",
      answer: "T.K. LOGISTICS offers a wide range of services including professional entry processing, total compliance management, classification and valuation assistance, import and compliance consulting, specialist cargo handling, and more. Please visit our Services page for a complete list."
    },
    {
      question: "How can I track my shipment?",
      answer: "We provide door-to-door tracking for all shipments. You can contact our customer service team with your shipment details, and they will provide you with real-time updates on your cargo's location and status."
    },
    {
      question: "What types of cargo can T.K. LOGISTICS handle?",
      answer: "We specialize in handling various types of cargo, including standard shipments, oversized and heavy lift cargo, dangerous goods, and second-hand machinery. Our team has expertise in managing complex logistics requirements for diverse industries."
    },
    {
      question: "How does T.K. LOGISTICS ensure compliance with customs regulations?",
      answer: "We have a team of licensed customs brokers and compliance experts who stay up-to-date with the latest customs regulations. We use advanced automation tools and provide total compliance management services to ensure all shipments meet regulatory requirements."
    },
    {
      question: "What are your warehousing capabilities?",
      answer: "We offer secure and efficient warehousing solutions at competitive rates. Our facilities are equipped to handle various types of cargo and provide short-term and long-term storage options based on your needs."
    },
    {
      question: "How can I get a quote for your services?",
      answer: "You can request a quote by contacting our sales team through the Contact page on our website. Please provide details about your shipment, including origin, destination, type of cargo, and any special requirements, for an accurate quote."
    }
  ]

  return (
    <div className="py-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

