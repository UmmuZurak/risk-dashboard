import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Tooltip,
  Typography,
} from "@mui/material";
import type { Finding } from "../lib/types/types";
import Tag from "../../../ui/components/tag/tag";
import __exposed from "../../../assets/exposed.svg";
import __unexposed from "../../../assets/unexposed.svg";
import __owner from "../../../assets/owner.svg";

interface Props {
  data: Finding[];
}

const statusColors: Record<string, "#0B60EB" | "#53CA43" | "#9A9AAF" | "#F76565"> = {
  Assigned: "#0B60EB",
  Accepted: "#53CA43",
  Ignored: "#9A9AAF",
  Resolved: "#53CA43",
  Unassigned: "#F76565",
};

const severityColors: Record<string, "critical" | "high" | "medium" | "low"> = {
  Critical: "critical",
  High: "high",
  Medium: "medium",
  Low: "low",
};

const LABELS = [
  "Finding",
  "Asset",
  "Affected software",
  "Owned by",
  "Internet exposed",
  "Status",
  "Severity",
  "Source",
  "First seen",
  "Last seen",
];

const FindingsTable: React.FC<Props> = ({ data }) => (
  <TableContainer
    sx={{ bgcolor: "#fff", borderRadius: 2, boxShadow: "0px 2.9px 4px 0px #0000000D;" }}
  >
    <Table size="small">
      <TableHead>
        <TableRow>
          {LABELS.map((label) => (
            <TableCell
              key={label}
              sx={{ textTransform: "uppercase", color: "#667085", fontSize: 12, fontWeight: 600 }}
            >
              {label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody sx={{ width: "100%" }}>
        {data.length > 0 ? (
          data.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell sx={{ color: "#03165F", fontSize: 14 }}>{row.id}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#03165F",
                    fontSize: 14,
                  }}
                >
                  {row.assetLogo && <img src={row.assetLogo} style={{ width: 24, height: 24 }} />}
                  {row.asset}
                </Box>
              </TableCell>
              <TableCell>
                <Tooltip title={row.software}>
                  <span>
                    {row.software.length > 48 ? `${row.software.slice(0, 48)}...` : row.software}
                  </span>
                </Tooltip>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img src={__owner} style={{ width: 15, height: 15 }} />
                  {row.owner}
                </Box>
              </TableCell>
              <TableCell>
                {row.internetExposed === null ? (
                  <span>N/A</span>
                ) : (
                  <div style={{ display: "flex" }}>
                    <Tag
                      icon={row.internetExposed ? __exposed : __unexposed}
                      type={row.internetExposed ? "exposed" : "grey"}
                    />
                  </div>
                )}
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <div
                    style={{
                      height: 8,
                      width: 8,
                      backgroundColor: `${statusColors[row.status] || "default"}`,
                      borderRadius: "100%",
                    }}
                  ></div>
                  <span>{row.status}</span>
                </Box>
              </TableCell>
              <TableCell>
                <div style={{ display: "flex" }}>
                  <Tag label={row.severity} type={severityColors[row.severity]} />
                </div>
              </TableCell>
              <TableCell>{row.source}</TableCell>
              <TableCell>
                <Typography sx={{ color: "#03165F", fontSize: 14 }}>{row.firstSeen}</Typography>
                <Typography sx={{ color: "#9A9AAF", fontSize: 14 }}>{row.firstTime}</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "#03165F", fontSize: 14 }}>{row.lastSeen}</Typography>
                <Typography sx={{ color: "#9A9AAF", fontSize: 14 }}>{row.lastTime}</Typography>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={LABELS.length} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  color: "#03165F",
                  fontSize: 14,
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="body2">No data available yet</Typography>
              </Box>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FindingsTable;
