import Image from 'next/image';

export default function Contact() {
  return (
    <div className="py-16 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-12">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <form
            className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 space-y-6 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <FormInput label="Name" type="text" id="name" />
            <FormInput label="Email" type="email" id="email" />
            <FormTextarea label="Message" id="message" rows={4} />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="T.K. LOGISTICS office"
            width={600}
            height={400}
            className="rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

function FormInput({ label, type, id }: { label: string; type: string; id: string }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
}

function FormTextarea({ label, id, rows }: { label: string; id: string; rows: number }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>
    </div>
  );
}
