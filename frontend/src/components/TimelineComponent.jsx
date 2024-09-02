import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

function TimelineComponent() {
  const timelineArr = [
    {
      title: "Day 1",
      description:
        "Arrival and Introduction Know your Tiger- Tiger Habitat and Tiger Behaviour Information Pug Mark study- How to follow a tiger from there Pug Mark, Difference between Male-Female Tiger and Leopard Pug Mark Camera Trap Study- How to use a Camera Trap at field Old Pug Mark Study- Pugmark Tracing and Cast of POP Short film on Tiger or Discussion and local story Welcome Dinner and Bonfire",
    },
    {
      title: "Day 2",
      description:
        "Morning Safari (Field Visit) for Direct and Indirect Field Data Collection on Tiger Group Discussion on collect field data Evening Safari (Field Visit) for Direct and Indirect Field Data Collection on Tiger Stray Tiger - Discussion and Information on ‘Stray Tiger and Leopard’ all about reason and behaviour Bonfire",
    },
    {
      title: "Day 3",
      description:
        "Village Visit- Visit in a nearest village or agriculture land and collect data on ‘Stray Tiger and Leopard’ Collect Certificate- Conclusion of the trip with the award of participatory certificate Feedback- Feedback session follow by breakfast",
    },
  ];
  return (
    <div className="md:w-[32rem]">
      <Timeline>
        {timelineArr.map((timeline, index) => (
          <TimelineItem key={index}>
            {index != timelineArr.length - 1 && <TimelineConnector />}
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#F5B206]" />
              <Typography className="text-sm font-medium text-black">
                {timeline.title}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography className="font-normal text-sm text-[#383838]">
                {timeline.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default TimelineComponent;
