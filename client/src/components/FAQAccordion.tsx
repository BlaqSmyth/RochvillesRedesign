import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What accounting services do you offer?",
    answer: "We offer comprehensive accounting services including tax planning and returns, bookkeeping, payroll services, contractor accounting, compliance and audit support, and strategic financial planning. Our team is equipped to handle businesses of all sizes across various industries."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is transparent and tailored to your specific business needs. We offer competitive fixed-fee packages as well as customized solutions. Contact us for a free consultation to discuss your requirements and receive a personalized quote."
  },
  {
    question: "Do you work with contractors and freelancers?",
    answer: "Yes! We specialize in contractor accounting, including IR35 compliance, limited company management, and optimal tax structures for freelancers and contractors. We understand the unique challenges you face and provide dedicated support."
  },
  {
    question: "How quickly can you file my tax returns?",
    answer: "We work efficiently to meet all HMRC deadlines. For standard tax returns, we typically process them within 5-7 business days after receiving all necessary information. Rush services are available for urgent deadlines."
  },
  {
    question: "What areas do you serve?",
    answer: "We primarily serve businesses in Ilford, Essex, and throughout London. However, with our cloud-based systems, we can work with clients across the UK, providing the same high-quality service remotely."
  },
  {
    question: "Are you qualified and certified?",
    answer: "Yes, our team includes CIPA, AIA, IFA & CIM certified professionals. We maintain the highest professional standards and stay updated with the latest regulations and tax legislation."
  }
];

export default function FAQAccordion() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our accounting services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6 bg-background/50 backdrop-blur-sm hover-elevate transition-all"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left font-semibold hover:text-primary transition-colors"
                    data-testid={`faq-trigger-${index}`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="text-muted-foreground pt-2"
                    data-testid={`faq-content-${index}`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
