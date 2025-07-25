import type { Finding } from "../types/types";
import __portal from "../../../../assets/portal.svg";
import __sap from "../../../../assets/sap.svg";
export const SEVERITY_DATA = [
  { label: "Low", value: 500, color: "#006C50" },
  { label: "Medium", value: 200, color: "#FFBA69" },
  { label: "High", value: 200, color: "#FF708B" },
  { label: "Critical", value: 100, color: "#7F1D1D" },
];

export const ASSETS_DATA = [
  {
    name: "D.G. ASUNTOS LEGALES",
    severity: {
      critical: 3,
      high: 3,
      medium: 1,
      low: 1,
    },
  },
  {
    name: "D.G. ASUNTOS LEGALES",
    severity: {
      critical: 2,
      high: 2,
      medium: 1,
      low: 0,
    },
  },
  {
    name: "D.G. ASUNTOS LEGALES",
    severity: {
      critical: 1,
      high: 1,
      medium: 0,
      low: 0,
    },
  },
];

export const SOURCE_DATA = [
  { label: "Microsoft Defender", value: 428, color: "#5694FF" },
  { label: "Artic Wolf", value: 119, color: "#23618E" },
];

export const TABLE_DATA: Finding[] = [
  {
    id: "CVE-2024-4741",
    asset: "AP_CORP_PORTAL",
    assetLogo: __portal,
    software: "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...",
    owner: "Pedro Pablo Casas",
    ownerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    internetExposed: true,
    status: "Assigned",
    severity: "Critical",
    source: "SOC",
    firstSeen: "21/12/2023",
    firstTime: "23:34:02",
    lastSeen: "12 Oct 2024",
    lastTime: "23:34:02",
  },
  {
    id: "CVE-2024-4741",
    asset: "SAP System",
    assetLogo: __sap,
    software: "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...",
    owner: "Pedro Pablo Casas",
    ownerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    internetExposed: false,
    status: "Accepted",
    severity: "High",
    source: "Hacking",
    firstSeen: "21/12/2023",
    firstTime: "23:34:02",
    lastSeen: "12 Oct 2024",
    lastTime: "23:34:02",
  },
  {
    id: "CVE-2024-4741",
    asset: "SAP System",
    assetLogo: __sap,
    software: "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...",
    owner: "Pedro Pablo Casas",
    ownerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    internetExposed: null,
    status: "Ignored",
    severity: "Critical",
    source: "DevSecOps",
    firstSeen: "21/12/2023",
    firstTime: "23:34:02",
    lastSeen: "12 Oct 2024",
    lastTime: "23:34:02",
  },
  {
    id: "CVE-2024-4741",
    asset: "SAP System",
    assetLogo: __sap,
    software: "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...",
    owner: "Pedro Pablo Casas",
    ownerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    internetExposed: null,
    status: "Resolved",
    severity: "Medium",
    source: "SOC",
    firstSeen: "21/12/2023",
    firstTime: "23:34:02",
    lastSeen: "12 Oct 2024",
    lastTime: "23:34:02",
  },
  {
    id: "CVE-2024-4741",
    asset: "SAP System",
    assetLogo: __sap,
    software: "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...",
    owner: "John Smith",
    ownerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    internetExposed: false,
    status: "Unassigned",
    severity: "High",
    source: "SOC",
    firstSeen: "21/12/2023",
    firstTime: "23:34:02",
    lastSeen: "12 Oct 2024",
    lastTime: "23:34:02",
  },
  {
    id: "CVE-2024-4741",
    asset: "SAP System",
    assetLogo: __sap,
    software: "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica...",
    owner: "Jonh Smith",
    ownerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    internetExposed: true,
    status: "Assigned",
    severity: "Low",
    source: "SOC",
    firstSeen: "21/12/2023",
    firstTime: "23:34:02",
    lastSeen: "12 Oct 2024 ",
    lastTime: "23:34:02",
  },
];
