import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const CherryBlossom = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomRotation = Math.random() * 360;
  
  return (
    <motion.div
      className="absolute"
      initial={{ 
        top: -20,
        left: `${randomX}vw`,
        rotate: 0,
        scale: 0.5
      }}
      animate={{
        top: "100vh",
        left: [`${randomX}vw`, `${randomX + 20}vw`, `${randomX - 20}vw`],
        rotate: [0, randomRotation, randomRotation * 2],
        scale: [0.5, 1, 0.8]
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: "20px",
        height: "20px",
      }}
    >
      <svg viewBox="0 0 24 24" className="fill-sakura-300">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 4.9 13.4 5.6 12.6 5.9C12.8 6.2 13 6.6 13.2 7H13.7C15.7 7 17.3 8.3 17.8 10H18C20.2 10 22 11.8 22 14C22 16.2 20.2 18 18 18H16C15.7 18 15.4 17.9 15.1 17.7C14.6 17.3 13.9 17 13 17C12.1 17 11.4 17.3 10.9 17.7C10.6 17.9 10.3 18 10 18H6C3.8 18 2 16.2 2 14C2 11.8 3.8 10 6 10H6.2C6.7 8.3 8.3 7 10.3 7H10.8C11 6.6 11.2 6.2 11.4 5.9C10.6 5.6 10 4.9 10 4C10 2.9 10.9 2 12 2Z"/>
      </svg>
    </motion.div>
  );
};

const Index = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    document.title = "Japanese Café Club";
  }, []);

  // Cherry blossoms array with different delays
  const cherryBlossoms = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    delay: i * 0.5
  }));
  const upcomingEvents = [
    {
      title: "Weekly Language Exchange",
      date: "Every Thursday",
      time: "15:15 - 19:00",
      location: "South Campus",
      description: "We usually hang out, talk, play some games, and have fun making new friends ＼(´｡• ᵕ •｡)／",
    },
  ];

  const volunteers = [
    {
      name: "Karina Jørgensen",
      description: "",
    },
    {
      name: "Rebecca Larsen",
      description: "",
    },
    {
      name: "Roger Wan Bengini",
      description: "",
    },
    {
      name: "Pernille Cecilie Gundorff",
      description: "",
    },
    {
      name: "Benjamin Højgaard",
      description: "",
    },
    {
      name: "Frederik Hauschildt",
      description: "",
    },
    {
      name: "Sarah Birch Jessen",
      description: "",
    },
  ];

  const images = [
    {
      src: "/12.jpg",
      alt: "",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/13.jpg",
      alt: "",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/1.png",
      alt: "",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/7.jpg",
      alt: "",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/2.png",
      alt: "",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/4.jpg",
      alt: "",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/5.jpg",
      alt: "",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/6.jpg",
      alt: "",
      className: "row-span-2 col-span-2",
    },
  ];
  
  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="min-h-screen bg-wood-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-wood-900 mb-4">
            Welcome to Japanese Café
          </h1>
          <p className="text-xl text-wood-700 max-w-2xl mx-auto">
            Whether you're into language exchange or just want to meet cool people, come say hi! (≧◡≦)b
          </p>
        </motion.div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-wood-900 mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-wood-900 mb-6">How to Find Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className={`bg-white rounded-lg p-6 shadow-lg cursor-pointer 
                  ${!showMap ? 'hover:shadow-xl hover:-translate-y-1' : ''}
                  transition-all duration-300`}
                onClick={toggleMap}
                animate={{
                  rotateY: showMap ? 180 : 0,
                  zIndex: showMap ? 10 : 1
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <AnimatePresence mode="wait">
                  {!showMap ? (
                    <motion.div
                      key="directions"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start space-x-4"
                    >
                      <MapPin className="w-6 h-6 text-sakura-600 mt-1 animate-bounce" />
                      <div>
                        <h3 className="text-lg font-semibold text-wood-900 mb-2">South Campus</h3>
                        <p className="text-wood-700 mb-4">
                          Karen Blixens Plads 8<br />
                          2300 København S<br />
                          Building KUA3, Room 5B.1.08
                        </p>
                        <div className="space-y-2 text-wood-600">
                        <p>
                          We’ve moved to KUA3, 5B.1.08 in the law building. Access via skybridge from 11A, entrance 16, or entrance 76 from the metro.
                        </p>
                        <p>
                          Any questions? Message us on Instagram! (´｡• ω •｡)
                        </p>
                        </div>
                        <div className="mt-4 text-sakura-600 text-sm flex items-center gap-2">
                          <span>Click to see location</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            →
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <img
                        src="/3.png"
                        alt="South Campus"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <p className="text-wood-600 text-sm mt-2 text-center flex items-center justify-center gap-2">
                        <span>Click to show directions</span>
                        <motion.div
                          animate={{ x: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          ←
                        </motion.div>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <video 
                className="w-[600px] h-[400px] object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/guidevideo.mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </section>
      

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-wood-900 mb-6">Our Volunteers</h2>
          <ScrollArea className="h-[400px] rounded-lg border border-wood-200 bg-white p-4">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {volunteers.map((volunteer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="h-full" // Adjusts the height of each item
                >
                  <Card className="h-full"> {/* Ensure card takes up full height of parent */}
                    <CardHeader>
                      <CardTitle className="text-lg text-wood-900">{volunteer.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-wood-600 mt-2">{volunteer.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-wood-900 mb-6">Our Memories</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-lg overflow-hidden"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Index;
