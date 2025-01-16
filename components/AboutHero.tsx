import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">About T.K. LOGISTICS</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in global logistics solutions since 2010.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="T.K. LOGISTICS team"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

