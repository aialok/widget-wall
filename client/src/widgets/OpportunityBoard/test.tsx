
import OpportunityBoardWidget from './OpportunityBoard';

const Test = () => {
  const opportunities = [
    {
      id: '1',
      title: 'Automate repetitive data entry tasks',
      fromTeam: 'Operations',
      forTeam: 'AI Team',
      tags: ['Automation', 'AI', 'Data Entry']
    },
    {
      id: '2',
      title: 'In-house analytics tool development',
      fromTeam: 'Marketing',
      forTeam: 'Engineering',
      tags: ['Analytics', 'Development', 'Cost-saving']
    },
    {
      id: '3',
      title: 'Improve internal communication platform',
      fromTeam: 'HR',
      forTeam: 'Product Team',
      tags: ['Communication', 'UX/UI', 'Productivity']
    }
  ];

  return (
    <div className="w-80 h-64"> {/* Adjust these dimensions as needed */}
      <OpportunityBoardWidget opportunities={opportunities} />
    </div>
  );
};

export default Test;