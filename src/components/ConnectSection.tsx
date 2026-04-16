import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LEETCODE_USERNAME = "AdwaitR";
const CHESSCOM_USERNAME = "Pirate_chesss";

type LeetCodeStats = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  acceptanceRate: number;
};

type ChessStats = {
  rapid: number | null;
  blitz: number | null;
  bullet: number | null;
  totalWins: number;
};

const ConnectSection = () => {
  const [leetcode, setLeetcode] = useState<LeetCodeStats | null>(null);
  const [chess, setChess] = useState<ChessStats | null>(null);
  const [leetcodeFlipped, setLeetcodeFlipped] = useState(false);
  const [chessFlipped, setChessFlipped] = useState(false);
  const [leetcodePaused, setLeetcodePaused] = useState(false);
  const [chessPaused, setChessPaused] = useState(false);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "success") {
          setLeetcode({
            totalSolved: data.totalSolved,
            totalQuestions: data.totalQuestions,
            easySolved: data.easySolved,
            totalEasy: data.totalEasy,
            mediumSolved: data.mediumSolved,
            totalMedium: data.totalMedium,
            hardSolved: data.hardSolved,
            totalHard: data.totalHard,
            ranking: data.ranking,
            acceptanceRate: data.acceptanceRate,
          });
        }
      })
      .catch(() => {});

    fetch(`https://api.chess.com/pub/player/${CHESSCOM_USERNAME}/stats`)
      .then((r) => r.json())
      .then((data) => {
        const wins =
          (data.chess_rapid?.record?.win ?? 0) +
          (data.chess_blitz?.record?.win ?? 0) +
          (data.chess_bullet?.record?.win ?? 0);
        setChess({
          rapid: data.chess_rapid?.last?.rating ?? null,
          blitz: data.chess_blitz?.last?.rating ?? null,
          bullet: data.chess_bullet?.last?.rating ?? null,
          totalWins: wins,
        });
      })
      .catch(() => {});
  }, []);

  // Auto-flip LeetCode card every 1.5s (pause on hover)
  useEffect(() => {
    if (leetcodePaused) return;
    const interval = setInterval(() => {
      setLeetcodeFlipped((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, [leetcodePaused]);

  // Auto-flip Chess.com card every 1.5s, offset by 0.75s so they're out of sync
  useEffect(() => {
    if (chessPaused) return;
    const timeout = setTimeout(() => {
      setChessFlipped((prev) => !prev);
      const interval = setInterval(() => {
        setChessFlipped((prev) => !prev);
      }, 6000);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [chessPaused]);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2 opacity-70">
            Outside of work
          </p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-foreground mb-2">
            Also find me here
          </h2>
          <p className="text-xs text-muted-foreground/70 mb-8">
            Auto-flipping · Hover to pause
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* LeetCode Flip Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative h-44 cursor-pointer"
            style={{ perspective: "1200px" }}
            onMouseEnter={() => setLeetcodePaused(true)}
            onMouseLeave={() => setLeetcodePaused(false)}
            onClick={() => setLeetcodeFlipped(!leetcodeFlipped)}
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{ rotateY: leetcodeFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-xl border border-border/40 bg-card/30 p-6 flex flex-col justify-between group hover:border-primary/40 transition-colors"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg"
                    alt="LeetCode"
                    className="w-10 h-10 opacity-90"
                  />
                  <span className="font-display text-lg tracking-wider text-[#FFA116]">
                    LeetCode
                  </span>
                </div>

                <div>
                  <p className="font-display text-xl md:text-2xl tracking-wider text-foreground leading-tight">
                    Got a good question?
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Share it with me — I'm always up for a challenge
                  </p>
                </div>

                <p className="text-[10px] text-muted-foreground/60 tracking-wider uppercase">
                  ↻ Auto-flipping
                </p>
              </div>

              {/* BACK */}
              <a
                href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-0 rounded-xl border border-[#FFA116]/30 bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] p-4 flex items-center gap-4"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                {leetcode ? (
                  <>
                    {/* Circular arc chart */}
                    <div className="relative w-32 h-32 shrink-0">
                      <svg
                        viewBox="0 0 120 120"
                        className="w-full h-full -rotate-90"
                      >
                        {/* Background track */}
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="hsl(220 15% 20%)"
                          strokeWidth="6"
                          strokeDasharray="235 79"
                          strokeLinecap="round"
                        />
                        {(() => {
                          const C = 2 * Math.PI * 50; // circumference ~314
                          const visibleArc = (235 / 314) * C; // the 3/4 arc
                          const easyLen =
                            (leetcode.easySolved / leetcode.totalEasy) *
                            (visibleArc / 3);
                          const medLen =
                            (leetcode.mediumSolved / leetcode.totalMedium) *
                            (visibleArc / 3);
                          const hardLen =
                            (leetcode.hardSolved / leetcode.totalHard) *
                            (visibleArc / 3);
                          return (
                            <>
                              {/* Easy arc (green) */}
                              <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="#00B8A3"
                                strokeWidth="6"
                                strokeDasharray={`${easyLen} ${C}`}
                                strokeDashoffset="0"
                                strokeLinecap="round"
                              />
                              {/* Medium arc (yellow) */}
                              <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="#FFC01E"
                                strokeWidth="6"
                                strokeDasharray={`${medLen} ${C}`}
                                strokeDashoffset={`-${visibleArc / 3}`}
                                strokeLinecap="round"
                              />
                              {/* Hard arc (red) */}
                              <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="#FF375F"
                                strokeWidth="6"
                                strokeDasharray={`${hardLen} ${C}`}
                                strokeDashoffset={`-${(visibleArc / 3) * 2}`}
                                strokeLinecap="round"
                              />
                            </>
                          );
                        })()}
                      </svg>
                      {/* Center text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="font-display text-2xl text-foreground leading-none">
                          <span className="text-3xl">
                            {leetcode.totalSolved}
                          </span>
                          <span className="text-muted-foreground/60 text-sm">
                            /{leetcode.totalQuestions}
                          </span>
                        </p>
                        <p className="text-[10px] text-green-400 mt-1 flex items-center gap-0.5">
                          <span>✓</span> Solved
                        </p>
                      </div>
                    </div>

                    {/* Right side: Easy/Med/Hard tiles */}
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between px-3 py-1.5 rounded-md bg-secondary/40">
                        <span className="text-xs text-[#00B8A3] font-medium">
                          Easy
                        </span>
                        <span className="text-xs text-foreground font-display tracking-wide">
                          {leetcode.easySolved}/{leetcode.totalEasy}
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-1.5 rounded-md bg-secondary/40">
                        <span className="text-xs text-[#FFC01E] font-medium">
                          Med.
                        </span>
                        <span className="text-xs text-foreground font-display tracking-wide">
                          {leetcode.mediumSolved}/{leetcode.totalMedium}
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-1.5 rounded-md bg-secondary/40">
                        <span className="text-xs text-[#FF375F] font-medium">
                          Hard
                        </span>
                        <span className="text-xs text-foreground font-display tracking-wide">
                          {leetcode.hardSolved}/{leetcode.totalHard}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-xs text-muted-foreground/60 w-full text-center">
                    Loading stats...
                  </p>
                )}
              </a>
            </motion.div>
          </motion.div>

          {/* Chess.com Flip Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative h-44 cursor-pointer"
            style={{ perspective: "1200px" }}
            onMouseEnter={() => setChessPaused(true)}
            onMouseLeave={() => setChessPaused(false)}
            onClick={() => setChessFlipped(!chessFlipped)}
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{ rotateY: chessFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-xl border border-border/40 bg-card/30 p-6 flex flex-col justify-between group hover:border-primary/40 transition-colors"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#312e2b] flex items-center justify-center">
                    <span className="text-[#81B64C] text-2xl leading-none">
                      ♞
                    </span>
                  </div>
                  <span className="font-display text-lg tracking-wider text-[#81B64C]">
                    Chess.com
                  </span>
                </div>

                <div>
                  <p className="font-display text-xl md:text-2xl tracking-wider text-foreground leading-tight">
                    Love chess? Let's play.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Challenge me anytime — always down for a game
                  </p>
                </div>

                <p className="text-[10px] text-muted-foreground/60 tracking-wider uppercase">
                  ↻ Auto-flipping
                </p>
              </div>

              {/* BACK */}
              <a
                href={`https://www.chess.com/member/${CHESSCOM_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-0 rounded-xl border border-[#81B64C]/40 bg-gradient-to-br from-[#312e2b] to-[#1f1e1c] p-6 flex flex-col justify-between"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#81B64C] text-xl leading-none">
                      ♞
                    </span>
                    <span className="text-xs text-[#81B64C] tracking-wider">
                      @{CHESSCOM_USERNAME}
                    </span>
                  </div>
                  {chess && chess.totalWins > 0 && (
                    <span className="text-[10px] text-muted-foreground/60">
                      {chess.totalWins} wins
                    </span>
                  )}
                </div>

                {chess && (chess.rapid || chess.blitz || chess.bullet) ? (
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <p className="font-display text-2xl md:text-3xl text-[#81B64C] leading-none">
                        {chess.rapid ?? "—"}
                      </p>
                      <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-1">
                        Rapid
                      </p>
                    </div>
                    <div className="text-center border-x border-[#81B64C]/15">
                      <p className="font-display text-2xl md:text-3xl text-[#81B64C] leading-none">
                        {chess.blitz ?? "—"}
                      </p>
                      <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-1">
                        Blitz
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-2xl md:text-3xl text-[#81B64C] leading-none">
                        {chess.bullet ?? "—"}
                      </p>
                      <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-1">
                        Bullet
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground/60">
                    Loading stats...
                  </p>
                )}

                <p className="text-[10px] text-[#81B64C]/70 tracking-wider uppercase">
                  Visit profile →
                </p>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;