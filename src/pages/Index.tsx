import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";


const Index = () => {
  useEffect(() => {
    document.title = "Japanese Café";
  }, []);

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
      src: "/1.png",
      alt: "Community members gathering",
      className: "row-span-2 col-span-2",
    },
    {
      src: "/2.png",
      alt: "Cozy café atmosphere",
      className: "col-span-1",
    },
  ];

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
            Whether you're into language exchange or just want to meet cool people, come say hi!
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
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start space-x-4 mb-4">
                <MapPin className="w-6 h-6 text-sakura-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-wood-900 mb-2">South Campus</h3>
                  <p className="text-wood-700 mb-4">
                    Karen Blixens Plads 8<br />
                    2300 København S<br />
                    Building KUA3, Room 5B.1.xx
                  </p>
                  <div className="space-y-2 text-wood-600">
                    <p>
                      We’ve moved to KUA3, 5B.1.xx in the law building. Access via skybridge from 11A, entrance 16, or entrance 76 from the metro.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="./3.png"
                alt="South Campus Building"
                className="w-full h-[280px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-wood-900 mb-6">Our Volunteers</h2>
          <ScrollArea className="h-[400px] rounded-lg border border-wood-200 bg-white p-4">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              {volunteers.map((volunteer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card>
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
