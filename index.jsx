import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const titles = [
  "鳥取県の概要",
  "訪問先",
  "見学内容",
  "スケジュール案",
  "観光プラン",
  "学習成果",
  "費用",
  "アクセス"
];

const getRandomPosition = () => ({
  top: `${Math.random() * 80 + 10}%`,
  left: `${Math.random() * 80 + 10}%`
});

export default function Home() {
  const [positions, setPositions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setPositions(titles.map(() => getRandomPosition()));
  }, []);

  return (
    <div className="relative w-full h-screen bg-blue-50 overflow-hidden">
      {titles.map((title, index) => (
        <motion.div
          key={index}
          className="absolute w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center text-center text-sm font-semibold cursor-pointer"
          style={{ ...positions[index] }}
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          onClick={() => router.push(`/content/${index}`)}
        >
          {title}
        </motion.div>
      ))}
    </div>
  );
}
