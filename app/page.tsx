import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
// import TestimonialCarousel from "@/components/TestimonialCarousel";
import TestimonialCarouselWithImages from "@/components/TestimonialCarouselWithImages";
import LogisticsGame from "@/components/LogisticsGame";
import CounterMetrics from "@/components/CounterMetric";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Logistics Challenge
          </h2>
          <LogisticsGame />
        </div>
      </section>
      {/* counter metric section */}

      <CounterMetrics />

      {/* <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section> */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
          </h2>
          <TestimonialCarouselWithImages />
        </div>
      </section>
    </div>
  );
}
