export function expires_in_days (days) {
  return () => {
    const time_offset = 1000 * 60 * 60 * 24 * days;
    return new Date(Date.now() + time_offset);
  };
}
