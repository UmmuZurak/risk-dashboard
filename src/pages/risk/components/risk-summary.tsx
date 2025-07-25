import { Box, Grid, Typography } from "@mui/material";
import Tag from "../../../ui/components/tag/tag";
import CustomPieChart from "../../../ui/components/pie-chart/pie-chart";
import { ASSETS_DATA, SEVERITY_DATA, SOURCE_DATA } from "../lib/mock-data/mock-data";
import __microsoft from "../../../assets/microsoft.svg";
import __artic from "../../../assets/artic.svg";

const RiskSummary = () => {
  // This component renders the risk summary section with findings by severity, 
  // top vulnerable assets, and findings per source
  return (
    <Box
      sx={{
        width: "100%",
        p: 2.5,
        borderRadius: "11.11px",
        bgcolor: "background.paper",
        boxShadow: "0px 2.22px 3.33px 0px #0000000D",
        display: "flex",
        gap: 2,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {/* Findings By Severity */}
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
          <Typography variant="h4" mb={"22px"}>
            Findings By Severity
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
              pl: { md: 1.5 },
              pr: { md: 2 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column", gap: 1 }}>
              <Tag type="critical" label="Critical" number={3} />
              <Tag type="high" label="High" number={3} />
              <Tag type="medium" label="Medium" number={1} />
              <Tag type="low" label="Low" number={1} />
            </Box>
            <CustomPieChart data={SEVERITY_DATA} total={86} />
          </Box>
        </Grid>
        {/* Top Vulnerable Assets */}
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
          sx={{
            borderLeft: { md: "1px solid #E2E2EA" },
            borderRight: { lg: "1px solid #E2E2EA" },
            px: { md: 3 },
            py: { xs: 3, sm: 3, md: 0 },
          }}
        >
          <Typography variant="h4" mb={"22px"}>
            Top Vulnerable Assets
          </Typography>

          <Box>
            {/* header */}
            <Grid container sx={{ borderBottom: "1px solid #EAECF0", py: 1.5 }}>
              <Grid size={7}>
                <Typography
                  fontWeight="600"
                  fontSize="12px"
                  textTransform="uppercase"
                  color="#9A9AAF"
                >
                  Asset name
                </Typography>
              </Grid>
              <Grid size={5}>
                <Typography
                  fontWeight="600"
                  fontSize="12px"
                  textTransform="uppercase"
                  color="#9A9AAF"
                >
                  severity
                </Typography>
              </Grid>
            </Grid>
            {/* assets data */}
            <Grid className="custom-scrollbar" sx={{ maxHeight: 135, overflow: "auto" }}>
              {ASSETS_DATA.map((asset, index) => (
                <Grid
                  container
                  sx={{
                    borderBottom: "1px solid #EAECF0",
                    py: 1.5,
                    display: "flex",
                    alignItems: "center",
                  }}
                  key={index}
                >
                  <Grid size={{ md: 7, sm: 6, xs: 6 }}>
                    <Typography
                      fontWeight="400"
                      fontSize="12px"
                      textTransform="uppercase"
                      color="#03165F"
                    >
                      {asset.name}
                    </Typography>
                  </Grid>
                  <Grid size={{ md: 5, sm: 6, xs: 6 }}>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      <Tag type="critical" label="C" number={asset.severity.critical} />
                      <Tag type="high" label="H" number={asset.severity.high} />
                      <Tag type="medium" label="M" number={asset.severity.medium} />
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        {/* Finding Per Source */}
        <Grid size={{ xs:12, sm: 12, md: 6, lg: 4 }} sx={{ px: { md: 3 } }}>
          <Typography variant="h4" mb={"22px"}>
            Finding Per Source
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
              flexWrap: { md: "nowrap", sm: "wrap", xs: "wrap" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column", gap: 3 }}>
              {/* microsoft defender */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderLeft: "5px solid #5694FF",
                  pl: { md: 1.5 },
                  gap: 1.5,
                }}
              >
                <img src={__microsoft} alt="Microsoft Defender" width={30} height={30} />
                <Typography fontWeight="600" fontSize="35px" color="#656575">
                  428
                </Typography>
                <Typography fontWeight="400" fontSize="14px" color="#03165F">
                  Microsoft Defender
                </Typography>
              </Box>
              {/* artic wolf */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderLeft: "5px solid #23618E",
                  pl: 1.5,
                  gap: 1,
                }}
              >
                <img src={__artic} alt="Arctic Wolf " width={30} height={30} />
                <Typography fontWeight="600" fontSize="35px" color="#656575">
                  119
                </Typography>
                <Typography fontWeight="400" fontSize="14px" color="#03165F">
                  Arctic Wolf
                </Typography>
              </Box>
            </Box>
            <CustomPieChart data={SOURCE_DATA} total={547} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RiskSummary;
