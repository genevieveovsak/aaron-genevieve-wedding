/**
 * Deploy this as a Google Apps Script bound to a Google Sheet (Extensions > Apps Script).
 * It appends each RSVP submission as a new row.
 *
 * Setup:
 * 1. Create a Google Sheet. Add a header row: Timestamp | Name | Attending | Guests | Meal | Song Request | Notes
 * 2. Extensions > Apps Script, paste this file's contents as Code.gs.
 * 3. Deploy > New deployment > Web app. Execute as "Me", access "Anyone".
 * 4. Copy the deployment URL into VITE_RSVP_ENDPOINT in the website's .env file.
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const payload = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    payload.name || '',
    payload.attending || '',
    payload.guestCount || 0,
    payload.mealChoice || '',
    payload.songRequest || '',
    payload.notes || '',
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
