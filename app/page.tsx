import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center">
      <section className="container-narrow py-16">
        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10">
            <Image
              src="/profile-placeholder.jpg" // Replace with your profile image
              alt="Your Name"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
              Hello, I'm <span className="text-accent">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-black/70 dark:text-white/70 mb-6 text-center md:text-left">
              Software Engineer & Designer
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <Link
                href="/projects"
                className="px-6 py-3 bg-foreground text-background rounded-md transition-opacity hover:opacity-90"
              >
                View Projects
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 bg-transparent border border-black/20 dark:border-white/20 rounded-md transition-opacity hover:opacity-70"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="prose max-w-none dark:prose-invert">
            <p className="mb-4">
              I'm a passionate software engineer and designer with a focus on creating
              beautiful, functional, and accessible web applications. With over X years
              of experience in the field, I've worked on projects ranging from small
              business websites to complex enterprise applications.
            </p>
            <p className="mb-4">
              My expertise includes front-end development with React and Next.js,
              back-end development with Node.js, and responsive design principles.
              I'm constantly learning and exploring new technologies to stay at the
              forefront of web development.
            </p>
            <p>
              When I'm not coding, you can find me [your hobbies/interests].
            </p>
          </div>
        </div>

        {/* Skills section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border border-black/10 dark:border-white/10 rounded-lg">
              <h3 className="font-medium mb-2">Frontend</h3>
              <ul className="text-sm text-black/70 dark:text-white/70 space-y-1">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML / CSS / JavaScript</li>
              </ul>
            </div>
            <div className="p-4 border border-black/10 dark:border-white/10 rounded-lg">
              <h3 className="font-medium mb-2">Backend</h3>
              <ul className="text-sm text-black/70 dark:text-white/70 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="p-4 border border-black/10 dark:border-white/10 rounded-lg">
              <h3 className="font-medium mb-2">Tools</h3>
              <ul className="text-sm text-black/70 dark:text-white/70 space-y-1">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-black/70 dark:text-white/70">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:your.email@example.com"
              className="px-4 py-2 bg-foreground text-background rounded-md transition-opacity hover:opacity-90"
            >
              Email Me
            </a>
            <a
              href="/resume.pdf" // Replace with your resume file
              className="px-4 py-2 bg-transparent border border-black/20 dark:border-white/20 rounded-md transition-opacity hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}