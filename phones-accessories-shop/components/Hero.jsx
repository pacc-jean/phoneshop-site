import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[600px] bg-gray-900"
      style={{
        backgroundImage: "url('/assets/hero-tech-banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Animated Text + Button container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          Your Next Device Awaits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white max-w-xl mb-8 drop-shadow-md"
        >
          Discover top-tier phones, slick accessories, and reliable repairs all in one spot.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 120 }}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-shadow shadow-md"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  );
}
