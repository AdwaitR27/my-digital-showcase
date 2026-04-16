import { motion } from "framer-motion";
import { Code2, Swords } from "lucide-react";
import { useEffect, useState } from "react";

const LEETCODE_USERNAME = "AdwaitR";
const CHESSCOM_USERNAME = "Pirate_chesss";

type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
};

type ChessStats = {
  rapid: number | null;
  blitz: number | null;
  bullet: number | null;
};

const ConnectSection = () => {
  const [leetcode, setLeetcode] = useState<LeetCodeStats | null>(null);
  const [chess, setChess] = useState<ChessStats | null>(null);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [chessLoading, setChessLoading] = useState(true);

  useEffect(() => {
    // LeetCode stats
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
          });
        }
      })
      .catch(() => {
        // Fail silently — fallback to just the CTA
      })
      .finally(() => setLeetcodeLoading(false));

    // Chess.com stats
    fetch(`https://api.chess.com/pub/player/${CHESSCOM_USERNAME}/stats`)
      .then((r) => r.json())
      .then((data) => {
        setChess({
          rapid: data.chess_rapid?.last?.rating ?? null,
          blitz: data.chess_blitz?.last?.rating ?? null,
          bullet: data.chess_bullet?.last?.rating ?? null,
        });
      })
      .catch(() => {})
      .finally(() => setChessLoading(false));
  }, []);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            Outside of work
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-10">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LeetCode Card */}
          <motion.a
            href={`https://leetcode.com/${LEETCODE_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-6 md:p-7 hover:glow-border transition-all duration-500 group block"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Code2 size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground leading-tight">
                  Got a good question?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Share it with me on LeetCode
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 pt-5 border-t border-border/30">
              {leetcodeLoading ? (
                <p className="text-xs text-muted-foreground/60">
                  Loading stats...
                </p>
              ) : leetcode ? (
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="font-display text-3xl text-primary">
                      {leetcode.totalSolved}
                    </p>
                    <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">
                      Problems solved
                    </p>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <div className="text-center">
                      <p className="text-green-400 font-medium">
                        {leetcode.easySolved}
                      </p>
                      <p className="text-muted-foreground/60 text-[10px]">
                        Easy
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-yellow-400 font-medium">
                        {leetcode.mediumSolved}
                      </p>
                      <p className="text-muted-foreground/60 text-[10px]">
                        Medium
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-red-400 font-medium">
                        {leetcode.hardSolved}
                      </p>
                      <p className="text-muted-foreground/60 text-[10px]">
                        Hard
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-primary/70 group-hover:text-primary transition-colors">
                  View my profile →
                </p>
              )}
            </div>

            <p className="text-xs text-primary/60 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              @{LEETCODE_USERNAME} →
            </p>
          </motion.a>

          {/* Chess.com Card */}
          <motion.a
            href={`https://www.chess.com/member/${CHESSCOM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl p-6 md:p-7 hover:glow-border transition-all duration-500 group block"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Swords size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground leading-tight">
                  Love chess?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Let's play — challenge me anytime
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 pt-5 border-t border-border/30">
              {chessLoading ? (
                <p className="text-xs text-muted-foreground/60">
                  Loading stats...
                </p>
              ) : chess && (chess.rapid || chess.blitz || chess.bullet) ? (
                <div className="flex items-center justify-between flex-wrap gap-3">
                  {chess.rapid !== null && (
                    <div>
                      <p className="font-display text-2xl md:text-3xl text-primary">
                        {chess.rapid}
                      </p>
                      <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">
                        Rapid
                      </p>
                    </div>
                  )}
                  {chess.blitz !== null && (
                    <div>
                      <p className="font-display text-2xl md:text-3xl text-primary">
                        {chess.blitz}
                      </p>
                      <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">
                        Blitz
                      </p>
                    </div>
                  )}
                  {chess.bullet !== null && (
                    <div>
                      <p className="font-display text-2xl md:text-3xl text-primary">
                        {chess.bullet}
                      </p>
                      <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">
                        Bullet
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-primary/70 group-hover:text-primary transition-colors">
                  View my profile →
                </p>
              )}
            </div>

            <p className="text-xs text-primary/60 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              @{CHESSCOM_USERNAME} →
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
