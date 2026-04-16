import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LEETCODE_USERNAME = "AdwaitR";
const CHESSCOM_USERNAME = "Pirate_chesss";

type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
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

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "success") {
          setLeetcode({
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
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
            Tap to flip and see live stats
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
                  ↻ Tap for stats
                </p>
              </div>

              {/* BACK */}
              <a
                href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-0 rounded-xl border border-[#FFA116]/40 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 flex flex-col justify-between"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg"
                      alt="LeetCode"
                      className="w-6 h-6"
                    />
                    <span className="text-xs text-[#FFA116] tracking-wider">
                      @{LEETCODE_USERNAME}
                    </span>
                  </div>
                  {leetcode && (
                    <span className="text-[10px] text-muted-foreground/60">
                      Rank #{leetcode.ranking.toLocaleString()}
                    </span>
                  )}
                </div>

                {leetcode ? (
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-display text-4xl md:text-5xl text-[#FFA116] leading-none">
                        {leetcode.totalSolved}
                      </p>
                      <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-1.5">
                        Problems Solved
                      </p>
                    </div>
                    <div className="flex gap-3 text-xs">
                      <div className="text-center">
                        <p className="text-green-400 font-display text-lg">
                          {leetcode.easySolved}
                        </p>
                        <p className="text-[9px] text-muted-foreground/70 tracking-wider">
                          EASY
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-yellow-400 font-display text-lg">
                          {leetcode.mediumSolved}
                        </p>
                        <p className="text-[9px] text-muted-foreground/70 tracking-wider">
                          MED
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-red-400 font-display text-lg">
                          {leetcode.hardSolved}
                        </p>
                        <p className="text-[9px] text-muted-foreground/70 tracking-wider">
                          HARD
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground/60">
                    Loading stats...
                  </p>
                )}

                <p className="text-[10px] text-[#FFA116]/70 tracking-wider uppercase">
                  Visit profile →
                </p>
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
                  ↻ Tap for stats
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