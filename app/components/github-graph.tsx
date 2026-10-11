import { githubUsername } from "../lib/data";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const levels = [
  "bg-[hsl(var(--muted))]",
  "bg-[hsl(var(--foreground)/0.2)]",
  "bg-[hsl(var(--foreground)/0.4)]",
  "bg-[hsl(var(--foreground)/0.65)]",
  "bg-[hsl(var(--foreground)/0.9)]",
];

async function getContributions() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    return (await res.json()) as {
      total: { lastYear: number };
      contributions: Day[];
    };
  } catch {
    return null;
  }
}

function streaks(days: Day[]) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  // Today may have no commits yet; the streak still counts until tomorrow
  let i = days.length - 1;
  if (days[i]?.count === 0) i--;
  let current = 0;
  while (i >= 0 && days[i].count > 0) {
    current++;
    i--;
  }
  return { current, longest };
}

export default async function GithubGraph() {
  const data = await getContributions();
  if (!data?.contributions.length) return null;

  const days = data.contributions;
  const { current, longest } = streaks(days);
  // Pad so each column is one week, Sunday on top
  const pad = new Date(days[0].date).getUTCDay();
  const cells: (Day | null)[] = [...Array(pad).fill(null), ...days];
  const weeks = Math.ceil(cells.length / 7);
  const months = Array.from({ length: weeks }, (_, w) => {
    const day = cells[w * 7] ?? cells[w * 7 + pad];
    const prev = w > 0 ? cells[(w - 1) * 7] : null;
    if (!day) return "";
    const m = new Date(day.date).toLocaleString("en-US", {
      month: "short",
      timeZone: "UTC",
    });
    const pm =
      prev &&
      new Date(prev.date).toLocaleString("en-US", {
        month: "short",
        timeZone: "UTC",
      });
    return w === 0 || m !== pm ? m : "";
  });
  const total = data.total.lastYear.toLocaleString("en-US");

  return (
    <div className="line-b px-4 py-4">
      {/* Phones: keep squares readable, scroll inside, start at the newest weeks (rtl) */}
      <div dir="rtl" className="overflow-x-auto pb-1">
        <div dir="ltr" className="min-w-[600px]">
          <div
            className="grid auto-cols-fr grid-flow-col gap-[3px] font-mono text-[10px] text-[hsl(var(--muted-foreground))]"
            aria-hidden
          >
            {months.map((m, w) => (
              <span key={w} className="h-4 overflow-visible whitespace-nowrap">
                {/* Skip a label that has no room before the next one */}
                {m && !months[w + 1] && !months[w + 2] ? m : ""}
              </span>
            ))}
          </div>
          <div
            role="img"
            aria-label={`${total} GitHub contributions in the last year. Current streak ${current} days, longest ${longest} days.`}
            className="mt-1 grid auto-cols-fr grid-flow-col grid-rows-7 gap-[3px]"
          >
            {cells.map((d, i) =>
              d ? (
                <span
                  key={d.date}
                  title={`${d.count} contributions on ${d.date}`}
                  className={`aspect-square rounded-[2px] ${levels[d.level]}`}
                />
              ) : (
                <span key={`pad-${i}`} />
              ),
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2 text-xs text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-[hsl(var(--foreground))]">
            {total} contributions in the last year
          </span>{" "}
          · <span className="text-[hsl(var(--foreground))]">{current}-day</span>{" "}
          streak (longest {longest}). Source:{" "}
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[hsl(var(--foreground))]"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center gap-1" aria-hidden>
          Less
          {levels.map((l) => (
            <span key={l} className={`size-2.5 rounded-[2px] ${l}`} />
          ))}
          More
        </div>
      </div>
    </div>
  );
}
