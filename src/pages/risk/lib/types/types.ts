export type Severity = "Critical" | "High" | "Medium" | "Low";

export interface Finding {
  id: string;
  asset: string;
  assetLogo?: string;
  software: string;
  owner: string;
  ownerAvatar: string;
  internetExposed: boolean | null;
  status: string;
  severity: Severity;
  source: string;
  firstSeen: string;
  lastSeen: string;
  firstTime: string;
  lastTime:string;
}
