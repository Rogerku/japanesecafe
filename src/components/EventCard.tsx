import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({ title, date, time, location, description }: EventCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className="p-6 hover:shadow-lg transition-shadow bg-white border-wood-100 cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <h3 className="text-xl font-semibold text-wood-900 mb-3">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-wood-600">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-wood-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-wood-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-wood-700 line-clamp-2">{description}</p>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-wood-50 border-wood-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-wood-900">{title}</DialogTitle>
            <div className="space-y-2 mt-4 text-wood-700">
              <div className="flex items-center">
                <CalendarDays className="w-5 h-5 mr-3" />
                <span className="font-medium">{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                <span className="font-medium">{time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span className="font-medium">{location}</span>
              </div>
            </div>
          </DialogHeader>
          <DialogDescription className="text-wood-700 mt-4 whitespace-pre-line text-base">
            {description}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventCard;