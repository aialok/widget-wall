import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ArrowRight } from 'lucide-react';

interface Opportunity {
  id: string;
  title: string;
  fromTeam: string;
  forTeam: string;
  tags: string[];
}

interface OpportunityBoardWidgetProps {
  opportunities: Opportunity[];
}

const OpportunityBoardWidget: React.FC<OpportunityBoardWidgetProps> = ({ opportunities }) => {

  return (
    <Card className="w-10/12 -ml-3 h-full shadow-md overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
          Opportunity Board
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 max-h-[calc(100%-4rem)] overflow-y-auto">
        <ul className="space-y-3">
          {opportunities.map((opp) => (
            <li key={opp.id} className="bg-gray-50 p-3 rounded-md shadow-sm">
              <h4 className="font-medium text-sm mb-1">{opp.title}</h4>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>{opp.fromTeam}</span>
                <ArrowRight className="w-3 h-3 mx-1" />
                <span>{opp.forTeam}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {opp.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default OpportunityBoardWidget;