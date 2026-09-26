import { SITE_CONFIG } from '../config/siteConfig';

export interface LiveServerStatus {
  online: boolean;
  playersOnline: number;
  maxPlayers: number;
  version: string;
  motd: string;
  pingMs?: number;
  isFallback: boolean;
  lastChecked: Date;
}

export async function fetchServerStatus(customIp?: string): Promise<LiveServerStatus> {
  const targetIp = customIp || SITE_CONFIG.server.ip;
  const fallback = SITE_CONFIG.server.defaultStatus;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

    const res = await fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(targetIp)}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.online === 'boolean') {
        const cleanMotd = Array.isArray(data.motd?.clean) 
          ? data.motd.clean.join(' ') 
          : fallback.motd;

        return {
          online: data.online,
          playersOnline: data.players?.online ?? (data.online ? fallback.playersOnline : 0),
          maxPlayers: data.players?.max ?? fallback.maxPlayers,
          version: data.version || SITE_CONFIG.server.version,
          motd: cleanMotd || fallback.motd,
          pingMs: fallback.pingMs,
          isFallback: false,
          lastChecked: new Date()
        };
      }
    }
  } catch {
    // Silently fall back to configured default status
  }

  return {
    online: fallback.online,
    playersOnline: fallback.playersOnline,
    maxPlayers: fallback.maxPlayers,
    version: SITE_CONFIG.server.version,
    motd: fallback.motd,
    pingMs: fallback.pingMs,
    isFallback: true,
    lastChecked: new Date()
  };
}
