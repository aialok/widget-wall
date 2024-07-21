import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from 'lucide-react';

interface BookQuoteWidgetProps {
  book: {
    title: string;
    author: string;
    quote: string;
    readBy: number;
  };
}

const BookQuoteWidget: React.FC<BookQuoteWidgetProps> = ({ book }) => {
  return (
    <Card className="w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{book.title}</CardTitle>
          <BookOpen className="w-6 h-6 text-blue-500" />
        </div>
        <p className="text-sm text-gray-500">{book.author}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-700">
          "{book.quote}"
        </blockquote>
        <div className="flex items-center justify-end space-x-2">
          <span className="text-sm text-gray-500">Read by</span>
          <Badge variant="secondary" className="text-blue-500">
            {book.readBy}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookQuoteWidget;