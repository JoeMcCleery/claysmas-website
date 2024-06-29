import ContactForm from "@/components/form/ContactForm";
import BackgroundImage from "@/assets/background.jpg";

export default function Home() {
  return (
    <main
      className="relative grid grid-cols-[1fr] min-h-screen p-2 justify-center items-center"
      style={{
        background: `repeat center/500px url(${BackgroundImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div>
        <h1 className="text-5xl font-bold text-center my-8 text-white relative">
          Merry Claysmas!
        </h1>
        <div className="mx-auto max-w-md p-6 bg-gray-800/80 rounded backdrop-blur-lg text-white">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
