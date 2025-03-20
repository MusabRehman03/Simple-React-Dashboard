import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import BasicPie from "./PieChart";
import ArcDesign from "./ArcDesign";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { Stack } from "@mui/material";
const settings = {
  width: 200,
  height: 200,
  value: 60,
};
const cards = [
  {
    id: 1,

    title: "Balance",
    heading: "Current Balance",
    description: "$45,609",
    value: 80,
  },
  {
    id: 2,
    title: "Revenue",
    heading: "Last 2 Months",
    description: "$12,200",
    value: 73,
  },
  {
    id: 3,
    title: "Savings",
    heading: "Last 2 Months",
    description: "$4,357",
    value: 68,
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    // <Box
    //   sx={{
    //     width: '97.5%',
    //     display: 'flex',
    //    flexWrap: 'wrap',
    //    alignItems:'center',
    //    gap: '20px'
    //   }}
    // >
    <div className="flex items-center w-full justify-center 2xl:justify-between gap-10  flex-wrap">
      {cards.map((card, index) => (
        <Card sx={{ width:'410px'}}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
                <Stack direction={'row'}>
              <Stack>
                <Typography variant="h7" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.heading}
                </Typography>
                <Typography variant="h4" component="div">
                  {card.description}
                </Typography>
              </Stack>
              
                <ArcDesign />
             </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      </div>
    // </Box>
  );
}

export default SelectActionCard;
