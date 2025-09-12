import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar title="About" />
      <div className="flex flex-1 items-center justify-center pt-20">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-base-content mb-8 text-4xl font-bold">About Me</h1>
          <div className="prose max-w-none">
            <p className="text-base-content text-lg">This is the about page.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
