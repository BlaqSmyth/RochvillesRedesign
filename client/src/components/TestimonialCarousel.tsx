import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

const fallbackTestimonials: Testimonial[] = [
  {
    name: "Joseph Chuma",
    company: "Highland Solicitors",
    role: "Founder",
    content: "Rochvilles & Co transformed our accounting processes. Their proactive tax planning saved us over £15,000 last year. The team is responsive, knowledgeable, and truly cares about our success.",
    rating: 5
  },
  {
    name: "Arthur Kopa",
    company: "A Kopa Constructions Ltd",
    role: "CEO",
    content: "As a construction company, managing finances and compliance can be complex. Rochvilles handles everything seamlessly - from VAT returns to strategic tax planning. Outstanding service!",
    rating: 5
  },
  {
    name: "Carmen Pipenco",
    company: "Hotel Quality Cleaning LTD",
    role: "CEO",
    content: "Switching to Rochvilles was the best decision for our growing business. Their cloud-based system gives us real-time insights, and their advice has been invaluable for our expansion plans.",
    rating: 5
  },
  {
    name: "Iana Marshall",
    company: "Landbridge Consulting LTD",
    role: "CEO",
    content: "Professional, reliable, and always ahead of deadlines. Rochvilles & Co has been instrumental in keeping our compliance on track while providing strategic financial guidance.",
    rating: 5
  },
  {
    name: "Judith Kwentoh",
    company: "J3 Business Consultancy LTD",
    role: "CEO",
    content: "The expertise and dedication of Rochvilles & Co are unmatched. They've helped us navigate complex tax regulations and optimize our financial operations with exceptional professionalism.",
    rating: 5
  },
  {
    name: "Ade Adewale",
    company: "Armour Energy LTD",
    role: "CEO",
    content: "Rochvilles provides exactly what we need - expert accounting services with transparent pricing. Their industry knowledge in the energy sector has been invaluable to our growth.",
    rating: 5
  },
  {
    name: "Chris Mundia",
    company: "West Kent Group LTD",
    role: "CEO",
    content: "Outstanding service from start to finish. Rochvilles & Co has transformed how we manage our finances, providing clear insights and proactive advice that drives our business forward.",
    rating: 5
  },
  {
    name: "Olagoke Sokoya",
    company: "Oatbuy2 Lets Properties",
    role: "CEO",
    content: "Managing property finances requires precision and expertise. Rochvilles delivers both with exceptional service. Their guidance on tax efficiency has significantly improved our bottom line.",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  
  // Fetch testimonials from CMS
  const { data: cmsTestimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
    select: (data) => data.filter(t => t.published),
  });
  
  // Use CMS data if available, fallback to hardcoded testimonials
  const testimonials = cmsTestimonials && cmsTestimonials.length > 0 ? cmsTestimonials : fallbackTestimonials;
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 left-0"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [180, 0, 180]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl bottom-0 right-0"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real businesses we've helped succeed
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <Card className="bg-background/80 backdrop-blur-sm border-2 shadow-2xl">
                  <CardContent className="p-8 md:p-12">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="mb-6"
                    >
                      <Quote className="h-12 w-12 text-primary/20" />
                    </motion.div>

                    <div className="flex mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </motion.svg>
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                      "{testimonials[current].content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"
                      >
                        <span className="text-xl font-bold text-primary">
                          {testimonials[current].name.charAt(0)}
                        </span>
                      </motion.div>
                      <div>
                        <div className="font-semibold text-lg">{testimonials[current].name}</div>
                        <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                        <div className="text-sm text-muted-foreground">{testimonials[current].company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="rounded-full shadow-lg"
                data-testid="button-prev-testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  data-testid={`button-testimonial-${index}`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="rounded-full shadow-lg"
                data-testid="button-next-testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
