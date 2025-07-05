import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
interface Props {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  total?: number;
}

const settings = {
  width: 150,
  height: 150,
  hideLegend: true,
};
const CustomPieChart: React.FC<Props> = ({ data, total }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <PieChart series={[{ innerRadius: 55, outerRadius: 70, data }]} {...settings} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: "35px", color: "#656575", fontWeight: 600 }}>
          {total}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomPieChart;
