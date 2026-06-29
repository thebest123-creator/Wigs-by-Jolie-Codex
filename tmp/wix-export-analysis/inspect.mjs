import fs from "node:fs/promises";
import { Workbook } from "@oai/artifact-tool";

const csvPath =
  "C:/Users/ASanc/Downloads/google-search-query_2025-06-29-2026-06-29.csv";
const csvText = await fs.readFile(csvPath, "utf8");
const workbook = await Workbook.fromCSV(csvText, { sheetName: "Queries" });

const overview = await workbook.inspect({
  kind: "workbook,sheet,region",
  sheetId: "Queries",
  range: "A1:Z60",
  include: "values",
  maxChars: 14000,
  tableMaxRows: 60,
  tableMaxCols: 26,
  tableMaxCellChars: 160,
});

console.log(overview.ndjson);

const sheet = workbook.worksheets.getItem("Queries");
const values = sheet.getUsedRange(true).values;
const rows = values.slice(1).map((row) => ({
  query: String(row[0] ?? "").trim(),
  impressions: Number(row[1] ?? 0),
  clicks: Number(row[2] ?? 0),
  ctr: Number(String(row[3] ?? "0").replace("%", "")) / 100,
  position: Number(row[4] ?? 0),
}));

const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
const totalClicks = rows.reduce((sum, row) => sum + row.clicks, 0);
const weightedPosition =
  rows.reduce((sum, row) => sum + row.position * row.impressions, 0) /
  totalImpressions;
const brandPattern =
  /\bwigs? by jolie\b|\bjolie wigs?\b|\bhair by jolie\b|\bjolies hair\b/i;
const brandRows = rows.filter((row) => brandPattern.test(row.query));

const topByImpressions = [...rows]
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 20);
const topByClicks = [...rows]
  .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
  .slice(0, 20);
const opportunities = rows
  .filter(
    (row) =>
      row.impressions >= 5 &&
      row.position <= 12 &&
      row.clicks === 0 &&
      !brandPattern.test(row.query),
  )
  .sort((a, b) => b.impressions - a.impressions)
  .slice(0, 25);

console.log(
  JSON.stringify(
    {
      rowCount: rows.length,
      totals: {
        impressions: totalImpressions,
        clicks: totalClicks,
        ctr: totalClicks / totalImpressions,
        weightedPosition,
      },
      branded: {
        queryCount: brandRows.length,
        impressions: brandRows.reduce((sum, row) => sum + row.impressions, 0),
        clicks: brandRows.reduce((sum, row) => sum + row.clicks, 0),
      },
      topByImpressions,
      topByClicks,
      opportunities,
    },
    null,
    2,
  ),
);
