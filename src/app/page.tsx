import ContactForm from "@/components/form/ContactForm";
import BackgroundImage from "@/assets/background.jpg";

export default function Home() {
  return (
    <main
      className="grid grid-cols-[1fr] min-h-screen p-2 justify-center items-center"
      style={{
        background: `repeat center/500px url(${BackgroundImage.src})`,
      }}
    >
      <div className="mx-auto max-w-md p-6 bg-gray-800/80 rounded backdrop-blur-lg text-white">
        <h1 className="text-5xl font-bold text-center mb-6">Merry Claysmas!</h1>
        <ContactForm />
      </div>
    </main>
  );
}
