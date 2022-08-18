import { useTime } from "framer-motion";
import { useEffect } from "react";

const useTimeHook = () => {
    let timestamp
    let storage
    const currTimestamp = Date.now();
    try {
        storage = window.localStorage;
        timestamp = JSON.parse(storage.getItem("timestamp") || "1000");
    } catch (error) {
        timestamp = Date.now()
    }

  const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    hasTimePassed
      ? storage.setItem("timestamp", currTimestamp.toString())
      : storage.setItem("timestamp", timestamp.toString());
  }, []);

  return hasTimePassed;
};

export default useTimeHook;
