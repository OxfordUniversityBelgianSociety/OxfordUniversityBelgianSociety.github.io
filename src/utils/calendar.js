const formatDate = (value) => new Date(value).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

// Google Calendar's event template opens a prefilled event for the visitor to save.
// https://developers.google.com/workspace/calendar/api/concepts/inviting-attendees-to-events
export function getGoogleCalendarUrl(event) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `OUBS: ${event.title}`,
    dates: `${formatDate(event.start)}/${formatDate(event.end || event.start)}`,
    ctz: 'Europe/London',
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/r/eventedit?${params}`;
}

export function generateAndDownloadIcs(event) {
  if (!event) return;

  const escapeText = (value) => value.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Oxford University Belgian Society//OUBS Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}@oubelgiansociety.org`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${formatDate(event.start)}`,
    ...(event.end ? [`DTEND:${formatDate(event.end)}`] : []),
    `SUMMARY:${escapeText(`OUBS: ${event.title}`)}`,
    `DESCRIPTION:${escapeText(event.description)}`,
    `LOCATION:${escapeText(event.location)}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n') + '\r\n';

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute('download', `${event.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => window.URL.revokeObjectURL(url), 1000);
}
